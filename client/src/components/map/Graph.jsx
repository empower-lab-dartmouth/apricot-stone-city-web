/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable require-jsdoc */
import React from 'react';
import ForceGraph3D from 'react-force-graph-3d';
import * as THREE from 'three';
import {mockData} from '../create/types';
import './graph.css';
import {useRecoilState, useRecoilValue} from 'recoil';
import {userContextState} from './graph-recoil';
import {allScenesState} from '../../state/recoil';


export default function Graph() {
  // const [_, setSelectedStorySceneId] = useRecoilState(
  //     selectedStorySceneIDSelector);
  const [context, setContext] = useRecoilState(userContextState);
  const allScenes = useRecoilValue(allScenesState);


  const handleNodeClick = (node) => {
    console.log(node);
    if (node) {
      setContext({
        ...context,
        selectedStorySceneID: node.id,
      });
    }
  };

  // Random connected graph
  const gData = {
    nodes: Object.values(allScenes).map((event) => ({
      id: event.id,
      img: event.imgUrl,
    })),
    links: [...Object.values(allScenes)
        .flatMap((s) => s.parents.map(
            (p) => ({source: p, target: s.id}))),
    ...Object.values(allScenes)
        .flatMap((s) => s.children.map(
            (c) => ({source: s.id, target: c})))],
  };

  return (
    <div className='graph background-img'>
      <ForceGraph3D
        graphData={gData}
        linkWidth={5}
        backgroundColor='rgba(255, 255, 255, 0)'
        nodeLabel={'title'}
        nodeThreeObject={({img}) => {
          const imgTexture = new THREE.TextureLoader().load(img);
          const material = new THREE.SpriteMaterial({map: imgTexture});
          const sprite = new THREE.Sprite(material);
          sprite.scale.set(12, 12);

          return sprite;
        }}
        onNodeClick={handleNodeClick}
      />
    </div>

  );
}
