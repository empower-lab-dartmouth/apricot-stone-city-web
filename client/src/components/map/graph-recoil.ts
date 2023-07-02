import {atom} from 'recoil';

// export const storyEventsState = atom<Record<string, StoryScene>>({
//   key: 'all-story-events',
//   default: mockData,
// });

type UserContext = {
  selectedStorySceneID: string,
  // TODO: Add things here as needed
}

export const defaultUserContext = {
  selectedStorySceneID: 'root', // TODO: update this value to be the root.
};

// Tracks stuff that you don't need to store in fb
export const userContextState = atom<UserContext>({
  key: 'user-context',
  default: defaultUserContext,
});

