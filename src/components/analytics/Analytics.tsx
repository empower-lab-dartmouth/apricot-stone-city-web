import React, {useState} from 'react';
import './analytics.css';
import Nav from '../nav/NavBar';
import {Autocomplete, Box, Button,
  ButtonBase, Chip, FormControlLabel, FormGroup, Grid, Paper,
  Slider,
  Switch,
  TextField,
  ThemeProvider, Typography, createTheme, styled} from '@mui/material';
import {StoryScene, UserSummary, allQuests,
  globalUserSummaryState,
  questsSummaryStatsState,
  userLevelState,
  userSummaryAnalyticsState} from '../../state/recoil';
import {collection, getDocs,
  limit,
  orderBy,
  // orderBy,
  query} from 'firebase/firestore';
import {LoggedEvent,
  SceneAggregateFeedback, allScenesFeedbackState,
  allScenesState, allUsersState} from '../../state/recoil';
import {db} from '../firebase/firebase-config';
// import {AuthContext} from '../../context/auth-context';
import DataTable, {TableColumn} from 'react-data-table-component';
import {
  ExpandableRowsComponent} from
  'react-data-table-component/dist/src/DataTable/types';
import JSONDiff from './JSONDiff';
import {useRecoilState, useRecoilValue} from 'recoil';
import {
  setAllSceneFeedbackFromRemoteIfNeeded} from './aggregate-data';
import {userContextState} from '../map/graph-recoil';
import {NavLink} from 'react-router-dom';
import {ChordChart, anonChordKeys, chordData} from './ChordChart';
import {makeAllQuestStats, makeGlobalStats,
  setUserSummaryFromRemoteIfNeeded} from './user-summary';
import {questColumns, summaryToRows,
  userColumns, userCorrColumns,
  userSummariesToCorrelations, userSummariesToRow} from './rows';
import {UserGraph, userSummaryToData} from './UserChart';

const QUERY_LIMIT = 30;

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
  const q = query(collection(db, `zEL-${username}`), limit(QUERY_LIMIT),
      orderBy('date', 'desc'));
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

const downloadFile = ({data, fileName, fileType}: any) => {
  // Create a blob with the data we want to download as a file
  const blob = new Blob([data], {type: fileType});
  // Create an anchor element and dispatch a click event on it
  // to trigger a download
  const a = document.createElement('a');
  a.download = fileName;
  a.href = window.URL.createObjectURL(blob);
  const clickEvt = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  a.dispatchEvent(clickEvt);
  a.remove();
};

const exportToJson = (e: any) => {
  downloadFile({
    data: JSON.stringify(e),
    fileName: 'users.json',
    fileType: 'text/json',
  });
};

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

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

type FeedbackOnSceneCardProps = {
  sceneName: string,
  scene: StoryScene
  feedbacksSubmitted: SceneAggregateFeedback | undefined,
}

