/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable require-jsdoc */
import React from 'react';
import ForceGraph3D from 'react-force-graph-3d';
import * as THREE from 'three';
import {mockData} from '../create/types';
import {atom, useRecoilState} from 'recoil';


export const selectionNode = atom({
  key: 'nodeHover',
  default: {id: 'Hover Over Node for Info'},
});

export default function Graph() {
  const imgs = ['https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/June_odd-eyed-cat.jpg/1106px-June_odd-eyed-cat.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/June_odd-eyed-cat.jpg/1106px-June_odd-eyed-cat.jpg'];
  const [selectNode, setSelect] = useRecoilState(selectionNode);

  const handleNodeHover = (node) => {
    console.log(node);
    if (node) {
      setSelect(node);
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
        onNodeHover={handleNodeHover}
      />
    </div>

  );
}