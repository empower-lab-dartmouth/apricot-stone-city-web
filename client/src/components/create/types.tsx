/**
 * Story Event data schema
 */

import {SceneUUID, StoryScene} from '../../state/recoil';

export type EventType = string // Will further specify this later.
export type EventUUID = string // Unique universal IDentifier.
export type Url = string
export type UserUUID = string

export type AIConcept = 'Learning-1-A' | 'Learning-1-B'; // ...

// export type StoryEvent = {
//   title: EventUUID,
//   description: string,
//   eventType: EventType,
//   AIConcept?: AIConcept,
//   parent: EventUUID | null, // Title of the parent node.
//   image: Url
//   creator: UserUUID
// }

export const mockData: Record<SceneUUID, StoryScene> = {
  'title1': {
    id: 'title1',
    title: 'title1',
    summary: 'desc',
    parents: [],
    children: [],
    quests: [],
    editHistory: [],
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/June_odd-eyed-cat.jpg/1106px-June_odd-eyed-cat.jpg',
    wikiUrl: '',
    backendPath: [],
  },
  'title2': {
    id: 'title2',
    title: 'title2',
    summary: 'desc',
    parents: ['title1'],
    children: [],
    quests: [],
    editHistory: [],
    wikiUrl: '',
    backendPath: [],
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/June_odd-eyed-cat.jpg/1106px-June_odd-eyed-cat.jpg',
  },
};
