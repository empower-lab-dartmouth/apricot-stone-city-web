import React, {useContext, useEffect, useState} from 'react';
import Nav from '../nav/NavBar';
import './facilitator.css';
import {Alert, AlertTitle,
  Box,
  Button, Chip, FormControlLabel, FormGroup,
  Modal,
  Stack, Switch, TextField, Typography} from '@mui/material';
import {collection, query, getDocs, setDoc, doc} from 'firebase/firestore';
import {db} from '../firebase/firebase-config';
import {AuthContext} from '../../context/auth-context';
import {updateLevel} from '../profile/Quests';

export type RequestType = 'Complete Level 1' | 'Complete Level 2' |
'Complete Level 3' | 'Complete Level 4' | 'Other' | 'None'
export type PostToFacilitator = {
    status: 'accepted' | 'dismissed' | 'active',
    title: string,
    hiddenForUser: boolean,
    date: string, // also ID
    message: string,
    requestorUsername: string,
    request: RequestType,
    responderUsername?: string,
    response?: string,
    responseDate?: string
}

export const setFacilitatorRequestInFB = async (request: PostToFacilitator) => {
  // do firebase stuff to write
  console.log('submitting request to facilitators');
  try {
    await setDoc(
        doc(db, 'PostToFacilitator', request.date), request);
    await setDoc(
        doc(db, 'UserViewPostToFacilitator', request.date), request);
    console.log('Req. to facilitators written to fb');
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

type RequestsProps = PostToFacilitator & {
    reply: undefined | (() => void),
    replyHeader: string,
}

export const UserPost: React.FC<RequestsProps> = (props) => {
  const {status, title, message, date,
    requestorUsername, request, responderUsername,
    response, responseDate, reply, replyHeader} = props;
  const severity = status === 'accepted' ? 'success' :
        status === 'dismissed' ? 'error' : 'info';

  return (<Alert sx={{backgroundColor: 'white', color: 'black',
    width: '100%'}}
  severity={severity} variant={status === 'accepted' ||
    status === 'dismissed' ? 'outlined' : 'filled'}>
    <AlertTitle>{title}</AlertTitle>
    <Typography variant="body2" gutterBottom>
      <strong>From: </strong>{requestorUsername}, {date}
    </Typography>
    <Chip label={request} />
    <Typography variant="body1" gutterBottom>
      <strong> Message: </strong>{message}
    </Typography>
    {
        responderUsername !== undefined && response !== undefined ?
        <>
          <Typography sx={{color: 'darkblue'}} variant="body2" gutterBottom>
        Response: {response}
          </Typography>
          <Typography sx={{color: 'darkblue'}} variant="body2" gutterBottom>
        From: {responderUsername}, {responseDate}
          </Typography>
        </> : <></>
    }
    {
        reply !== undefined ?
        <Button variant='contained' sx={{marginRight: '10px'}} color='info'
          onClick={reply}>{replyHeader}</Button> : <></>
    }
  </Alert>);
};


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const FacilitatorPage: React.FC = () => {
  const {currentUser} = useContext(AuthContext);
  const [showArchivedPosts, setShowArchivedPosts] = useState(false);
  const [requests, setRequests] = useState<PostToFacilitator[]>([]);
  const [facilitatorMessage, setFacilitatorMessage] = useState<string>('');
  const [facilitatorResponseOpen, setFacilitatorResponseOpen] = useState<
  PostToFacilitator | undefined>(undefined);
  const q = query(collection(db, 'PostToFacilitator'));
  const loadDataFromFb = async () => {
    const querySnapshot = await getDocs(q);
    const docs = querySnapshot.docs
        .map((doc: any) => doc.data()) as any as PostToFacilitator[];
    setRequests(docs);
    loadDataFromFb();
  };
  useEffect(() => {
    loadDataFromFb();
  });

  const approveRequest = (r: RequestType, username: string) => {
    if (r === 'Complete Level 1') {
      updateLevel(username, 1);
    } else if (r === 'Complete Level 2') {
      updateLevel(username, 2);
    } else if (r === 'Complete Level 3') {
      updateLevel(username, 3);
    } else if (r === 'Complete Level 4') {
      updateLevel(username, 4);
    }
  };
  const updateRequestsLocally = (updatedReq: PostToFacilitator) => {
    const newValues = requests.map((v) =>
      (v.date === updatedReq.date ? updatedReq : v));
    setRequests(newValues);
  };
  return (<>
    <Nav />
    <Modal
      open={facilitatorResponseOpen !== undefined}
      onClose={() => {
        setFacilitatorResponseOpen(undefined);
        setFacilitatorMessage('');
      }}>
      <div>
        <div >
          <Box sx={style}>
            <Typography variant="h6" component="h2">
              <strong> Request: </strong> {facilitatorResponseOpen?.request}
            </Typography>
            <Typography variant="body1" component="h2">
              <strong> From: </strong>
              {facilitatorResponseOpen?.requestorUsername}
            </Typography>
            <Typography variant="body1" component="h2">
              <strong> Message: </strong> {facilitatorResponseOpen?.message}
            </Typography>
            <Typography variant="h6" component="h2">
            Write a response explaining your action:
            </Typography>
            <TextField onChange={(e) =>
              setFacilitatorMessage(e.target.value)}
            multiline
            value={facilitatorMessage}
            style={{width: '100%',
              paddingBottom: '10px', paddingTop: '10px'}}
            id="outlined-basic" variant="outlined" />
            <Typography variant="h6" component="h2">
            What action are you taking?
            </Typography>
            <Button sx={{marginTop: '5px', marginRight: '5px'}}
              variant="contained"
              color="success"
              disabled={
                facilitatorMessage === ''
              }
              onClick={() => {
                const updatedReq: PostToFacilitator = {
                  ...(facilitatorResponseOpen as PostToFacilitator),
                  status: 'accepted',
                  hiddenForUser: true,
                  title: 'Accepted request',
                  responseDate: (new Date()).toString(),
                  responderUsername: currentUser?.email as string,
                  response: facilitatorMessage,
                };
                setFacilitatorRequestInFB(updatedReq);
                updateRequestsLocally(updatedReq);
                approveRequest(
                    (facilitatorResponseOpen as PostToFacilitator).request,
                    (facilitatorResponseOpen as PostToFacilitator)
                        .requestorUsername);
                setFacilitatorResponseOpen(undefined);
                setFacilitatorMessage('');
              }}>Approve</Button>
            <Button sx={{marginTop: '5px'}}
              variant="contained"
              color="error"
              disabled={
                facilitatorMessage === ''
              }
              onClick={() => {
                const updatedReq: PostToFacilitator = {
                  ...(facilitatorResponseOpen as PostToFacilitator),
                  title: 'Dismissed request',
                  status: 'dismissed',
                  hiddenForUser: true,
                  responseDate: (new Date()).toString(),
                  responderUsername: currentUser?.email as string,
                  response: facilitatorMessage,
                };
                setFacilitatorRequestInFB(updatedReq);
                updateRequestsLocally(updatedReq);
                setFacilitatorResponseOpen(undefined);
                setFacilitatorMessage('');
              }}>Dismiss</Button>
          </Box>
        </div>
      </div>
    </Modal>
    <div className="page-container">
      <div className="scrollable-container" >
        <div className='controls' style={{backgroundColor: 'white'}}>
          <FormGroup>
            <FormControlLabel control={<Switch
              checked={showArchivedPosts}
              onChange={() => {
                setShowArchivedPosts(!showArchivedPosts);
              }} />}
            label="Show archived requests" />
          </FormGroup>
        </div>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          spacing={2}
        >
          {
            requests
                .filter((r) =>
                  showArchivedPosts || r.status === 'active',
                )
                .sort((a, b) => (
                  new Date(b.date)).getMilliseconds() -
                (new Date(a.date)).getMilliseconds()).reverse()
                .map((r) => {
                  const reply = r.status === 'active' ? () => {
                    setFacilitatorResponseOpen(r);
                  } : undefined;

                  return (
                    <UserPost status={r.status} title={r.title}
                      message={r.message}
                      replyHeader='Reply'
                      hiddenForUser={r.hiddenForUser}
                      requestorUsername={r.requestorUsername}
                      responderUsername={r.responderUsername}
                      date={r.date} request={r.request} key={r.date}
                      response={r.response}
                      reply={reply} />
                  );
                })
          }
        </Stack>
      </div>
    </div>
  </>);
};
