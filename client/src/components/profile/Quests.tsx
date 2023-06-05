/* eslint-disable require-jsdoc */
import React from 'react';
import './profile.css';
import {CChart} from '@coreui/react-chartjs';
import {useRecoilValue} from 'recoil';
import {competedQuestsState, allQuests} from '../../state/recoil';

export default function Quests() {
  const completedQuests = useRecoilValue(competedQuestsState);

  return (
    <div>
      <h1 className='profile-title challenge-header'>Quests</h1>
      <div className='quest-container'>
        <CChart
          type="radar"
          data={{
            labels: Object.values(allQuests).map((val) => val.title),
            datasets: [
              {
                label: 'Completed',
                backgroundColor: 'rgba(220, 220, 220, 0.2)',
                borderColor: 'rgba(220, 220, 220, 1)',
                pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                pointBorderColor: '#fff',
                // pointHighlightFill: '#fff',
                // pointHighlightStroke: 'rgba(220, 220, 220, 1)',
                data: Object.values(allQuests).map((val) => {
                  if (completedQuests[val.id] === undefined) {
                    return 0;
                  }
                  return completedQuests[val.id].length;
                }),
              }],
            // {
            //   label: 'My Second dataset',
            //   backgroundColor: 'rgba(151, 187, 205, 0.2)',
            //   borderColor: 'rgba(151, 187, 205, 1)',
            //   pointBackgroundColor: 'rgba(151, 187, 205, 1)',
            //   pointBorderColor: '#fff',
            //   // pointHighlightFill: '#fff',
            //   // pointHighlightStroke: 'rgba(151, 187, 205, 1)',
            //   data: [28, 48, 40, 19, 96, 27, 100],
            // },
          }}
        />
      </div>
    </div>
  );
}
