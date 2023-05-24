/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable require-jsdoc */
import React from 'react';
import ForceGraph3D from 'react-force-graph-3d';
import * as THREE from 'three';
import {mockData} from '../create/types';
import {useRecoilState} from 'recoil';
import {userContextState} from './graph-recoil';


export default function Graph() {
  const imgs = ['https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/June_odd-eyed-cat.jpg/1106px-June_odd-eyed-cat.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/June_odd-eyed-cat.jpg/1106px-June_odd-eyed-cat.jpg'];
  // const [_, setSelectedStorySceneId] = useRecoilState(
  //     selectedStorySceneIDSelector);
  const [context, setContext] = useRecoilState(userContextState);

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
    nodes: Object.values(mockData).map((event) => ({
      id: event.title,
      img: event.image,
    })),
    links: Object.values(mockData).
        filter((event) => event.parent !== null).map((event) => (
          {source: event.parent, target: event.title}
        )),
  };

  return (
    <div className='graph'>
      <ForceGraph3D
        graphData={gData}
        linkWidth={5}
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
