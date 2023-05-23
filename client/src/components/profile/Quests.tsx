/* eslint-disable require-jsdoc */
import React from 'react';
import {mockQuests} from './questTypes';
import './profile.css';

export default function Quests() {
  const quests = mockQuests;

  return (
    <div>
      <h1 className='profile-title'>Quests</h1>
      <div className='profile-items'>
        {quests.map((quest) => (
          <div key={quest.id} className='quest-n-progress'>
            <p>{quest.title}</p>
            <p>{quest.progress}</p>
          </div>

        ))}
      </div>
    </div>
  );
}
