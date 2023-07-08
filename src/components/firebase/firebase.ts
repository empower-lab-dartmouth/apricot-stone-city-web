/* eslint-disable no-unused-vars */

import {
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  NextOrObserver,
  User,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import {app, db} from './firebase-config';
import {doc, setDoc} from 'firebase/firestore';
import {UserLoginEvent} from '../../state/recoil';
import {REMOTE_SERVER_URL} from '../../utils/data-utils';

const auth = getAuth(app);

const logUserSignIn = async (username: string,
    inputtedServer: string, server: string) => {
  const d = (new Date()).toString();
  const id = `${username}-sign-in-${d}`;
  const userSignIn: UserLoginEvent = {
    username,
    date: d,
    id,
    server,
    type: 'login',
    remoteServer: server === REMOTE_SERVER_URL,
  };
  try {
    await setDoc(
        doc(db, 'EventLog', id), userSignIn);
    await setDoc(
        doc(db, 'LastUserServer', username), {
          username,
          server,
          inputtedServer,
        });
    console.log('Wrote a sign in event to the event log, '+
    'and updated last server to');
    console.log(server);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

export const signInUser = async (email: string, password: string,
    server: string, inputtedServer: string) => {
  if (!email && !password) return;
  logUserSignIn(email, inputtedServer, server);
  return await signInWithEmailAndPassword(auth, email, password);
};

export const userStateListener = (callback:NextOrObserver<User>) => {
  return onAuthStateChanged(auth, callback);
};

export const SignOutUser = async () => await signOut(auth);

export const handleSignUp = async (email: string, password: string,
    name: string, server: string, inputtedServer: string) => {
  return createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        const userInfo = {
          username: email,
          createdDate: (new Date()).toString(),
          name,
        };
        try {
          console.log('adding user info');
          await setDoc(
              doc(db, 'UserInfo', email), userInfo);
          logUserSignIn(email, inputtedServer, server);
        } catch (e) {
          console.error('Error adding document: ', e);
        }
        console.log(user);
      })
      .catch(async (error) => {
        const errorCode = await error.code;
        const errorMessage = await error.message;
        console.log(errorCode);
        console.log(errorMessage);

        // customizable error messages
        if (errorCode === 'auth/invalid-email') {
          return 'Please choose a valid email address.';
        } else if (errorCode === 'auth/weak-password') {
          return 'Password should be at least 6 characters.';
        } else if (errorCode === 'auth/email-already-in-use') {
          return 'This email is already in use. Please log in.';
        }
        return errorMessage;
      });
};
