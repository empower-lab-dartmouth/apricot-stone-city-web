/* eslint-disable require-jsdoc */
import React from 'react';
import {mockChallenges} from './challengeTypes';
import './profile.css';

export default function Challenges() {
  const challenges = mockChallenges;

  return (
    <div>
      <h1 className='profile-title'>Challenges</h1>
      <div className='profile-items'>
        {challenges.map((challenge) => (
          <p key={challenge.id}>{challenge.title}</p>
        ))}
      </div>
    </div>
  );
}
