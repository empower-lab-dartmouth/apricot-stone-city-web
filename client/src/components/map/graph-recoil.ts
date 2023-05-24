import {selector, atom, DefaultValue} from 'recoil';
import {StoryEvent, mockData} from '../create/types';

export const storyEventsState = atom<Record<string, StoryEvent>>({
  key: 'all-story-events',
  default: mockData,
});

export const vistedStoryEvents = atom<Set<string>>({
  key: 'all-story-events',
  default: new Set(['root']), // initally it's just whatever
  // the id of the root node is, but this should all be pulled from firebase.
});

type UserContext = {
  selectedStorySceneID: string,
  // TODO: Add things here as needed
}

export const userContextState = atom<UserContext>({
  key: 'user-context',
  default: {
    selectedStorySceneID: 'title1', // TODO: update this value to be the root.
  },
});

const isDefaultValue = <T>(
  valueOrDefaultValue: T | DefaultValue):
  valueOrDefaultValue is DefaultValue => {
  return valueOrDefaultValue !== DefaultValue;
};

export const selectedStorySceneSelector = selector<StoryEvent>({
  key: 'selected-story-scene',
  get: ({get}) => get(storyEventsState)[
      get(userContextState).selectedStorySceneID],
  set: ({set, get}, newStoryScene) => {
    if (isDefaultValue(newStoryScene)) {
      return;
    }
    const newContext: UserContext = {
      ...get(userContextState),
      selectedStorySceneID: newStoryScene.title,
    };
    set(userContextState, newContext);
  },
});


// const getNodeInfo = selector({
//   key: 'filterNodeInfo',
//   get: ({get}) => {
//     const hoverNode = get(selectionNode);
//     console.log(hoverNode);

//     let cardInfo = {
//       id: '',
//       textReceived: '',
//       choices: [],
//       edges: [],
//     };

//     const node = hoverNode;
//     console.log(node);

//     if (node.id==='Hover Over Node for Info') {
//       cardInfo = {
//         id: node.id,
//         textReceived: '',
//         choices: [],
//         edges: [{
//           source: '\'source\'',
//           target: '\'target\'',
//           weight: 'xx',
//         }],

//       };
//       return cardInfo;
//     }

//     cardInfo = {
//       id: node.id,
//       textReceived: '',
//       choices: [],
//       edges: [{
//         source: '\'source\'',
//         target: '\'target\'',
//         weight: 'xx',
//       }],

//     };

//     console.log('returning card info');
//     console.log(cardInfo);
//     return cardInfo;
//   },
// });

// export default getNodeInfo;
