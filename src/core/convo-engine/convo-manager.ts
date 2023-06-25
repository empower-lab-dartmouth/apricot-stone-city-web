/* eslint-disable no-lonely-if */
/* eslint-disable import/prefer-default-export */
/* eslint-disable indent */
import { ConvoManagerConstructor } from '../models/convo-engine/managers/convo-manager'
import StateManager from '../models/state/managers/state-manager'
import UserChoice from '../models/convo-engine/convo-graph/user-choice'
import {
    evaluateText,
    evaluateCondition,
    onError,
    evaluateFilePath,
    evaluateStateUpdate,
} from '../util/util-functions'
import log from '../util/logging'
import logEventToRemote from '../../state/remote-logging'
import {
    ConvoLogic,
    ConvoLogicAction,
} from '../models/convo-engine/convo-graph/convo-logic'
import ConvoNode from '../models/convo-engine/convo-graph/convo-node'
import RenderInChat from '../models/chat-client/render-interface'
import { stateManagerConstructor } from './state-manager'
import HistoryManager from '../models/state/managers/history-manager'
import {
    UserId,
    Stores,
    GeneralizedState,
    GeneralizedStateInstance,
} from '../models/state/state'
import ConvoModule from '../models/convo-engine/convo-graph/convo-module'
import { CardData, ContinueConversationResponse, FreeResponseAction, OptionData } from '../models/api/client-side-types'

const formatConvoChoice = (
    choices: UserChoice[],
    userState: GeneralizedStateInstance
) => {
    // eslint-disable-next-line no-unused-vars
    const errorHandler = (_: Error) => 'unused'
    return choices.map(c => evaluateText(c.text, errorHandler, userState))
}

const formatContentSentToUser = (
    convoNodes: ConvoNode[],
    userState: GeneralizedStateInstance
) => {
    // eslint-disable-next-line no-unused-vars
    const errorHandler = (_: Error) => 'unused'
    return convoNodes.map(c => {
        if (c.__TYPE__ === 'image-node') {
            return `image [src: ${c.src}]`
        }
        return evaluateText(c.text, errorHandler, userState)
    })
}

const choiceMatchesUserInput: (
    userInput: string,
    stateInstance: GeneralizedStateInstance
) => (choice: UserChoice) => boolean = (userInput, stateInstance) => choice => {
    // Any choice that thows an error will resolve by default to the empty string and thus never match user's input
    const errorHandler = onError(
        `Choice text expression resolves to error.\nUser input = ${userInput}`,
        ''
    )
    return evaluateText(choice.text, errorHandler, stateInstance) === userInput
}

const transformToCardData: (
    stateInstance: Readonly<GeneralizedState>
) => (convoNode: ConvoNode) => CardData[] = (
    stateInstance
) => convoNode => {
    switch (convoNode.__TYPE__) {
        case 'image-node':
            const errorHandler = onError(
                `Error evaluating image source`,
                'SERVER ERROR'
            );
            return ([{
                    type: 'image',
                    src: evaluateFilePath(convoNode.src, errorHandler, stateInstance),
                }]);
            break;
        case 'text-node':
            const replyText = evaluateText(
                convoNode.text,
                onError('Error evaluating convoNode text', 'SERVER ERROR'),
                stateInstance
            )
            log.debug(`send reply`, replyText)
            return ([{
                    type: 'text',
                    text: replyText,
                }]);
            break
        default:
            log.trace('Error! This should be unreachable code')
            return ([{
                    type: 'text',
                    text: 'INTERNAL ERROR',
                }]);
            break
    }
}

interface ExecuteActionParams {
    action: ConvoLogicAction
    stateManager: StateManager
}

const keyboardButtonFromChoice: (
    stateInstance: GeneralizedState
) => (choice: UserChoice) => string = stateInstance => choice => {
    const errorHandler = onError(
        `Choice text expression resolves to error.`,
        'SERVER ERROR'
    )
    return evaluateText(choice.text, errorHandler, stateInstance)
}

const keyboardButtonsFromChoices: (
    stateInstance: GeneralizedStateInstance,
    choices: UserChoice[]
) => string[] = (stateInstance, choices) => {
    const keyboardButtonFromChoiceWithState = keyboardButtonFromChoice(
        stateInstance
    )
    return choices.map(keyboardButtonFromChoiceWithState)
}

