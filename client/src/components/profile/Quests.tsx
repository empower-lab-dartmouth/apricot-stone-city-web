/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable require-jsdoc */
import React, {useContext} from 'react';
import './profile.css';
import {CChart} from '@coreui/react-chartjs';
import {useRecoilValue} from 'recoil';
import {
  allQuests, allScenesState, competedScenesState} from '../../state/recoil';
import {AuthContext} from '../../context/auth-context';
import {CProgress, CProgressBar} from '@coreui/react';
import {Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis} from 'recharts';
import {Stack} from '@mui/material';

const data = [
  {
    'name': 'Page A',
    'Incompleted': 4,
    'Completed': 2,
    'Created': 1,
  },
];

export default function Quests() {
  const {currentUser} = useContext(AuthContext);
  const completedScenes = useRecoilValue(competedScenesState);
  const allScenes = useRecoilValue(allScenesState);
  const scenesPerQuest = Object.values(allQuests)
      .map((quest) => Object.values(allScenes)
          .filter((scene) => scene.AIConcept === quest.id));
  const completedScenesPerQuest = Object.values(scenesPerQuest)
      .map((scenesForQuest_i) => scenesForQuest_i
          .filter((scene) => completedScenes[scene.id] === undefined));
  const incompletedScenesPerQuest = Object.values(scenesPerQuest)
      .map((scenesForQuest_i) => scenesForQuest_i
          .filter((scene) => completedScenes[scene.id] !== undefined));
  const createdScenesPerQuest = Object.values(scenesPerQuest)
      .map((scenesForQuest_i) => scenesForQuest_i
          .filter((scene) => scene.creator === currentUser?.email));

  const chartData = Object.values(allQuests).map((val, idx) => ([{
    'name': val.title,
    'Incompleted': incompletedScenesPerQuest[idx].length,
    'Completed': completedScenesPerQuest[idx].length,
    'Created': createdScenesPerQuest[idx].length,
  }]));
  return (
    <div>
      <h1 className='profile-title challenge-header'>Quests</h1>
      {/* <CChart
          type="radar"
          options= {{
            scales: {
              r: {
                angleLines: {
                  display: false,
                },
                suggestedMin: -1,
                suggestedMax: Math.max(
                    ...numberOfCompletedScenesPerQuest) + 6,
              },
            }}}
          data={{
            labels: Object.values(allQuests).map((val) => val.title),
            datasets: [
              {
                label: 'Scenes with quest played',
                backgroundColor: 'rgba(220, 220, 220, 0.2)',
                borderColor: 'rgba(220, 220, 220, 1)',
                pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                pointBorderColor: '#fff',
                // pointHighlightFill: '#fff',
                // pointHighlightStroke: 'rgba(220, 220, 220, 1)',
                data: numberOfCompletedScenesPerQuest,
              },
              {
                label: 'Scenes with quest created',
                backgroundColor: 'rgba(151, 187, 205, 0.2)',
                borderColor: 'rgba(151, 187, 205, 1)',
                pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                pointBorderColor: '#fff',
                // pointHighlightFill: '#fff',
                // pointHighlightStroke: 'rgba(151, 187, 205, 1)',
                data: numberOfCreatedScenesPerQuest,
              }],
          }}
        /> */}
      {Object.values(allQuests).map((quest, idx) => {
        return (
          <Stack
            direction="row"
            justifyContent="space-around"
            alignItems="flex-end"
            spacing={2}
            key={quest.id}>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={1}>
              <img src={quest.img} style={{width: '62px'}}/>
              <div className='quest-sub-container'>
                <h3 className='challenge-header'>{quest.title}</h3>
                <b>{quest.learningObjectives}</b>
              </div>
            </Stack>

            <BarChart width={730} height={250} data={chartData[idx]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip cursor={{fill: 'transparent'}}
                wrapperStyle={{color: 'black'}}/>
              <Legend wrapperStyle={{backgroundColor: 'white',
                borderRadius: '20px'}}/>
              <Bar dataKey="Completed" stackId="a" fill="green" />
              <Bar dataKey="Incompleted" stackId="a" fill="gray" />
              <Bar dataKey="Created" fill="gold" />
            </BarChart>
          </Stack>
        );
      })}
    </div>
  );
}
