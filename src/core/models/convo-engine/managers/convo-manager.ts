import RenderInChat from '../../chat-client/render-interface'
import ConvoModule from '../convo-graph/convo-module'
import { Stores } from '../../state/state'
import { ContinueConversationResponse } from '../../api/client-side-types'

interface ConvoManager {
    respondToUserInput: (
        userId: string,
        userInput: string
    ) => ContinueConversationResponse
}

export type ConvoManagerConstructor = (
    rootModule: ConvoModule,
    initialState: Stores
) => ConvoManager

export default ConvoManager
