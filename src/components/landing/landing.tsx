/* eslint-disable require-jsdoc */

import React from 'react';
import {ChangeEvent, FormEvent, useState} from 'react';
import {signInUser} from '../firebase/firebase';
import {useNavigate} from 'react-router-dom';
import '../../App.css';
import './landing.css';
import SignUp from './signup';
import {doc, getDoc, setDoc} from 'firebase/firestore';
import {db} from '../firebase/firebase-config';
import {samplePageData} from '../../state/sample-data';
import {PageData} from '../page/page-model';
import checkmark from '../../assets/check-mark.png';
import xIcon from '../../assets/x-icon.webp';
import {competedScenesState,
  currentPageState,
  inputtedServerUrlState,
  serverReadyState,
  useServerUrlState,
  userLevelState} from '../../state/recoil';
import {useRecoilState} from 'recoil';
import {UserLevelFB} from '../profile/Quests';
import {FormControlLabel,
  FormGroup, Stack, Switch, TextField, Typography} from '@mui/material';
import {REMOTE_SERVER_URL} from '../../utils/data-utils';
import {wakeUpServer} from '../../state/handle-action';

const defaultFormFields = {
  email: '',
  password: '',
};

export const loadPageDataFromFB = async (username: string,
    setter: (p: PageData) => void) => {
  const ref = doc(db, 'PageData', username);
  const docSnap = await await getDoc(ref);
  if (docSnap.exists()) {
    const data = docSnap.data() as PageData;
    // trim chat history
    if (data.chatHistory.length > 15) {
      data.chatHistory = data.chatHistory.slice(data.chatHistory.length - 15,
          data.chatHistory.length);
    }
    setter(data as PageData);
  } else {
    setter(samplePageData);
  }
};

export const loadUserLevel = async (username: string,
    setter: (p: number) => void) => {
  const ref = doc(db, 'UserLevel', username);
  const docSnap = await getDoc(ref);
  if (docSnap.exists()) {
    const data = docSnap.data() as UserLevelFB;
    // trim chat history
    setter(data.level);
  } else {
    try {
      await setDoc(
          doc(db, 'UserLevel', username), {
            level: 0,
            username,
          });
    } catch (e) {
      console.error('Error adding document: ', e);
    }
    setter(0);
  }
};

type LastUserServer = {
  username: string,
  server: string,
  inputtedServer: string,
}

export const loadLastUserServerValues: (username: string,
    inputServerSetter: (p: string) => void,
    serverSetter: (p: string) => void) => Promise<void> =
    async (username, inputServerSetter, serverSetter) => {
      const ref = doc(db, 'LastUserServer', username);
      const docSnap = await getDoc(ref);
      if (docSnap.exists()) {
        const data = docSnap.data() as LastUserServer;
        // trim chat history
        serverSetter(data.server);
        inputServerSetter(data.inputtedServer);
      }
    };


export const loadVisitedScenesFromFB = async (username: string,
    setter: (s: Set<string>) => void) => {
  const ref = doc(db, 'CompletedScenes', username);
  const docSnap = await await getDoc(ref);
  if (docSnap.exists()) {
    const data = docSnap.data().scenes as string[];
    setter(new Set(data));
  } else {
    setter(new Set());
  }
};

const inputFieldStyles = {
  width: '100%',
  backgroundColor: 'white',
};

