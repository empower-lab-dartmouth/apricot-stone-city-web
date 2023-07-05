/**
 * Challenge data schema
 */

export type ChallengeUUID = string
export type ChallengeTitle = string
export type ChallengeCompletion = Boolean

export type Challenge = {
  id: ChallengeUUID,
  title: ChallengeTitle,
  complete: ChallengeCompletion
}

export const mockChallenges: Challenge[] = [
  {
    id: 'challenge1',
    title: 'Complete scenes for all AI  in adventure mode',
    complete: true,
  },
  {
    id: 'challenge2',
    title: 'Set up authentication',
    complete: false,
  },
];