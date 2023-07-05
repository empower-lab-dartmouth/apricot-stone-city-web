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
import {app} from './firebase-config';

const auth = getAuth(app);

export const signInUser = async (email: string, password: string) => {
  if (!email && !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const userStateListener = (callback:NextOrObserver<User>) => {
  return onAuthStateChanged(auth, callback);
};

export const SignOutUser = async () => await signOut(auth);


export const handleSignUp = async (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
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
