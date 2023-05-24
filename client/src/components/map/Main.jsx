import Graph from './Graph';
import BasicCard from './Card';
import React from 'react';
import './map.css';
import Nav from '../nav/NavBar';
import Selections from './Selections';

const Main = () => {
  return (
    <div>
      <Nav />
      <div className='map-container'>
        <Selections />
        <div className='display'>
          <Graph className='graph'/>
          <BasicCard className='card'/>
        </div>
      </div>
    </div>
  );
};

export default Main;
