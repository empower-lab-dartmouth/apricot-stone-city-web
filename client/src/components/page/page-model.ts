import {CardData} from '../card/card-model';
import {OptionData} from '../option/option-model';

export type PageData = {
    chatHistory: (CardData | OptionData)[]
    options: OptionData[]
}
