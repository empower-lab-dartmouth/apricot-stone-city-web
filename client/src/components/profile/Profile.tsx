/* eslint-disable require-jsdoc */
import React from 'react';
import './profile.css';
import Nav from '../nav/NavBar';
import Challenges from './Challenges';
import Quests from './Quests';

export default function Profile() {
  return (
    <div className='container'>
      <Nav/>
      <div className='profile-content'>
        <Challenges />
        <Quests />
      </div>
    </div>

  );
}
