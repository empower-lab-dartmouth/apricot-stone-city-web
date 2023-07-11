import React, {useState} from 'react';
import './analytics.css';
import Nav from '../nav/NavBar';
import {Autocomplete, Box, Paper,
  TextField,
  ThemeProvider, createTheme, styled} from '@mui/material';
import {collection, getDocs,
  limit,
  // orderBy,
  query} from 'firebase/firestore';
import {LoggedEvent, allUsersState} from '../../state/recoil';
import {db} from '../firebase/firebase-config';
// import {AuthContext} from '../../context/auth-context';
import DataTable, {TableColumn} from 'react-data-table-component';
import {
  ExpandableRowsComponent} from
  'react-data-table-component/dist/src/DataTable/types';
import JSONDiff from './JSONDiff';
import {useRecoilValue} from 'recoil';


const QUERY_LIMIT = 300;

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
  } else if (data.type === 'edit-scene-card') {
    return <pre style={{
      borderWidth: '30px',
      borderStyle: 'none none none solid',
      borderColor: 'lightgray'}}>
      <p>
        {
          JSON.stringify(data.feedback)
        }</p>
      <JSONDiff oldValue={
        data.sceneBefore} newValue={
        data.sceneAfter} />
    </pre>;
  } else {
    return <pre style={{
      borderWidth: '30px',
      borderStyle: 'none none none solid',
      borderColor: 'lightgray'}}>{JSON.stringify(data, null, 2)}</pre>;
  }
  return <></>;
};

type LoggedEventOptionalFields = LoggedEvent

const loadLogs = async (username: string | undefined,
    setter: (e: LoggedEvent[]) => void) => {
  if (username === undefined) {
    setter([]);
    return;
  }
  const q = query(collection(db, `zEL-${username}`), limit(QUERY_LIMIT));
  const querySnapshot = await getDocs(q);
  console.log(querySnapshot.docs);
  console.log('Firebase collection read <event logs>');
  const docs = querySnapshot.docs
      .map((doc: any) => {
        const d = doc.data() as any as LoggedEventOptionalFields;
        // if (d.customServer === undefined) {
        //   d.customServer = true;
        // }
        return d as LoggedEvent;
      })
      .sort((a, b) => b.date - a.date);
  // Uncomment to do migrations:
  // await Promise.all(docs.map(async (d, i) => await setDoc(
  //     doc(db, 'EventLog', d.id), {
  //       ...d,
  //       date: (new Date(d.date)).getTime(),
  //     })))
  //     .then((res) => console.log('all events written or failed'));
  // console.log('docs');
  // console.log(docs);
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
    case 'create-scene-card':
      return `${l.newScene.title} has ${l.newScene.quests.length === 0 ?
        'no quests' : 'quests'}`;
    case 'edit-scene-card':
      return `Edited: "${l.sceneBefore.title}"`;
    case 'delete-scene-card':
      return `Deleted "${l.sceneBefore.title}"`;
    case 'session':
      return `Active for ${l.facilitator.activeTime + l.progress.activeTime +
        l.analysis.activeTime + l.adventure.activeTime}ms`;
  }
};

const logsToTableRows: (logs: LoggedEvent[]) => Row[] = (logs) =>
  logs.map((l) => ({
    date: new Date(l.date).toString(),
    customServer: l.customServer,
    id: l.id,
    type: l.type,
    data: l,
    summary: stringSummary(l),
    defaultExpanded: false,
  }));

export const AnalyticsPage: React.FC = () => {
  const users = useRecoilValue(allUsersState);
  const [eventLogs, setEventLogs] = useState<LoggedEvent[]>([]);
  const [selectedUser, setSelectedUser] = useState<
  string | undefined>(undefined);
  React.useEffect(() => {
    loadLogs(selectedUser, setEventLogs);
  }, [users, selectedUser]);

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
