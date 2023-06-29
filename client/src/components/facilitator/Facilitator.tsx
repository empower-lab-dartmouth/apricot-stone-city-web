import React, {useEffect, useState} from 'react';
import Nav from '../nav/NavBar';
import './facilitator.css';
import {Alert, AlertTitle,
  Button, FormControlLabel, FormGroup,
  Stack, Switch, Typography} from '@mui/material';
import {collection, query, getDocs} from 'firebase/firestore';
import {db} from '../firebase/firebase-config';


type PostToFacilitator = {
    status: 'accepted' | 'dismissed' | 'active',
    title: string,
    id: string,
    message: string,
    requestorUsername: string,
    request: 'upgrade to level 1' | 'upgrade to level 2' | 'upgrade to level 3'
    | 'upgrade to level 4' | 'other' | 'none'
    responderUsername: string | undefined,
    response: string | undefined,
}

type RequestsProps = PostToFacilitator & {
    accept: undefined | (() => void),
    dismiss: undefined | (() => void)
}

const UserPost: React.FC<RequestsProps> = (props) => {
  const {status, title, message,
    requestorUsername, request, responderUsername,
    response, accept, dismiss} = props;
  const severity = status === 'accepted' ? 'success' :
        status === 'dismissed' ? 'info' : 'warning';

  return (<Alert sx={{backgroundColor: 'white', width: '100%'}}
    severity={severity} variant="outlined">
    <AlertTitle>{title}</AlertTitle>
    <Typography variant="body2" gutterBottom>
        From: {requestorUsername}
    </Typography>
    <Typography variant="body1" gutterBottom>
      Request: {request}
    </Typography>
    <Typography variant="body1" gutterBottom>
      Message: {message}
    </Typography>
    {
        responderUsername !== undefined && response !== undefined ?
        <>
          <Typography variant="body2" gutterBottom>
        Response: {responderUsername}
          </Typography>
          <Typography variant="body2" gutterBottom>
        From: {response}
          </Typography>
        </> : <></>
    }
    {
        accept !== undefined ?
        <Button variant='outlined' sx={{marginRight: '10px'}} color='success'
          onClick={accept}>Accept Request</Button> : <></>
    }
    {
        dismiss !== undefined ?
        <Button color='info' variant='outlined'
          onClick={dismiss}>Dismiss</Button> : <></>
    }
  </Alert>);
};


export const FacilitatorPage: React.FC = () => {
  const [showArchivedPosts, setShowArchivedPosts] = useState(false);
  const [requests, setRequests] = useState<PostToFacilitator[]>([]);
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
  return (<>
    <Nav />
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
            requests.map((r) => (
              <UserPost status={r.status} title={r.title}
                message={r.message} requestorUsername={r.requestorUsername}
                responderUsername={r.responderUsername}
                id={r.id} request={r.request} key={r.id}
                response={r.response}
                accept={undefined} dismiss={undefined} />
            ))
          }
        </Stack>
      </div>
    </div>
  </>);
};
