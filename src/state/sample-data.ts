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
  text: 'new data!',
};

export const sampleNewOption: OptionData = {
  id: 'id', text: 'new option!', correctAnswer: 'na',
  type: 'option', action: sampleAction,
};

export const samplePageData: PageData = {
  chatHistory: [
    {
      id: '0',
      type: 'image',
      src: 'abc.xyz',
    },
    {
      id: '1',
      type: 'text',
      text: 'this is a text message',
    },
  ],
  currentStores: undefined,
  options: [
    {id: '0', correctAnswer: 'na',
      type: 'option', text: 'optiofdgdsfgfdgn1', action: sampleAction},
    {id: '1', correctAnswer: 'na',
      type: 'option',
      text: 'dgdsfgfdgn1', action: sampleAction},
    {id: '2', correctAnswer: 'na',
      type: 'option', text: 'option 2', action: sampleAction},
  ],
};

