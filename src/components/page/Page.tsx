/* eslint-disable react/jsx-key */
import * as React from 'react';
import Card from '../card/Card';
import {handleAction, updateCompletedScenes,
  wakeUpServer} from '../../state/handle-action';
import {PageData} from './page-model';
import './page.css';
import Nav from '../nav/NavBar';
// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
import {RatedSceneEvent, allQuests,
  convoResponseErrorState,
  serverReadyState, useServerUrlState} from '../../state/recoil';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {useRecoilState, useRecoilValue} from 'recoil';
import {allScenesState, competedScenesState, currentPageState,
  sceneFeedbackDialogState,
  typewriterEffectState} from '../../state/recoil';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Modal from '@mui/material/Modal';
import {Box, Button, FormControlLabel,
  FormGroup, LinearProgress, Switch,
  TextField, Typography} from '@mui/material';
import {AuthContext} from '../../context/auth-context';
import {EmojiRating} from 'emoji-rating-component';
import {doc, setDoc} from 'firebase/firestore';
import {db} from '../firebase/firebase-config';
import {REMOTE_SERVER_URL} from '../../utils/data-utils';

const E: any = EmojiRating as any;

// import optionsBackgroundImg from '../../assets/golden-paper-tex.jpeg';

// const radialGradient =
// eslint-disable-next-line max-len
// `background: rgb(4,0,79); background: linear-gradient(90deg, rgba(4,0,79,1) 0%, rgba(255,255,255,1) 8%, rgba(255,184,0,1) 17%, rgba(242,175,0,1) 85%, rgba(255,255,255,1) 95%, rgba(4,0,79,1) 100%);`;

