import {atom} from 'recoil';
import {PageData} from '../components/page/page-model';
import {sampleData} from './sample-data';

export const currentPageState = atom<PageData>({
  key: 'current-page',
  default: sampleData,
});

type ChallengeName = 'challenge_1'
| 'challenge_2'
| 'challenge_3'
| 'challenge_4'

type CompletedChallenges = Record<ChallengeName, Date | undefined>

const empty: CompletedChallenges = {
  challenge_1: undefined,
  challenge_2: undefined,
  challenge_3: undefined,
  challenge_4: undefined,
};

export const competedChallengesState = atom<CompletedChallenges>({
  key: 'challenges-completed',
  default: empty,
});
