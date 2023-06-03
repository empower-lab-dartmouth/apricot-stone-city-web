import {Action} from '../../state/action';

export type OptionData = {
    id: string
    text: string
    type: 'option'
    action: Action
}
