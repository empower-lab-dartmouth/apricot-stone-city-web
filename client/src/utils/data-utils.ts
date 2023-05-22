import {CardData} from '../components/card/card-model';
import {OptionData} from '../components/option/option-model';
import {Action} from '../state/action';

export const IS_DEV = true;
export const BASE_DEV_URL = 'http://localhost:8000/';
export const BASE_PROD_URL = '?';
export const BASE_URL = IS_DEV ? BASE_DEV_URL : BASE_PROD_URL;
export const CONTINUE_CONVERSATION_PATH = 'continue-conversation/';

export type ClientSideUserContext = {
  username: string,
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
}

export const fetchContinueConversationData: (req: ContinueConversationRequest)
=> Promise<ContinueConversationResponse | ErrorReponse> = async (
    request: ContinueConversationRequest,
) => {
  console.log('pre fetch');
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

