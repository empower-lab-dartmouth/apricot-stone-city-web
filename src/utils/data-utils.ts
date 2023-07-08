import {CardData} from '../components/card/card-model';
import {OptionData} from '../components/option/option-model';
import {Action} from '../state/action';
import {Stores} from './stores';


export const CONTINUE_CONVERSATION_PATH = 'continue-conversation/';

export type ClientSideUserContext = {
  username: string,
  stores?: Stores,
}

export type ContinueConversationRequest = {
  context: ClientSideUserContext,
  action: Action
}

export type ErrorReponse = {
  type: 'error'
  body: string
}

export type ContinueConversationResponse = {
  type: 'continuation-data'
  cards: CardData[]
  options: OptionData[]
  context: Stores
}

export const fetchContinueConversationData: (req: ContinueConversationRequest)
=> Promise<ContinueConversationResponse | ErrorReponse> = async (
    request: ContinueConversationRequest,
) => {
  console.log('pre fetch');
  // console.log(process);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  console.log(process.env.REACT_APP_IS_DEV === undefined ?
    'WARNING! You are running using the remote server.' :
  'Running on local server');
  const IS_DEV = process.env.REACT_APP_IS_DEV === undefined ?
false : process.env.REACT_APP_IS_DEV === 'true' ||
  process.env.REACT_APP_IS_DEV === 'True';
  const BASE_DEV_URL = ' http://localhost:8000/';
  const BASE_PROD_URL = 'https://apricot-stone-city-backend.onrender.com/';
  const BASE_URL = IS_DEV ? BASE_DEV_URL : BASE_PROD_URL;
  const url = `${BASE_URL}${CONTINUE_CONVERSATION_PATH}`;
  const res = await fetch(url, {
    method: 'Post',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(request),
  });
  const result = await res.json();
  console.log('logging result');
  console.log(result);
  if (result.type !== undefined && result.type === 'continuation-data') {
    return result as ContinueConversationResponse;
  } else {
    return {
      type: 'error',
      body: 'error parsing result',
    };
  }
};

