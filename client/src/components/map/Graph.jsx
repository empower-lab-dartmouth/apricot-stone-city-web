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
    if (node) {
      setContext({
        ...context,
        selectedStorySceneID: node.id,
      });
    }
  };

  // Random connected graph
  const gData = {
    nodes: Object.values(allScenes)
        .filter((s) => !s.deleted)
        .map((event) => ({
          id: event.id,
          img: event.imgUrl,
        })),
    links: [...Object.values(allScenes)
        .filter((s) => !s.deleted)
        .flatMap((s) => s.parents
            .filter((p) => allScenes[p] !== undefined &&
        !allScenes[p].deleted)
            .map(
                (p) => ({source: p, target: s.id})))],
  };

  return (
    <div className='graph background-img'>
      <ForceGraph3D
        linkOpacity={.85}
        graphData={gData}
        linkDirectionalArrowLength={10}
        linkDirectionalArrowRelPos={1}
        linkWidth={1}
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
