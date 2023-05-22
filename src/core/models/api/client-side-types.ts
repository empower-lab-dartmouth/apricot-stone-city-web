export type ImageCardData = {
    type: 'image'
    src: string
}

export type TextCardData = {
    type: 'text'
    text: string
}
export type ClickOptionAction = {
  type: 'click-option'
  option: string
}
export type FreeResponseAction = {
  type: 'free-response'
  option: string
}

export type Action = ClickOptionAction | FreeResponseAction

export type OptionData = {
    text: string
    action: Action
}

export type CardData = ImageCardData | TextCardData;

export type ErrorReponse = {
  type: 'error'
  body: string
}
  
export type ContinueConversationResponse = {
  type: 'continuation-data'
  cards: CardData[]
  options: OptionData[]
}


export type ClientSideUserContext = {
  username: string,
}

export type ContinueConversationRequest = {
  type: 'continue-conversation'
  context: ClientSideUserContext
  action: Action,
}