import Graph from './Graph';
import BasicCard from './Card';
import {useRecoilValue} from 'recoil';
import getNodeInfo from './getNodeInfo';
import React from 'react';
import './map.css';
import Nav from '../nav/NavBar';
import Selections from './Selections';

const Main = () => {
  const cardInfo = useRecoilValue(getNodeInfo);

  return (
    <div>
      <Nav />
      <div className='map-container'>
        <Selections />
        <div className='display'>
          <Graph className='graph'/>
          <BasicCard node={cardInfo} className='card'/>
        </div>
      </div>
    </div>
  );
};

export default Main;
