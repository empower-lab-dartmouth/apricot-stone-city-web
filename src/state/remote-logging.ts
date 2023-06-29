import { collection, doc, setDoc } from 'firebase/firestore'
import { env } from 'process'
import { LogToRemoteEvent } from '../core/models/state/remote-logging-event'
import { REMOTE_BOT_TOKEN } from '../storyteller-config'
import { firebaseDB } from './firebase'

const EVENTS_ENV = 'loggingEvents'

const logEventToRemote: (event: LogToRemoteEvent) => void = async (
    event: LogToRemoteEvent
) => {
    console.log('push event:')
    const currentDate = Date()
    const eventWithEnv = {
        ...event,
        choices: event.choices.length > 0 ? event.choices : 'free-response',
        botToken: process.env.BOT_TOKEN,
        buildEnvironment:
            process.env.BOT_TOKEN === REMOTE_BOT_TOKEN ? 'remote' : 'local',
    }
    console.log(eventWithEnv)
    if (eventWithEnv !== undefined) {
        // setDoc(doc(firebaseDB, EVENTS_ENV, currentDate), eventWithEnv)
    }
}

export default logEventToRemote
