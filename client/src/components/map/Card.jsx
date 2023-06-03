/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {useRecoilValue} from 'recoil';
import {storyEventsState,
  userContextState} from './graph-recoil';
import metalTex from '../../assets/metal-tex.webp';

// const displayChoices = (choice) => {
//   const id = 'id' + Math.random().toString(16).slice(2);
//   return (
//     <ul key={id}>
//       <li className='basic1'>{choice}</li>
//     </ul>
//   );
// };

// const displayInfo = (e) => {
//   const id = 'id' + Math.random().toString(16).slice(2);
//   return (
//     <ul key={id}>
//       <li>
//         <div className='basic1'>Path: {e.source} -{'>'} {e.target}</div>
//         <div className='basic2'>Weight: {e.weight} </div>
//       </li>
//     </ul>
//   );
// };

export default function BasicCard() {
  const context = useRecoilValue(userContextState);
  const allStoryEvents = useRecoilValue(storyEventsState);
  const selectedScene = allStoryEvents[context.selectedStorySceneID];
  return (
    <Card sx={{paddingTop: '150px', paddingLeft: '40px',
      paddingRight: '40px', backgroundImage: `url(${metalTex})`}}>
      <CardContent sx={{backgroundColor: 'white',
        border: '5px solid #46c6ea',
        borderRadius: '7px'}}>
        <h2>{context.selectedStorySceneID}</h2>
        <h2>{selectedScene.description}</h2>
        <h2>{selectedScene.parent !== null ?
        selectedScene.parent : 'no parent'}</h2>
        {/* <div>
                <ul>
                    <li className='basic0'>Text Sent to Users:
                        <div className='basic1'>{node.text}</div>
                    </li>
                    <li className='basic0'>Choices:
                        {node.choices.map((choice) => (displayChoices(choice)))}
                    </li>
                    <li className='basic0'>Edges:
                        {node.edges.map((e) => (displayInfo(e)))}
                    </li>
                </ul>
            </div> */}
      </CardContent>
    </Card>
  );
}