function Home() {
  const [open, setOpen] = React.useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const [visitedScenes, setVisitedScenes] = useRecoilState(competedScenesState);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const [userLevel, setUserLevel] = useRecoilState(userLevelState);
  const [useServer, setUseServer] = useRecoilState(useServerUrlState);
  const [inputtedServerUrl, setInputtedServerUrl] = useRecoilState(
      inputtedServerUrlState);
  const [serverIsReady, setServerIsReady] = useRecoilState(serverReadyState);
  const [hasPingedServer, setHasPingedServer] = useState<string>('');

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {email, password} = formFields;
  const navigate = useNavigate();

  const resetFormFields = () => {
    return (
      setFormFields(defaultFormFields)
    );
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      // Send the email and password to firebase
      const userCredential = await signInUser(email, password,
          useServer, inputtedServerUrl);
      wakeUpServer(setServerIsReady, useServer);

      if (userCredential) {
        resetFormFields();
        loadUserLevel(email, setUserLevel);
        loadPageDataFromFB(email, setCurrentPage);
        loadVisitedScenesFromFB(email, setVisitedScenes);
        navigate('/profile');
      }
    } catch (error:any) {
      console.log('User Sign In Failed', error.message);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setFormFields({...formFields, [name]: value});
  };

  const updateServerIsReady = (b: boolean) => {
    console.log('setting server ready to');
    console.log(b);
    setServerIsReady(b);
  };

  return (
    <div className='login-container'>
      <div className="App-header">
        <div className='login-header-img'
          style={{marginTop: '-200px', marginBottom: '5px',
            height: '150px', width: '600px'}}
        />
        <button className='sign-up'
          onClick={() => handleOpen()}>
          Join
        </button>
        <div className='landing-card'>
          <form onSubmit={handleSubmit}
            className='group'
          >
            <div>
              <input
                style={{backgroundColor: 'white',
                  color: 'black'}}
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
            </div>
            <div>
              <input
                style={{backgroundColor: 'white',
                  color: 'black'}}
                type='password'
                name='password'
                value={password}
                onChange={handleChange}
                placeholder="Password"
                required
              />
            </div>
            <div>
              <input id='login'
                style={{backgroundColor: 'white', color: 'black'}}
                type="submit" />
            </div>
            <FormGroup>
              <FormControlLabel sx={{color: 'black'}}
                control={<Switch checked={useServer === REMOTE_SERVER_URL}
                  onChange={() => {
                    if (useServer === REMOTE_SERVER_URL) {
                      setUseServer(inputtedServerUrl);
                      wakeUpServer(updateServerIsReady, inputtedServerUrl);
                    } else {
                      setUseServer(REMOTE_SERVER_URL);
                      wakeUpServer(updateServerIsReady, REMOTE_SERVER_URL);
                    }
                  }}
                />} label="local/remote server url" />
            </FormGroup>
            {
              useServer === REMOTE_SERVER_URL ? <></> :
              <>
                <div>
                  <TextField style={inputFieldStyles}
                    value={inputtedServerUrl}
                    onChange={(e) => {
                      setInputtedServerUrl(e.target.value);
                      setUseServer(e.target.value);
                      setHasPingedServer(
                          // eslint-disable-next-line max-len
                          `Last tested server: ${(new Date()).toDateString()} ${(new Date()).getHours()}:${(new Date()).getMinutes()}:${(new Date()).getMilliseconds()}`);
                      wakeUpServer(updateServerIsReady, e.target.value);
                    }
                    }
                    label="Use custom server url:" variant="outlined" />
                  <Typography variant="caption" display="block"
                    sx={{color: 'blue'}} gutterBottom>e.g. http://localhost:8000/</Typography>
                </div>
                {
                  hasPingedServer !== '' && inputtedServerUrl !== '' ?
                  <Typography variant="caption" display="block"
                    sx={{color: 'blue'}} gutterBottom>
                    { hasPingedServer }
                  </Typography> : <></>
                }
                { serverIsReady ?
                  <div style={{backgroundColor: 'lightgreen',
                    borderRadius: '20px'}}>
                    <Stack
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center"
                      spacing={0}
                    >
                      <img alt="preview image" width="20"
                        src={checkmark}/>
                      <p style={{color: 'green',
                        paddingRight: '3px'}}>Connected to local server</p>
                    </Stack>
                  </div> :
                  <>{
                    hasPingedServer === '' ||
                    inputtedServerUrl !== '' ?
                  <div style={{backgroundColor: 'lightred',
                    borderRadius: '20px'}}>
                    <Stack
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center"
                      spacing={0}
                    >
                      <img alt="preview image" width="20"
                        src={xIcon}/>
                      <p style={{color: 'red',
                        paddingRight: '3px'}}>
                          Connection error...</p>
                    </Stack>
                  </div> : <></>
                  }
                  </>
                }
              </>
            }
          </form>
          {open && (
            <SignUp
              closeModal={() => handleClose()}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;


// import React from 'react';
// import './landing.css';

// /**
//  * Adds two numbers together.
//  * @return {React}
//  */
// export default function Landing() {
//   const handleSubmit = () => {

//   };
//   return (
//     <div className='page-container'>
//       <div className='login-container'>
//         <h1>Welcome!</h1>
//         <br />
//         <label htmlFor="username">
//         username:
//           <input id="username" type="text" />
//         </label>
//         <br />
//         <label htmlFor="password">
//         password:
//           <input id="password" type="text" />
//         </label>

//         <br />
//         <input id="submit" type="button" value="sign in"
//           onClick={handleSubmit} />

//       </div>

//     </div>
//   );
// }