const FeedbackOnSceneCard = (props: FeedbackOnSceneCardProps) => {
  const {sceneName, feedbacksSubmitted, scene} = props;
  const [context, setContext] = useRecoilState(userContextState);
  const [showLiked, setShowLiked] = React.useState(false);
  const [showWanted, setShowWanted] = React.useState(false);
  return (<Paper
    sx={{
      p: 2,
      margin: 'auto',
      maxWidth: 500,
      flexGrow: 1,
      backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    }}
  >
    <Grid container spacing={2}>
      <Grid item>
        <ButtonBase sx={{width: 128, height: 128}}>
          <Img alt="image" src={scene.imgUrl} />
        </ButtonBase>
      </Grid>
      <Grid item xs={12} sm container>
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
            <Typography gutterBottom variant="subtitle1" component="div">
              {sceneName}
            </Typography>
            <NavLink to="/map">
              <Button color='success' variant='contained' onClick={
                () => setContext({
                  ...context,
                  selectedStorySceneID: scene.id,
                })
              }>Scene summary</Button>
            </NavLink>
            {
              scene.quests.map((p) => (
                <>
                  <img src={allQuests[p].img} style={{width: '62px'}}/>
                  <Chip label={allQuests[p].title} sx={{
                    'height': 'auto',
                    '& .MuiChip-label': {
                      borderRadius: '25px',
                      whiteSpace: 'normal',
                      backgroundColor: 'lightGreen',
                      color: 'black',
                    },
                  }}
                  key={p}/>
                </>
              ))
            }
            {feedbacksSubmitted === undefined ?
            <Typography variant="body2" gutterBottom>
              No feedback submitted by any users.
            </Typography> :
            <>
              <Typography variant="body2" gutterBottom>
              Feedback
              </Typography>
              <FormGroup>
                <FormControlLabel sx={{color: 'black'}}
                  control={<Switch checked={showLiked}
                    onChange={() => setShowLiked(!showLiked)}
                  />} label='show/hide "Liked" comments' />
                <FormControlLabel sx={{color: 'black'}}
                  control={<Switch checked={showWanted}
                    onChange={() => setShowWanted(!showWanted)}
                  />} label='show/hide "Wanted" comments' />
              </FormGroup>
              <Typography variant="body2" gutterBottom>
                {`Enjoyment rating [1 (low) to 6 (high)], average: 
                ${feedbacksSubmitted.avgEnjoymentScore} standard deviation: 
                ${feedbacksSubmitted.stdEnjoymentScore}`}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {`Learning rating [1 (low) to 6 (high)], average: 
                ${feedbacksSubmitted.avgLearnScore} standard deviation: 
                ${feedbacksSubmitted.stdLearnScore}`}
              </Typography>
              {
                feedbacksSubmitted.avgTestScore !== 'none' ?
                <Typography variant="body2" gutterBottom>
                  {`Quiz score [0 (low) to 1 (high)], average: 
                ${feedbacksSubmitted.avgTestScore} standard deviation: 
                ${feedbacksSubmitted.stdTestScore}`}
                </Typography> : <></>
              }
              {
                showLiked ? <div style={{backgroundColor: 'lightgreen'}}>
                  {
                    feedbacksSubmitted.liked.map((l) =>
                      <Typography key={l} variant="body2" gutterBottom>
                        {l}
                      </Typography>)
                  }
                </div>: <></>
              }
              {
                showWanted ? <div style={{backgroundColor: 'lightpink'}}>
                  {
                    feedbacksSubmitted.wanted.map((l) =>
                      <Typography key={l} variant="body2" gutterBottom>
                        {l}
                      </Typography>)
                  }
                </div>: <></>
              }
            </>
            }
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Paper>);
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
  const allScenes = useRecoilValue(allScenesState);
  const userLevel = useRecoilValue(userLevelState);
  const [allScenesFeedback, setAllScenesFeedback] = useRecoilState(
      allScenesFeedbackState);
  const [globalUserSummary, setGlobalUserSummary] = useRecoilState(
      globalUserSummaryState);
  const [usersDataSummary, setUsersDataSummary] = useRecoilState(
      userSummaryAnalyticsState);
  const [questsSummary, setQuestsSummary] = useRecoilState(
      questsSummaryStatsState);
  // const [isLoading, setIsLoading] = React.useState<number>(0);
  const [eventLogs, setEventLogs] = useState<LoggedEvent[]>([]);
  const [showReferals, setShowReferals] = useState<boolean>(false);
  const [showJSON, setShowJSON] = useState<boolean>(false);
  const [value2, setValue2] = React.useState<number[]>([0, 100]);
  const minDistance = 5;
  const fullAccess = userLevel > 4;
  const [selectedUser, setSelectedUser] = useState<
  string | undefined>(undefined);
  React.useEffect(() => {
    loadLogs(selectedUser, setEventLogs);
  }, [users, selectedUser]);
  const selectedUserSummary = selectedUser === undefined ? undefined :
  usersDataSummary[selectedUser];
  const setSelectedUserSummary = (username: string) =>
    (value: UserSummary) => setUsersDataSummary({
      ...usersDataSummary,
      [username]: value,
    });
  const data: Row[] = logsToTableRows(eventLogs);
  const handleChange2 = (
      event: Event,
      newValue: number | number[],
      activeThumb: number,
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue as number[]);
    }
  };
  const valuetext = (value: number) => {
    return `${value}°C`;
  };


  return (
    <>
      <Nav />
      <div className="page-container1">
        <div className="scrollable-container" >
          <div style={{marginTop: '30px', padding: '10px',
            backgroundColor: 'white'}}>
            <FormGroup>
              <FormControlLabel sx={{color: 'black'}}
                control={<Switch checked={showReferals}
                  onChange={() => setShowReferals(!showReferals)}
                />} label='show/hide user referals' />
              <FormControlLabel sx={{color: 'black'}}
                control={<Switch checked={showJSON}
                  onChange={() => setShowJSON(!showJSON)}
                />} label='show/hide raw JSON' />
            </FormGroup>
            <Button variant='contained'
              onClick={() => {
                setAllSceneFeedbackFromRemoteIfNeeded(
                    users, setAllScenesFeedback,
                    Object.values(allScenesFeedback).length === 0);
              }} disabled={!fullAccess}>
                Load feedback on scenes (updates every 20 min)</Button>
            <Button disabled={allScenesFeedback === undefined || Object.values(
                allScenesFeedback).length === 0 || !fullAccess}
            variant='contained' onClick={
              () => {
                if (selectedUser !== undefined &&
                  allScenesFeedback !== undefined) {
                  setUserSummaryFromRemoteIfNeeded(
                      selectedUser, allScenesFeedback,
                      setSelectedUserSummary(selectedUser),
                      selectedUserSummary === undefined);
                }
              }
            }>Load selected user summary</Button>
            <Button disabled={allScenesFeedback === undefined || Object.values(
                usersDataSummary).length === 0 || !fullAccess}
            variant='contained' onClick={
              () => {
                console.log('update global stats');
                setGlobalUserSummary(makeGlobalStats(
                    usersDataSummary, users));
                if (Object.values(usersDataSummary).length !== 0) {
                  setQuestsSummary(makeAllQuestStats(
                      usersDataSummary,
                  ));
                }
                console.log('updated global summary');
              }
            }>Load aggregated summary</Button>
            <Button variant='contained' disabled={!fullAccess} onClick={
              () => {
                exportToJson(usersDataSummary);
              }
            }>Update global cache</Button>
            <Button disabled={!fullAccess}
              variant='contained' onClick={
                async () => {
                  await fetch('./users-summary-data.json'
                      , {
                        headers: {
                          'Content-Type': 'application/json',
                          'Accept': 'application/json',
                        },
                      },
                  )
                      .then(function(response) {
                        return response.json();
                      })
                      .then(function(myJson) {
                        setUsersDataSummary(JSON.parse(myJson) as any);
                      });
                }
              }>Pull from global cache</Button>
            <Slider
              getAriaLabel={() => 'Minimum distance shift'}
              value={value2}
              onChange={handleChange2}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              disableSwap
            />
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
                label: usersDataSummary[u.username] === undefined ?
                u.username :
              `${u.username} ⭐⭐⭐⭐⭐⭐⭐⭐`,
              }))
              }
              isOptionEqualToValue={(option,
                  value) => option.item === value.item}
              renderInput={(params) => <TextField {...params}
                label={'Render analytics for selected user:'} />}
            />
            {
              globalUserSummary !== undefined &&
              Object.values(globalUserSummary).length > 0 ?
              <>
                <h2> All users summary </h2> <br/>
                <DataTable
                  columns={userColumns}
                  data={userSummariesToRow(Object.values(
                      usersDataSummary))}
                  title="User Summary Table"
                />
                <DataTable
                  columns={userCorrColumns}
                  data={userSummariesToCorrelations(Object.values(
                      usersDataSummary))}
                  title="User Data Coorelations"
                />
                {
                  showJSON ?
                  <p> {JSON.stringify(globalUserSummary)}</p> : <></>
                }
              </> : <h2> No summary for all users </h2>
            }
            {
              questsSummary.length !== 0 ?
              <>
                <h2> All quests summary </h2> <br/>
                <DataTable
                  columns={questColumns}
                  data={summaryToRows(questsSummary)}
                  title="Quests Summary Table"
                />
                {
                  showJSON ?
                  <p> {JSON.stringify(questsSummary)}</p> : <></>
                }
              </> : <h2> No summary for all quests </h2>
            }
            {/* <Button disabled
              variant='contained' onClick={
                () => {
                  if (allScenesFeedback !== undefined) {
                    pullAllUserSummariesFromFb(
                        users, usersDataSummary,
                        allScenesFeedback, setUsersDataSummary, setIsLoading);
                  }
                }
              }>Load all user summaries</Button> */}
            {/* {
              isLoading > 0 ? <h3>{`Loading ${isLoading}/${users.length} user
              summaries (this may take a few minutes)`}</h3> : <></>
            } */}
            {
              selectedUserSummary !== undefined ?
              <><h2> Selected user summary </h2>
                <UserGraph data={userSummaryToData(selectedUserSummary)}
                  percentStart={value2[0]/100}
                  percentEnd={value2[1]/100}/>
                {
                  showJSON ?
                  <p> {JSON.stringify(selectedUserSummary)}</p> : <></>
                }
              </>: <h2> No selected user summary </h2>
            }
            {
              showReferals ?
              <ChordChart width={1000}
                height={1000} data={chordData}
                keys={anonChordKeys.map((v) => v.toString())} /> : <></>
            }
            {
              data.length > 0 ?
              <>
                <h2>Detailed user data</h2>
                <DataTable
                  columns={columns}
                  data={data}
                  title="Events"
                  pagination
                  expandableRows
                  expandableRowExpanded={(row: Row) => row.defaultExpanded}
                  expandableRowsComponent={ExpandedComponent}
                />
              </> : <h2>No detailed user data</h2>
            }
            {
              Object.values(allScenesFeedback).length > 0 ?
              <>
                <Typography variant="h3" component="div">
              Feedback on scenes:
                </Typography>
                <Grid container spacing={2}>
                  {
                    Object.values(allScenes)
                        .map((s) => (
                          <Grid key={s.id} item xs={6}>
                            <FeedbackOnSceneCard
                              sceneName={s.title}
                              scene={allScenes[s.id]}
                              feedbacksSubmitted={allScenesFeedback[s.id]}
                            /></Grid>))
                  }

                </Grid></> : <></>

            }
          </div>
        </div>
      </div>
    </>
  );
};
