import {atom} from 'recoil';
import {PageData} from '../components/page/page-model';
import {sampleData} from './sample-data';
import questHumansVsMachineImg
  from '../assets/quest-human-vs-machines-thinking.png';
import questFindingPatternsInDataImg
  from '../assets/quest-finding-patterns-in-data.png';
import questTrainingAModelImg
  from '../assets/quest-training-a-neural-network.jpeg';
import questConstructingVsUsingAReasonerImg
  from '../assets/constructing-vs-using-a-reasoner.png';
import questAdjustingInternalRepresentationsImg
  from '../assets/quest-features.png';
import questLearningFromExperienceImg
  from '../assets/quest-training-a-neural-network.jpeg';
import questStructureOfANeuralNetworkImg
  from '../assets/quest-structure-of-neural-network.jpeg';
import questWeightAdjustmentImg
  from '../assets/quest-weight-adjustment.png';
import questFeatureSetImg
  from '../assets/quest-features.png';
import questLargeDataImg
  from '../assets/quest-large-data-sets.webp';
import {mockData} from '../components/create/types';


export const currentPageState = atom<PageData>({
  key: 'current-page',
  default: sampleData,
});

export const typewriterEffectState = atom<boolean>({
  key: 'typewriter-effect',
  default: true,
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

type QuestID = string

export type Quest = {
  id: QuestID,
  title: string,
  learningObjectives: string,
  img: any
}


export type EventType = string // Will further specify this later.
export type SceneUUID = string // Unique universal IDentifier.
export type Url = string
export type UserUUID = string
export type EditHistory = {
  username: string,
  date: Date
}


export type StoryScene = {
  id: SceneUUID,
  title: string,
  summary: string,
  quests: string[],
  parents: string[],
  children: string[],
  imgUrl: string,
  editHistory: EditHistory[]
  wikiUrl: string,
  backendPath: string[]
}

export const competedScenesState = atom<Record<SceneUUID, Date>>({
  key: 'scenes-completed',
  default: {},
});

export const allScenesState =atom<Record<SceneUUID, StoryScene>>({
  key: 'all-scenes',
  default: mockData,
});

// export const competedQuestsState = atom<Record<QuestID, SceneUUID[]>>({
//   key: 'quests-completed',
//   default: {},
// });

export const allQuests: Record<QuestID, Quest> = {
  '3-A-i': {
    id: '3-A-i',
    title: 'Humans vs. machines',
    img: questHumansVsMachineImg,
    // eslint-disable-next-line max-len
    learningObjectives: `Define supervised, unsupervised, and reinforcement learning algorithms, and give examples of human learning that are similar to each algorithm.`,
  },
  '3-A-ii': {
    id: '3-A-ii',
    title: 'Finding patterns in data',
    img: questFindingPatternsInDataImg,
    // eslint-disable-next-line max-len
    learningObjectives: `Model how machine learning constructs a reasoner for classifcation or prediction by adjusting the reasoner's parameters (its internal representations).`,
  },
  '3-A-iii': {
    id: '3-A-iii',
    title: 'Training a model',
    img: questTrainingAModelImg,
    // eslint-disable-next-line max-len
    learningObjectives: `Use either a supervised or unsupervised learning algorithm to train a model on real world data, then evaluate the results.`,
  },
  '3-A-iv': {
    id: '3-A-iv',
    title: 'Constructing vs. using a reasoner',
    img: questConstructingVsUsingAReasonerImg,
    // eslint-disable-next-line max-len
    learningObjectives: `Illustrate what happens during each of the steps required when using machine learning to construct a classifier or predictor.`,
  },
  '3-A-v': {
    id: '3-A-v',
    title: 'Adjusting internal representations',
    img: questAdjustingInternalRepresentationsImg,
    // eslint-disable-next-line max-len
    learningObjectives: `Describe how various types of machine learning algorithms learn by adjusting their internal representations.`,
  },
  '3-A-vi': {
    id: '3-A-vi',
    title: 'Learning from experience',
    img: questLearningFromExperienceImg,
    // eslint-disable-next-line max-len
    learningObjectives: `Select the appropriate type of machine learning algorithm (supervised, unsupervised, or reinforcement learning) to solve a reasoning problem.`,
  },
  '3-B-i': {
    id: '3-B-i',
    title: 'Structure of a neural network',
    img: questStructureOfANeuralNetworkImg,
    // eslint-disable-next-line max-len
    learningObjectives: `Describe the following neural network architectures and their uses: feed-forward network, 2D convolutional network, recurrent network, generative adversarial network.`,
  },
  '3-B-ii': {
    id: '3-B-ii',
    title: 'Weight adjustment',
    img: questWeightAdjustmentImg,
    // eslint-disable-next-line max-len
    learningObjectives: `Train a multilayer neural network using the backpropagation learning algorithm and describe how the weights of the neurons and the outputs of the hidden units change as a result of learning.`,
  },
  '3-C-i': {
    id: '3-C-i',
    title: 'Feature sets',
    img: questFeatureSetImg,
    // eslint-disable-next-line max-len
    learningObjectives: `Compare two real world datasets in terms of the features they comprise and how those features are encoded.`,
  },
  '3-C-ii': {
    id: '3-C-ii',
    title: 'Large data sets',
    img: questLargeDataImg,
    // eslint-disable-next-line max-len
    learningObjectives: `Evaluate a dataset used to train a real AI system by considering the size of the dataset, the way that the data were acquired and labeled, the storage required, and the estimated time to produce the dataset.`,
  },
};

