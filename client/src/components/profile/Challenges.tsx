/* eslint-disable require-jsdoc */
import React from 'react';
import './profile.css';
import {Stack} from '@mui/material';
import challengeIcon from '../../assets/navbar-challenges-icon.png';
import completedChallengeIcon from '../../assets/completed-challenge-icon.png';
import {competedChallengesState} from '../../state/recoil';
import {useRecoilValue} from 'recoil';

export default function Challenges() {
  const completedChallenges = useRecoilValue(competedChallengesState);

  return (
    <div>
      <h1 className='profile-title challenge-header'>Challenges</h1>
      <div className='profile-items'>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
        >
          {completedChallenges.challenge_1 === undefined ?
          <Stack direction="column" justifyContent="flex-start"
            alignItems="center">
            <img src={challengeIcon} style={{width: '62px'}}/>
            Incomplete
          </Stack> :
          <Stack direction="column" justifyContent="flex-start"
            alignItems="center">
            <img src={completedChallengeIcon} style={{width: '62px'}}/>
          Completed
          </Stack>
          }
          <div>
            <h2 className='challenge-header'>
              Challenge 1: Know and Understand AI</h2>
            <h3>Complete all AI learning quests in adventure mode.</h3>
            <p>More info</p>
          </div>
        </Stack>

        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
        >
          {completedChallenges.challenge_2 === undefined ?
          <Stack direction="column" justifyContent="flex-start"
            alignItems="center">
            <img src={challengeIcon} style={{width: '62px'}}/>
            Incomplete
          </Stack> :
          <Stack direction="column" justifyContent="flex-start"
            alignItems="center">
            <img src={completedChallengeIcon} style={{width: '62px'}}/>
          Completed
          </Stack> }
          <div>
            <h2 className='challenge-header'> Challenge 2: Use AI </h2>
            <h3>Design, create, and
              code your own AI teaching quest within the story.
            </h3>
            <p>More info</p>
          </div>
        </Stack>


        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
        >
          {completedChallenges.challenge_3 === undefined ?
          <Stack direction="column" justifyContent="flex-start"
            alignItems="center">
            <img src={challengeIcon} style={{width: '62px'}}/>
            Incomplete
          </Stack> :
          <Stack direction="column" justifyContent="flex-start"
            alignItems="center">
            <img src={completedChallengeIcon} style={{width: '62px'}}/>
          Completed
          </Stack> }
          <div>
            <h2 className='challenge-header'> Challenge 3: Evaluate
             and Create </h2>
            <h3>Create or extend a teaching scene
              to both &quot;shows and tell,&quot;
              by integrate AI into the story flow.
            </h3>
            <p>More info</p>
          </div>
        </Stack>

        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
        >
          {completedChallenges.challenge_4 === undefined ?
          <Stack direction="column" justifyContent="flex-start"
            alignItems="center">
            <img src={challengeIcon} style={{width: '62px'}}/>
            Incomplete
          </Stack> :
          <Stack direction="column" justifyContent="flex-start"
            alignItems="center">
            <img src={completedChallengeIcon} style={{width: '62px'}}/>
          Completed
          </Stack> }
          <div>
            <h2 className='challenge-header'> Challenge 4: AI Ethics</h2>
            <h3>Create a scene that explores the impact of AI
              on an ethical, social,
              political, or economic issue.
            </h3>
            <p>More info</p>
          </div>
        </Stack>
      </div>
    </div>
  );
}