type PageParams = {
  pageData: PageData
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type SceneFeedback = {
  date: string,
  enjoymentRating: number,
  learningRating: number,
  liked: string,
  wanted: string,
  username: string,
  sceneId: string,
  quests: string[],
}

const sendSceneFeedbackToFB = async (feedback: SceneFeedback,
    server: string) => {
  // do firebase stuff to write
  console.log('submitting feedback');
  try {
    await setDoc(
        doc(db, 'SceneFeedback', feedback.date), feedback);
    const id = `${feedback.username}-sceen-feedback${feedback.date}`;
    const loggedEvent: RatedSceneEvent = {
      type: 'scene-feedback',
      liked: feedback.liked,
      wanted: feedback.wanted,
      learningRating: feedback.learningRating,
      enjoymentRating: feedback.enjoymentRating,
      username: feedback.username,
      quests: feedback.quests,
      date: feedback.date,
      sceneId: feedback.sceneId,
      id,
      customServer: server !== REMOTE_SERVER_URL,
    };
    await setDoc(
        doc(db, 'EventLog', id), loggedEvent);
    console.log('Feedback written to fb');
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

const feedbackStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '95%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Page: React.FC<PageParams> = ({pageData}) => {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
  const [typewriterEffectOn, setTypewriterEffectOn] = useRecoilState(
      typewriterEffectState);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const [sceneFeedbackDialog, setFeedbackDialog] = useRecoilState(
      sceneFeedbackDialogState);
  const messagesEndRef = React.useRef(null);
  const scrollToBottom = () => {
    (messagesEndRef?.current as any).scrollIntoView({behavior: 'smooth'});
  };
  React.useEffect(scrollToBottom, [pageData.chatHistory]);
  const [freeResponseModalOpen,
    setFreeResponseModalOpen] = React.useState(false);
  const [inputtedFreeResponseText,
    setInputtedFreeResponseText] = React.useState<string>('');
  const handleOpenFreeResponse = () => setFreeResponseModalOpen(true);
  const handleCloseFreeResponse = () => {
    setFreeResponseModalOpen(false);
    setInputtedFreeResponseText('');
  };
  const allStoryScenes = useRecoilValue(allScenesState);
  const [completedScenes, setCompletedScenes] = useRecoilState(
      competedScenesState);
  const {currentUser} = React.useContext(AuthContext);
  const [enjoyable, setEnjoyable] = React.useState<number>(3);
  const [learning, setLearning] = React.useState<number>(3);
  const [likedFeedback, setLikedFeedback] = React.useState<string>('');
  const [wantedFeedback, setWantedFeedback] = React.useState<string>('');
  const [serverIsReady, setServerIsReady] = useRecoilState(serverReadyState);
  const [convoError, setConvoError] = useRecoilState(convoResponseErrorState);
  const server = useRecoilValue(useServerUrlState);

  const handleInputTextChange = (e: React.ChangeEvent<HTMLInputElement> |
    React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputtedFreeResponseText(e.target.value);
  };


  return (
    <div>
      <Nav />
      {
        sceneFeedbackDialog !== undefined ?
        <Modal
          open
        >
          <Box sx={feedbackStyle}>
            <Typography variant="h5" component="h2">
            You completed the scene: {sceneFeedbackDialog.scene.title}
            </Typography>
            <img
              className='center'
              src={`${sceneFeedbackDialog
                  .scene.imgUrl}?w=64&h=64&fit=crop&auto=format`}
              srcSet={`${sceneFeedbackDialog
                  .scene.imgUrl}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={'scene image'}
              style={{
                width: 'auto',
                height: '100px',
              }}
              loading="lazy"
            />
            {
            sceneFeedbackDialog.scene.quests.length > 0 ?
            <Typography variant="h6" component="h2">
            This scene fulfils the quest(s):
              {sceneFeedbackDialog.scene.quests
                  .map((q)=> allQuests[q].title).join(', ')}
            </Typography> : <></>
            }
            <Typography variant="body1" component="h2">
            Please provide thoughtful feedback on your experience
             to help improve the story content. Thank you!
            </Typography>
            <Typography variant="h6" component="h2">
              How enjoyable was this scene?
            </Typography>
            <E selected={enjoyable} onSelected={(x: any) => {
              setEnjoyable(x);
            }}/>
            <Typography variant="h6" component="h2">
              How would you rate your learning for this scene?
            </Typography>
            <E selected={learning} onSelected={(x: any) => {
              setLearning(x);
            }}/>
            <br />
            <Typography variant="h6" component="h2">
            What did you like about this scene?
            </Typography>
            <TextField onChange={(x) => {
              setLikedFeedback(x.target.value);
            }}
            multiline
            style={{width: '100%',
              paddingBottom: '10px', paddingTop: '10px'}}
            id="outlined-basic"
            value={likedFeedback}
            label="e.g. I liked... " variant="outlined" />
            <br />
            <Typography variant="h6" component="h2">
            What would you change about this scene?
            </Typography>
            <TextField onChange={(x) => {
              setWantedFeedback(x.target.value);
            }}
            multiline
            style={{width: '100%',
              paddingBottom: '10px', paddingTop: '10px'}}
            id="outlined-basic"
            value={wantedFeedback}
            label="e.g. I would change..."
            variant="outlined" />
            <Button variant="contained" onClick={() => {
              sendSceneFeedbackToFB({
                date: (new Date()).toString(),
                enjoymentRating: enjoyable,
                learningRating: learning,
                liked: likedFeedback,
                wanted: wantedFeedback,
                username: currentUser?.email as string,
                sceneId: sceneFeedbackDialog.scene.id,
                quests: sceneFeedbackDialog.scene.quests,
              }, server);
              setFeedbackDialog(undefined);
              const updatedCompletedScenes = completedScenes.add(
                  sceneFeedbackDialog
                      .scene.id);
              setCompletedScenes(updatedCompletedScenes);
              updateCompletedScenes(updatedCompletedScenes,
                currentUser?.email as string);
            }}>Submit feedback</Button>
          </Box>
        </Modal> :
        <></>
      }
      <Modal
        open={freeResponseModalOpen}
        onClose={handleCloseFreeResponse}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="page-container">
          <div className="page scrollable-container" >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
            Enter text below:
              </Typography>
              <TextField onChange={handleInputTextChange}
                style={{width: '100%',
                  paddingBottom: '10px', paddingTop: '10px'}}
                id="outlined-basic" variant="outlined" />
              <Button variant="contained" onClick={() => {
                handleAction({
                  action: {
                    type: 'click-option',
                    option: inputtedFreeResponseText,
                  },
                  correctAnswer: 'na',
                  id: 'free-response',
                  text: inputtedFreeResponseText,
                  type: 'option'}, currentPage, setCurrentPage,
              (currentUser?.email) as string,
              allStoryScenes, completedScenes,
              setCompletedScenes, setFeedbackDialog, server,
              setConvoError);
                setInputtedFreeResponseText('');
                setFreeResponseModalOpen(false);
              }}>Submit</Button>
            </Box>
          </div>
        </div>
      </Modal>
      <div className="page-container">
        <div className="page scrollable-container" >
          { pageData.chatHistory.map((cardOrOptionData) =>
            cardOrOptionData.type === 'option' ?
            <Stack
              direction="row-reverse"
              justifyContent="flex-start"
              alignItems="center"
              spacing={2}
            >
              <Chip label={cardOrOptionData.text} sx={{
                'height': 'auto',
                '& .MuiChip-label': {
                  display: 'block',
                  borderRadius: '25px',
                  padding: '20px',
                  whiteSpace: 'normal',
                  backgroundColor: '#ffb800',
                  color: 'black',
                },
              }}
              />
            </Stack> :
            <Card cardData={cardOrOptionData} key={cardOrOptionData.id}/>)}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className='fixed'>
        <FormGroup>
          <FormControlLabel control={<Switch
            checked={typewriterEffectOn}
            onChange={() => setTypewriterEffectOn(!typewriterEffectOn)} />}
          label="Typewriter effect" />
        </FormGroup>
        {convoError ? <b>The server returned an error.</b> : <></>}
        {
            serverIsReady && !convoError ?
        <BottomNavigation showLabels sx={{
          backgroundColor: 'white',
        }}>
          { pageData.options.map((optionData) =>
            <BottomNavigationAction key={optionData.id}
              label={optionData.text} onClick={() => {
                if (optionData.action.type === 'free-response') {
                  handleOpenFreeResponse();
                } else {
                  handleAction({
                    ...optionData,
                    type: 'option'}, currentPage, setCurrentPage,
                    (currentUser?.email) as string, allStoryScenes,
                    completedScenes, setCompletedScenes,
                    setFeedbackDialog, server, setConvoError);
                }
              }} />,
          )}
        </BottomNavigation> :
        <>{
          convoError ?
          <>
            <p>
        Likely the issue was casued by
        returning to a scene using an invalid path.
              <br />
        Please check that the path is valid in map view.
              <br />
        In the meantime, try returning to a different scene.
            </p>
          </> :
        <>
          <LinearProgress color="secondary" />
          <LinearProgress color="success" />
          <LinearProgress color="inherit" />
          <p>
        Oops, the server went to sleep and is waking up for you now.
            <br />
        This shouldn&rsquo;t
        take more than a minute or two.
          </p>
          <Button onClick={() => wakeUpServer(setServerIsReady, server)}>
            Ping server again</Button>
        </>
        }
        </>
        }
      </div>
    </div>
  );
};

export default Page;
