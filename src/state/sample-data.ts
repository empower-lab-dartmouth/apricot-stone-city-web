/* eslint-disable max-len */
import {PageData} from '../components/page/page-model';
import {CardData} from '../components/card/card-model';
import {Action} from './action';
import {OptionData} from '../components/option/option-model';

export const sampleAction: Action = {
  type: 'click-option',
  option: 'Click here',
};

export const sampleNewCard: CardData = {
  id: 'id',
  type: 'text',
  text: 'Welcome! Please scroll to the very bottom of the screen and click on the button there to get started!',
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
      text: 'Welcome! Please scroll to the very bottom of the screen and click on the button there to get started!',
    },
  ],
  currentStores: undefined,
  options: [
    {id: '2', correctAnswer: 'na',
      type: 'option', text: 'Get started!', action: sampleAction},
  ],
};

