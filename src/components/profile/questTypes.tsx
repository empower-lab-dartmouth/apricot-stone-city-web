/**
 * Quest data schema
 */

export type QuestUUID = string
export type QuestTitle = string
export type QuestCompletion = string

export type Quest = {
  id: QuestUUID,
  title: QuestTitle,
  progress: QuestCompletion
}

export const mockQuests: Quest[] = [
  {
    id: 'Quest1',
    title: 'Big Idea 1',
    progress: 'x out of y complete',
  },
  {
    id: 'Quest2',
    title: 'Big Idea 2',
    progress: 'x out of y complete',
  },
  {
    id: 'Quest3',
    title: 'Big Idea 3',
    progress: 'x out of y complete',
  },
  {
    id: 'Quest4',
    title: 'Big Idea 4',
    progress: 'x out of y complete',
  },
  {
    id: 'Quest5',
    title: 'Big Idea 5',
    progress: 'x out of y complete',
  },
  {
    id: 'Quest6',
    title: 'Total',
    progress: 'x out of y complete',
  },
];
