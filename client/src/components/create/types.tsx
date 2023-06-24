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
    description: 'desc',
    eventType: 'type',
    parent: null,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/June_odd-eyed-cat.jpg/1106px-June_odd-eyed-cat.jpg',
    creator: 'id2',
  },
  'title2': {
    id: 'title2',
    title: 'title2',
    description: 'desc',
    eventType: 'type',
    parent: 'title1',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/June_odd-eyed-cat.jpg/1106px-June_odd-eyed-cat.jpg',
    creator: 'id3',
  },
};
