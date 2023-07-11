import {PageData} from '../components/page/page-model';
import {CardData} from '../components/card/card-model';
import {Action} from './action';
import {OptionData} from '../components/option/option-model';

export const sampleAction: Action = {
  type: 'click-option',
  option: 'test',
};

export const sampleNewCard: CardData = {
  id: 'id',
  type: 'text',
  text: 'Welcome!',
};

export const sampleNewOption: OptionData = {
  id: 'id', text: 'Welcome!', correctAnswer: 'na',
  type: 'option', action: sampleAction,
};

export const samplePageData: PageData = {
  chatHistory: [
    {
      id: '1',
      type: 'text',
      text: 'Welcome!',
    },
  ],
  currentStores: undefined,
  options: [
    {id: '2', correctAnswer: 'na',
      type: 'option', text: 'Get started!', action: sampleAction},
  ],
};

