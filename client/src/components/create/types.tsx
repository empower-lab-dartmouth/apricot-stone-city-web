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
    deleted: false,
    id: 'title1',
    title: 'title1',
    summary: 'desc',
    parents: [],
    quests: ['3-A-iii', '3-A-ii'],
    editHistory: [],
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/June_odd-eyed-cat.jpg/1106px-June_odd-eyed-cat.jpg',
    wikiUrl: 'https://docs.google.com/document/d/1hQhB4Uagna8QIieI2tljxrsIFD9CUZmGVk8xdhfdC5I/edit',
    backendPath: ['root',
      'carol-arrives-at-ASC',
      'toughest-nut-in-town',
      'walking-under-the-rain',
    ],
  },
  'title2': {
    deleted: false,
    id: 'title2',
    title: 'title2',
    summary: 'desc',
    parents: ['title1'],
    quests: [],
    editHistory: [],
    wikiUrl: '',
    backendPath: [],
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/June_odd-eyed-cat.jpg/1106px-June_odd-eyed-cat.jpg',
  },
};