const executeAction: (params: ExecuteActionParams) => CardData[] = params => {
    const { action, stateManager } = params
    log.debug(`Executing action`, action)
    switch (action.type) {
        case 'start-convo-segment':
            // TODO: Add support for pre convo logic
            log.debug(`Set convo path to `, action.path)
            logEventToRemote({
                type: 'goto-segment',
                startingPath: stateManager.getCurrentConvoSegmentPath(),
                endingPath: stateManager.getAbsolutePath(action.path),
                userId: stateManager.getState().userId as string,
                choices: formatConvoChoice(
                    stateManager.getCurrentConvoSegment().choices,
                    stateManager.getState()
                ),
                userStateBeforeLogic: stateManager.getState(),
                contentReceivedFromUser: stateManager.getState()
                    .lastTextMessage,
                timestamp: new Date(),
                username: stateManager.getState().username as string,
                userEmail: stateManager.getState().userEmail as string,
                contentSentToUser: formatContentSentToUser(
                    stateManager.getCurrentConvoSegment().convoNodes,
                    stateManager.getState()
                ),
            })
            stateManager.setCurrentConvoSegmentPath(action.path)
            const convoSegment = stateManager.getCurrentConvoSegment()
            return convoSegment.convoNodes.flatMap( 
                transformToCardData(
                    stateManager.getState()
                )
            )
        case 'update-state-data-action':
            log.debug(`Update state with state updates: `, action.updates)
            const errorHandler = onError(
                `Error evaluating state update expression, this is likely a problem with logic in the module's definition.\nThe user state will NOT be updated.`,
                {}
            )
            const evaluatedStateUpdate = evaluateStateUpdate(
                action.updates,
                errorHandler,
                stateManager.getState()
            )
            logEventToRemote({
                type: 'update-state',
                startingPath: stateManager.getCurrentConvoSegmentPath(),
                userId: stateManager.getState().userId as string,
                choices: formatConvoChoice(
                    stateManager.getCurrentConvoSegment().choices,
                    stateManager.getState()
                ),
                userStateBeforeLogic: stateManager.getState(),
                contentReceivedFromUser: stateManager.getState()
                    .lastTextMessage,
                stateUpdate: evaluatedStateUpdate,
                username: stateManager.getState().username as string,
                userEmail: stateManager.getState().userEmail as string,
                timestamp: new Date(),
            })
            stateManager.updateState(evaluatedStateUpdate)
            return []
        default:
            log.trace('Error! This should be unreachable code')
            return []
    }
}

interface ExecuteConvoLogicParams {
    logic: ConvoLogic
    stateManager: StateManager
}

const executeConvoLogic: (logic: ExecuteConvoLogicParams) => ContinueConversationResponse = params => {
    const { logic, stateManager } = params
    const cards = logic.flatMap(conditionalLogic => {
        log.debug(`Executing logic`, conditionalLogic)
        // Assume any condition that evaluates to an error evalutes to 'false'
        const errorHandler = onError(
            `Condition expression resolves to error.\n This will be evaluated to 'false' by default.`,
            false
        )
        const curriedExecuteAction = (action: ConvoLogicAction) =>
            executeAction({ action, stateManager })
        if (
            evaluateCondition(
                conditionalLogic.if,
                errorHandler,
                stateManager.getState()
            )
        ) {
            log.debug(`Condition evalutes to 'true', handling 'then'`)
            const cards = conditionalLogic.do.flatMap(curriedExecuteAction)
            return cards
        } else {
            log.debug(`Condition evalutes to 'false', handling 'otherwise'`)
            const cards = conditionalLogic.otherwise.flatMap(curriedExecuteAction)
            return cards
        }
    })
    const keyboardButtons = keyboardButtonsFromChoices(
        stateManager.getState(),
        stateManager.getCurrentConvoSegment().choices
    )
    const freeResponseOption: OptionData[] = stateManager.getCurrentConvoSegment().defaultChoice !== undefined ?
    [{
        text: 'Free Reponse',
        action: {
        type: 'free-response',
        option: ''
    }}] : []
    const keyboardOptions: OptionData[] = keyboardButtons.map((c) => ({
        text: c,
        action: {
            type: 'click-option',
            option: c,
        }
    }))
    return ({
        type: 'continuation-data',
        cards: cards,
        options: [...freeResponseOption, ...keyboardOptions],
        context: stateManager.getStores()
    })
}

