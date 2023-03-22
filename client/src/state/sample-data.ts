import {PageData} from '../components/page/page-model';
import {CardData} from '../components/card/card-model';
import {Action} from './action';
import {OptionData} from '../components/option/option-model';

export const sampleAction: Action = {
  type: 'append-to-page',
  url: 'test',
};

export const sampleNewCard: CardData = {
  type: 'text',
  text: 'new data!',
};

export const sampleNewOption: OptionData = {
  text: 'new option!', action: sampleAction,
};

export const sampleData: PageData = {
  cards: [
    {
      type: 'image',
      src: 'abc.xyz',
    },
    {
      type: 'text',
      text: 'this is a text message',
    },
  ],
  options: [
    {text: 'optiofdgdsfgfdgn1', action: sampleAction},
    {text: 'dgdsfgfdgn1', action: sampleAction},
    {text: 'option 2', action: sampleAction},
  ],
};

