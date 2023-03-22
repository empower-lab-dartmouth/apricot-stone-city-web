import {atom} from 'recoil';
import {PageData} from '../components/page/page-model';
import {sampleData} from './sample-data';

export const currentPageState = atom<PageData>({
  key: 'current-page',
  default: sampleData,
});