type GetOrInitStateManagerParams = {
    userId: string
    cache: Record<string, StateManager>
    module: ConvoModule
    initialState: Stores
    historyManager: HistoryManager
}

const getOrInitStateManager: (
    params: GetOrInitStateManagerParams
) => StateManager = params => {
    const { userId, cache, module, initialState, historyManager } = params
    if (cache[userId] !== undefined) {
        log.debug(`Found state manager in cache for userId '${userId}'`)
        return cache[userId]
    } else {
        log.debug(
            `Did not find state manager in cache for userId '${userId}', creating one now with initial state`,
            initialState
        )
        const initialStateWithId = {
            ...initialState,
            variables: {
                ...initialState.variables,
                userId,
            },
        }
        log.fatal('initial state', initialStateWithId, userId)
        const stateManager: StateManager = stateManagerConstructor.getOrInitStateManager(
            module,
            initialStateWithId,
            historyManager
        )
        cache[userId] = stateManager
        return stateManager
    }
}

export const convoManagerConstructor: ConvoManagerConstructor = (
    module,
    initialState
) => {
    const cache: Record<string, StateManager> = {}
    return {
        respondToUserInput: (userId, userInput) => {
            // init state manager or pull from cache
            // init navigation manager or pull from cache
            const historyManager: HistoryManager = {}

            const stateManager: StateManager = getOrInitStateManager({
                cache,
                userId,
                module,
                initialState,
                historyManager,
            })

            // Find the matching user choice for the given user input at the current convoNode
            log.debug(
                `processing user input ${userInput} for convo segment with path `,
                stateManager.getCurrentConvoSegmentPath
            )
            log.debug(`updating lastTextMessage state field`)
            stateManager.updateState({ lastTextMessage: userInput })

            const currentConvoSegment = stateManager.getCurrentConvoSegment()
            const selectedUserChoice = currentConvoSegment.choices.find(
                choiceMatchesUserInput(userInput, stateManager.getState())
            )
            if (selectedUserChoice !== undefined) {
                log.debug(
                    `User input ${userInput} matches the choice `,
                    selectedUserChoice
                )
                // Do any logic associated with the selected user choice
                return executeConvoLogic({
                    logic: selectedUserChoice.logic,
                    stateManager,
                })
            } else {
                if (currentConvoSegment.defaultChoice !== undefined) {
                    log.debug(
                        `User input matches no choices, executing logic for default choice`
                    )
                    return executeConvoLogic({
                        logic: currentConvoSegment.defaultChoice,
                        stateManager,
                    })
                } else {
                    log.debug(
                        `User input ${userInput} matches NO choices and no 'defaultChoice' is defined`
                    )
                    const keyboardButtons = keyboardButtonsFromChoices(
                        stateManager.getState(),
                        currentConvoSegment.choices
                    )
                    const returningToPageResponse = 'Welcome back!';
                    let defaultResponse = userInput === 'Returning to a scene!' ? 
                    returningToPageResponse : `Sorry, I don't recognize your response of <i>${userInput}</i> right now. Try responding with one of the buttons in the chat keyboard.`
                    
                    logEventToRemote({
                        type: 'unrecognized-response',
                        startingPath: stateManager.getCurrentConvoSegmentPath(),
                        userId: stateManager.getState().userId as string,
                        choices: formatConvoChoice(
                            currentConvoSegment.choices,
                            stateManager.getState()
                        ),
                        userStateBeforeLogic: stateManager.getState(),
                        contentReceivedFromUser: stateManager.getState()
                            .lastTextMessage,
                        timestamp: new Date(),
                        username: stateManager.getState().username as string,
                        userEmail: stateManager.getState().userEmail as string,
                    })
                    return ({
                        type: 'continuation-data',
                        cards: [{
                            type: 'text',
                            text: defaultResponse,
                        }],
                        context: stateManager.getStores(),
                        options: keyboardButtons.map((c) => ({
                            text: c,
                            action: {
                                type: 'click-option',
                                option: c,
                            }
                        })),
                    })
                }
            }
        },
    }
}
