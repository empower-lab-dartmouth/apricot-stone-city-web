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
        <div className='challenges-container'>
          <div className='full-opacity'>
            <h1 className='full-opacity'>Welcome, {currentUser?.email}</h1>
            <Challenges />
            <Quests />
          </div>
        </div>
      </div>
      <button onClick={signOut} className='sign-out'>Sign Out</button>
    </div>

  );
}
