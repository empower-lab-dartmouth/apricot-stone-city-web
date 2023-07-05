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
import {competedScenesState,
  currentPageState,
  userLevelState} from '../../state/recoil';
import {useRecoilState} from 'recoil';
import {UserLevelFB} from '../profile/Quests';

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
  const docSnap = await await getDoc(ref);
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


function Home() {
  const [open, setOpen] = React.useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const [visitedScenes, setVisitedScenes] = useRecoilState(competedScenesState);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const [userLevel, setUserLevel] = useRecoilState(userLevelState);
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
      const userCredential = await signInUser(email, password);

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

  return (
    <div className='login-container'>
      <div className="App-header">
        <div className='login-header-img'
          style={{marginTop: '-200px', marginBottom: '5px',
            height: '150px', width: '600px'}}
        />
        <button className='sign-up' onClick={() => handleOpen()}>
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
