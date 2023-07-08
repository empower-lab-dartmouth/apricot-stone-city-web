/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable require-jsdoc */
import React, {useEffect, useCallback, useRef} from 'react';
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
  const [graph, setGraph] = React.useState({nodes: [], links: []});
  const [internallySelected, setInternallySelected] = React.useState(context
      .selectedStorySceneID);

  const fgRef = useRef();

  const handleClick = useCallback((node) => {
    if (node) {
      console.log('updating internally selected to ' + node.id);
      setInternallySelected(node.id);
      setTimeout(() => setContext({
        ...context,
        selectedStorySceneID: node.id,
      }), 100);
    }
    // Aim at node from outside it
    const distance = 40;
    const distRatio = 1 + distance/Math.hypot(node.x, node.y, node.z);

    fgRef.current.cameraPosition(
        {x: node.x * distRatio,
          y: node.y * distRatio,
          z: node.z * distRatio}, // new position
        node, // lookAt ({ x, y, z })
        3000, // ms transition duration
    );
  }, [fgRef]);

  // Random connected graph

  useEffect(() => {
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
    setGraph(gData);
  }, []);

  useEffect(() => {
    console.log('selected node in context changed');
    if (context.selectedStorySceneID !== internallySelected) {
      console.log('ZOOMING OUT');
      console.log('external ' + context.selectedStorySceneID);
      console.log('internal ' + internallySelected);
      setInternallySelected(context.selectedStorySceneID);
      fgRef.current.zoomToFit(4000);
    }
  }, [context]);

  return (
    <div className='graph background-img'>
      <ForceGraph3D
        ref={fgRef}
        linkOpacity={.85}
        graphData={graph}
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
        onNodeClick={handleClick}
      />
    </div>

  );
}
