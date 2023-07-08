import React, {useState} from 'react';
import './analytics.css';
import Nav from '../nav/NavBar';
import {Autocomplete, Box, Paper,
  TextField,
  ThemeProvider, createTheme, styled} from '@mui/material';
import {collection, getDocs,
  limit,
  query, where} from 'firebase/firestore';
import {LoggedEvent} from '../../state/recoil';
import {db} from '../firebase/firebase-config';
// import {AuthContext} from '../../context/auth-context';
import DataTable, {TableColumn} from 'react-data-table-component';
import {
  ExpandableRowsComponent} from
  'react-data-table-component/dist/src/DataTable/types';

const QUERY_LIMIT = 10;

type Row = {
    type: string
    id: string,
    defaultExpanded: boolean
    date: string
    summary: string,
    data: LoggedEvent
    customServer: boolean,
}

const columns: TableColumn<Row>[] = [
  {
    name: 'Event type',
    selector: (row: Row) => row.type,
    sortable: true,
  },
  {
    name: 'Date',
    selector: (row: Row) => row.date,
    sortable: true,
    sortFunction: (rowA, rowB) => ((new Date(rowB.date))
        .getTime() - (new Date(rowA.date)).getTime()),
  },
  {
    name: 'Custom server',
    selector: (row: Row) => row.customServer ? 'Yes' : 'No',
    sortable: true,
    sortFunction: (rowA, rowB) => (rowA.customServer === rowB.customServer ? 0 :
    rowA.customServer ? -1 : 1),
  },
  {
    name: 'Data',
    selector: (row: Row) => row.summary,
    sortable: false,
  },
];

const ExpandedComponent: ExpandableRowsComponent<Row> = (
    d) => {
  const {data} = d.data;
  if (data.type === 'chat-option') {
    return <pre style={{
      borderWidth: '30px',
      borderStyle: 'none none none solid',
      borderColor: data.correctAnswer === 'true' ? 'lightgreen' :
        data.correctAnswer === 'false' ? 'lightcoral' : 'lightgray',
    }}>{JSON.stringify(data, null, 2)}</pre>;
  } else {
    return <pre style={{
      borderWidth: '30px',
      borderStyle: 'none none none solid',
      borderColor: 'lightgray'}}>{JSON.stringify(data, null, 2)}</pre>;
  }
  return <></>;
};

type LoggedEventOptionalFields = LoggedEvent & {
  customServer: boolean | undefined
}

const loadLogs = async (username: string | undefined,
    setter: (e: LoggedEvent[]) => void) => {
  if (username === undefined) {
    setter([]);
    return;
  }
  const q = query(collection(db, 'EventLog'),
      where('username', '==', username), limit(QUERY_LIMIT));
  const querySnapshot = await getDocs(q);
  console.log('Firebase collection read <event logs>');
  const docs = querySnapshot.docs
      .map((doc: any) => {
        const d = doc.data() as any as LoggedEventOptionalFields;
        if (d.customServer === undefined) {
          d.customServer = true;
        }
        return d as LoggedEvent;
      })
      .sort((a, b) => (new Date(b.date)).getTime() -
      (new Date(a.date)).getTime());
  setter(docs);
};

type UserLevel = {
    level: number
    username: string,
}

const loadUsers = async (setter: (v: UserLevel[]) => void) => {
  const q = query(collection(db, 'UserLevel'));
  console.log('Firebase collection read <User Level>');
  const querySnapshot = await getDocs(q);
  console.log('set docs!');
  const docs = querySnapshot.docs.map((d) => d.data() as any as UserLevel);
  setter(docs);
};


const inputFieldStyles = {
  width: '70%',
  backgroundColor: 'white',
  paddingBottom: '10px',
};

const lightTheme = createTheme({palette: {mode: 'light'}});
const Item = styled(Paper)(({theme}) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
}));

export const UserEvent = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box
        sx={{
          p: 2,
          bgcolor: 'background.default',
          display: 'grid',
          gridTemplateColumns: {md: '1fr 1fr'},
          gap: 2,
        }}
      >
        {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((elevation) => (
          <Item key={elevation} elevation={elevation}>
            {`elevation=${elevation}`}
          </Item>
        ))}
      </Box>
    </ThemeProvider>
  );
};

const stringSummary = (l: LoggedEvent) => {
  switch (l.type) {
    case 'chat-option':
      return `${l.correctAnswer === 'true' ? 'Quiz correct answer' :
      l.correctAnswer === 'false' ? 'Quiz incorrect answer' :
      'Clicked: ' + l.option + ' viewed: ' + l.response
          .join(' ').split(' ').length + ' words'}`;
    case 'login':
      return `Server: ${l.server}`;
    case 'return-to-scene':
      return `Returned to scene: ${l.newPath.parentModules.join(' ')} 
      from: ${l.priorPath.parentModules.join(' ')}`;
    case 'scene-feedback':
      return `Enjoyment: ${l.enjoymentRating}, Learning: ${l.learningRating}`;
  }
};

const logsToTableRows: (logs: LoggedEvent[]) => Row[] = (logs) =>
  logs.map((l) => ({
    date: l.date,
    customServer: l.customServer,
    id: l.id,
    type: l.type,
    data: l,
    summary: stringSummary(l),
    defaultExpanded: false,
  }));

export const AnalyticsPage: React.FC = () => {
  const [users, setUsers] = useState<UserLevel[]>([]);
  const [eventLogs, setEventLogs] = useState<LoggedEvent[]>([]);
  const [selectedUser, setSelectedUser] = useState<
  string | undefined>(undefined);
  React.useEffect(() => {
    loadLogs(selectedUser, setEventLogs);
  }, [users, selectedUser]);
  React.useEffect(() => {
    loadUsers(setUsers);
  }, []);
  const data: Row[] = logsToTableRows(eventLogs);

  return (
    <>
      <Nav />
      <div className="page-container1">
        <div className="scrollable-container" >
          <div style={{marginTop: '30px', padding: '10px',
            backgroundColor: 'white'}}>
            <Autocomplete
              sx={inputFieldStyles}
              value={selectedUser === undefined ? undefined : {
                item: selectedUser,
                label: selectedUser}}
              onChange={(_event, val, _reason, _details) =>
                setSelectedUser(val?.item)}
              disableListWrap
              getOptionLabel={(option) => option.label}
              options={users.map((u) => ({
                item: u.username,
                label: u.username,
              }))
              }
              isOptionEqualToValue={(option,
                  value) => option.item === value.item}
              renderInput={(params) => <TextField {...params}
                label={'Render analytics for selected user:'} />}
            />
            <DataTable
              columns={columns}
              data={data}
              title="Events"
              pagination
              expandableRows
              expandableRowExpanded={(row: Row) => row.defaultExpanded}
              expandableRowsComponent={ExpandedComponent}
            />
          </div>
        </div>
      </div>
    </>
  );
};
