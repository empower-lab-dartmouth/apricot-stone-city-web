import React, {useState} from 'react';
import Nav from '../nav/NavBar';
import './facilitator.css';
import {Alert, AlertColor, AlertTitle,
  Button, FormControlLabel, FormGroup,
  Stack, Switch, Typography} from '@mui/material';
// import {collection, query, getDocs} from 'firebase/firestore';
// import {db} from '../firebase/firebase-config';


// type PostToFacilitator = {
//     status: 'accepted' | 'dismissed' | 'active',
//     title: string,
//     id: string,
//     message: string,
//     username: string,
//     request: 'upgrade1' | 'upgrade2' | 'upgrade3' | 'upgrade4' | 'other'
//     // facilitator
// }

type RequestsProps = {
    status: 'accepted' | 'dismissed' | 'active',
    severity: AlertColor,
    title: string,
    id: string,
    message: string,
    username: string,
    accept: undefined | (() => void),
    dismiss: undefined | (() => void)
}

const UserPost: React.FC<RequestsProps> = (props) => {
  const {severity, title, message,
    username, accept, dismiss} = props;
  return (<Alert sx={{backgroundColor: 'white', width: '100%'}}
    severity={severity} variant="outlined">
    <AlertTitle>{title}</AlertTitle>
    <Typography variant="body2" gutterBottom>
        From: {username}
    </Typography>
    <br />
    <Typography variant="body1" gutterBottom>
      {message}
    </Typography>
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
  //   const [requests, ]
  //   const q = query(collection(db, 'UserRequests'));
  //   const loadDataFromFb = async () => {
  //     const querySnapshot = await getDocs(q);
  //     querySnapshot.docs.map((doc: any) => doc.data());
  //   };
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
          <UserPost id='dfs' status='accepted' severity='error' title='test'
            message='test message' username='user'
            accept={undefined} dismiss={undefined} />
        </Stack>
      </div>
    </div>
  </>);
};
