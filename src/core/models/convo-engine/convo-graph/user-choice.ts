import { Text } from './expression'
import { ConvoLogic } from './convo-logic'

type UserChoice = Readonly<{
    text: Text
    correctAnswer: 'true' | 'false' | 'na'
    logic: ConvoLogic
}>

export default UserChoice
