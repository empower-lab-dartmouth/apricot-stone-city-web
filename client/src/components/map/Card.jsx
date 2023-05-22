/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

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

export default function BasicCard({node}) {
  console.log('got to card display');
  console.log(node);
  return (
    <Card>
      <CardContent>
        <h2>{node.id}</h2>
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
