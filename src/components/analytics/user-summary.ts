import {collection, doc, getDoc, getDocs,
  query, setDoc, where} from 'firebase/firestore';
import {db} from '../firebase/firebase-config';
import {CardEditFeedback, CreateSceneCardEvent, EditSceneCardEvent, LevelEvent, LoggedEvent, RatedSceneEvent,
  SceneAggregateFeedback, SceneContribution, SessionScore, SessionScore, UserLevel, UserSummary} from '../../state/recoil';
import _, {orderBy} from 'lodash';
import * as stats from 'stats-lite';
import {EXCLUDED_USERS, pullLogsForOneUser} from './aggregate-data';
import {PostToFacilitator} from '../facilitator/Facilitator';

export type LevelUpEvent = {
  type: 'level-up-event'
  username: string,
  date: number,
  levelUpTo: number,
}

const loadUserRequests = async (username: string) => {
  const q = query(collection(db, 'PostToFacilitator'),
      where('requestorUsername', '==', username));
  console.log('Firebase collection read facilitator page ' +
  '<postTofaciliator> for user' + username);
  const querySnapshot = await getDocs(q);
  const docs: LevelUpEvent[] = querySnapshot.docs
      .map((doc: any) => doc.data() as any as PostToFacilitator)
      .filter((a) => a.request !== 'None' && a.request !== 'Other')
      .map((a) => ({
        type: 'level-up-event',
        username,
        date: (new Date(a.date)).getTime(),
        levelUpTo: a.request === 'Complete Level 1' ? 1 :
        a.request === 'Complete Level 2' ? 2 :
        a.request === 'Complete Level 3' ? 3 : 4,
      }));
  return docs;
};

const addLevelOneUpgradeEvent = (events: (LoggedEvent | LevelUpEvent)[]) => {
  const completedQuests = new Set();
  let lastDate = events[0].date;
  const createLevelOneEvent: (prevEventDate: number) => LevelUpEvent = (p) => ({
    type: 'level-up-event',
    username: events[0].username,
    date: p + 1,
    levelUpTo: 1,
  });
  let i = 0;
  while (i < events.length) {
    const event = events[i];
    if (event.type === 'level-up-event') {
      if (event.levelUpTo === 1) {
        return events;
      } else {
        return events.splice(i, 0, createLevelOneEvent(lastDate));
      }
    } else if (event.type === 'scene-feedback') {
      if (event.quests.length > 0) {
        event.quests.forEach((q) => {
          if (!completedQuests.has(q)) {
            completedQuests.add(q);
            if (completedQuests.size >= 10) {
              return events.splice(i, 0, createLevelOneEvent(lastDate));
            }
          }
        });
      }
    }
    lastDate = events[i].date;
    i += 1;
  }
  return events;
};

const getSceneContributions: (events:
  (LoggedEvent | LevelUpEvent)[]) => SceneContribution[] = (events) => {
    return events.filter((e) => e.type === 'edit-scene-card')
        .map((e) => ({
          date: e.date,
          feedback: (e as EditSceneCardEvent)
              .feedback as Required<CardEditFeedback>,
        }));
  };

const getSessionScores:
(events: (LoggedEvent | LevelUpEvent)[]) => SessionScore[] = (events) => {
  const level = 0;
  const i = 0;
  const sessions: SessionScore[] = [];
  const emptySession = ()
  // TODO left off here
  while (i < events.length) {

  }
};

export const setUserSummaryFromRemote = async (
    user: string,
    setFeedback: (x: Record<string, UserSummary>) => void) => {
  const eventLogs = await pullLogsForOneUser(user);
  const userRequests = await loadUserRequests(user);
  const allEvents = addLevelOneUpgradeEvent(([...eventLogs, ...userRequests])
      .sort((a, b) => a.date - b.date));
  console.log('All events for user');
  console.log(allEvents);
  const sceneContributions = getSceneContributions(allEvents);
  const levels: LevelEvent = allEvents
      .filter((e) => e.type === 'level-up-event')
      .map((e) => ({
        date: e.date,
        leveledUpTo: (e as LevelUpEvent).levelUpTo,
      }));
  const sessionScores = getSessionScores(allEvents);
  const prior: Record<string, RatedSceneEvent[]> = {};
  const logsToMap = flattenedLogs.reduce((arr, curr) => {
    const priorArray = arr[curr.sceneId] === undefined ? [] : arr[curr.sceneId];
    return ({
      ...arr,
      [curr.sceneId]: [...priorArray, curr],
    });
  }, prior);
  console.log('logs to map:');
  console.log(logsToMap);
  const cacheRef = collection(db, 'AllEditSceneCardFeedbackCache');
  const transformedLogs = formatScenes(logsToMap);
  try {
    await setDoc(doc(cacheRef, 'cache'), transformedLogs);
  } catch (e) {
    console.log('error writing to fb');
    console.log(e);
  }
  await setDoc(doc(cacheRef, 'date'), {
    cacheDate: (new Date()).getTime(),
  });
  setFeedback(transformedLogs);
};


