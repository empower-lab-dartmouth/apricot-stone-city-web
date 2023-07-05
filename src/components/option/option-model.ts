import {Action} from '../../state/action';

export type OptionData = {
    id: string
    text: string
    correctAnswer: 'true' | 'false' | 'na'
    type: 'option'
    action: Action
}
