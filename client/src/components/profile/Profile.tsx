/* eslint-disable require-jsdoc */
import React from 'react';
import './profile.css';
import Nav from '../nav/NavBar';
import Challenges from './Challenges';
import Quests from './Quests';
import {useContext} from 'react';
import {AuthContext} from '../../context/auth-context';

export default function Profile() {
  const {currentUser, signOut} = useContext(AuthContext);

  return (
    <div className='container'>
      <Nav/>
      <div className='profile-content'>
        <h1>Welcome! {currentUser?.email}</h1>
        <Challenges />
        <Quests />
        <button onClick={signOut}>Sign Out</button>
      </div>
    </div>

  );
}
