import {collection, doc, getDoc, getDocs,
  query, setDoc, where} from 'firebase/firestore';
import {db} from '../firebase/firebase-config';
import {CardEditFeedback,
  EditSceneCardEvent, LevelEvent, LoggedEvent,
  SceneAggregateFeedback,
  SceneContribution,
  SessionScore, UserLevel, UserSummary} from '../../state/recoil';
import * as stats from 'stats-lite';
import {CacheDate, EXCLUDED_USERS, MIN_TIME_UNTIL_NEW_PULL,
  pullLogsForOneUser} from './aggregate-data';
import {PostToFacilitator} from '../facilitator/Facilitator';
import _ from 'lodash';

export const PROCESSED_SESSION_LENGTH = 1200000; // 20 min.
export const STUDY_START_DATE = Date.parse('05 Jul 2023 00:00:00 GMT');

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
        return [...events.slice(0, i),
          createLevelOneEvent(lastDate), ...events.slice(i)];
      }
    } else if (event.type === 'scene-feedback') {
      if (event.quests.length > 0) {
        event.quests.forEach((q) => {
          if (!completedQuests.has(q)) {
            completedQuests.add(q);
            if (completedQuests.size >= 10) {
              return [...events.slice(0, i),
                createLevelOneEvent(lastDate), ...events.slice(i)];
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

const getStartTimeOfSession = (allSessionsStart: number,
    sessionLength: number, eventTime: number) => {
  let i = 0;
  while (allSessionsStart + (i + 1) * sessionLength < eventTime) {
    i += 1;
  }
  return allSessionsStart + i * sessionLength;
};

const emptySession: (startDate: number) => SessionScore = (startDate) => ({
  startDate,
  timeContributing: 0,
  timeOnAnalytics: 0,
  wordsRead: 0,
  userMadeQuizCorrect: 0,
  userMadeQuizIncorrect: 0,
  timeConsumingContent: 0,
  collaborators: [],
  othersEnjoymentOfContribution: [],
  othersLearningFromContribution: [],
  othersTestScoresOnContribution: [],
  // Consumption stats:
  enjoymentScores: [],
  learnScores: [],
  testScores: [],
  quests: [],
});

const wordCount = (str: string) => {
  return str.split(' ').length;
};

const levelAtTime = (startDate: number, levels: LevelEvent[], time: number) => {
  let levelUpDate = startDate;
  let l = 0;
  let i = 0;
  while (i < levels.length && levelUpDate < time) {
    i += 1;
    levelUpDate = levels[0].date;
    l = levels[0].leveledUpTo;
  }
  return l;
};

type SessionContribution = {
  sessionIdx: number,
  duration: number
}

const getSessionStartTimesAndDuration: (sessionsStart: number,
  sessionDuration: number,
    eventStart: number, eventDuration: number) => SessionContribution[] =
     (sessionsStart, sessionDuration,
         eventStart, eventDuration) => {
       let trueEventStart = eventStart - eventDuration;
       let currentSession = getStartTimeOfSession(sessionsStart,
           sessionDuration, trueEventStart);
       const trueFirstSession = currentSession;
       let timeRemaining = eventDuration;
       let contributions: SessionContribution[] = [];
       const lastSessionIdx = getStartTimeOfSession(sessionsStart,
           sessionDuration, eventStart);
       const firstDuration = sessionDuration - (
         trueEventStart - currentSession);
       const lastDuration = eventDuration - (
         (eventDuration + lastSessionIdx) - eventStart);
       while (timeRemaining > 0) {
         const timeInSesson = lastSessionIdx === currentSession ? lastDuration :
         trueFirstSession === currentSession ? firstDuration : sessionDuration;
         contributions = [
           ...contributions,
           {
             sessionIdx: currentSession,
             duration: timeInSesson,
           },
         ];
         currentSession += sessionDuration;
         trueEventStart = currentSession;
         timeRemaining -= timeInSesson;
       }
       return contributions;
     };

const processEditSceneEvent: (sessions: Record<number, SessionScore>,
  event: EditSceneCardEvent, sessionDuration: number, allSessionsStart: number,
  sceneAggFeedback: Record<string,
  SceneAggregateFeedback>) => Record<number, SessionScore> =
  (s, event, sessionDuration, allSessionsStart, sceneAggFeedback) => {
    const sessionsToChange = getSessionStartTimesAndDuration(allSessionsStart,
        sessionDuration, event.date,
        event.feedback.timeSpentCoding + event.feedback.timeSpentWiki);
    console.log('Sessions and durations:');
    console.log(sessionsToChange);
    console.log('for event:');
    console.log(event);
    const res = sessionsToChange.reduce((sessions, sessCont) => {
      const session: SessionScore = sessions[
          sessCont.sessionIdx] !== undefined ?
    sessions[sessCont.sessionIdx] : emptySession(
        sessCont.sessionIdx);
      if (sessCont.sessionIdx === 1689040800000) {
        console.log('null check!');
      }
      return {
        ...sessions,
        [sessCont.sessionIdx]: {
          ...session,
          timeContributing: session.timeContributing + sessCont.duration,
          collaborators: [...session.collaborators,
            ...event.feedback.collaborators],
          enjoymentScores: [...session.enjoymentScores,
            event.feedback.enjoymentRating],
          othersEnjoymentOfContribution: sceneAggFeedback[
              event.sceneAfter.id] !== undefined ?
          [...session.othersEnjoymentOfContribution,
            sceneAggFeedback[event.sceneAfter.id].avgEnjoymentScore] :
            session.othersEnjoymentOfContribution,
          othersLearningFromContribution: sceneAggFeedback[
              event.sceneAfter.id] !== undefined ?
          [...session.othersLearningFromContribution,
            sceneAggFeedback[event.sceneAfter.id].avgLearnScore] :
            session.othersLearningFromContribution,
          othersTestScoresOnContribution: sceneAggFeedback[
              event.sceneAfter.id] !== undefined && sceneAggFeedback[
                  event.sceneAfter.id].avgTestScore !== 'none'?
          [...session.othersTestScoresOnContribution,
            sceneAggFeedback[event.sceneAfter.id].avgTestScore as number] :
            session.othersTestScoresOnContribution,
          learnScores: [...session.learnScores, event.feedback.learningRating],
          quests: Array.from(
              new Set([...session.quests, ...event.sceneAfter.quests])),
        },
      };
    }, s);
    console.log('integrated change');
    console.log(res);
    return res;
  };

const getSessionScores:
(events: (LoggedEvent | LevelUpEvent)[],
levels: LevelEvent[], startDate: number,
sceneAggFeedback: Record<string, SceneAggregateFeedback>)
=> Record<number, SessionScore> = (events, levels, startDate,
    sceneAggFeedback) => {
  const init: Record<number, SessionScore> = {};
  const result = events.reduce((sessions, event) => {
    const sessionIdx = getStartTimeOfSession(
        startDate, PROCESSED_SESSION_LENGTH, event.date);
    const session: SessionScore = sessions[sessionIdx] !== undefined ?
    sessions[sessionIdx] : emptySession(sessionIdx);
    if (event.type === 'chat-option') {
      return {
        ...sessions,
        [sessionIdx]: {
          ...session,
          wordsRead: session.wordsRead + wordCount(event.option) +
          wordCount(event.response.join(' ')),
          userMadeQuizCorrect: event.correctAnswer === 'true' ?
          session.userMadeQuizCorrect + 1 : session.userMadeQuizCorrect,
          userMadeQuizIncorrect: event.correctAnswer === 'false' ?
          session.userMadeQuizIncorrect + 1 : session.userMadeQuizIncorrect,
        },
      };
    } else if (event.type === 'session') {
      const level = levelAtTime(startDate, levels, event.date);
      const timeContributing = session.timeContributing +
      event.analysis.activeTime + event.facilitator.activeTime +
      (level > 1 ? event.map.activeTime : 0);
      const timeConsuming = session.timeConsumingContent +
      event.adventure.activeTime +
      (level === 0 ? event.map.activeTime : 0);
      return {
        ...sessions,
        [sessionIdx]: {
          ...session,
          timeContributing: timeContributing,
          timeConsumingContent: timeConsuming,
          timeOnAnalytics: session.timeOnAnalytics + event.analysis.activeTime,
        },
      };
    } else if (event.type === 'edit-scene-card') {
      return processEditSceneEvent(sessions, event,
          PROCESSED_SESSION_LENGTH, startDate, sceneAggFeedback);
    } else if (event.type === 'scene-feedback') {
      return {
        ...sessions,
        [sessionIdx]: {
          ...session,
          enjoymentScores: [...session.enjoymentScores,
            event.enjoymentRating],
          learnScores: [...session.learnScores, event.learningRating],
          quests: Array.from(
              new Set([...session.quests, ...event.quests])),
          testScores: event.quiz.length > 0 ? [...session.testScores,
            _.round(stats.mean(event.quiz.map((q) => q.correct ? 1 : 0)))] :
            session.testScores,
        },
      };
    }
    return sessions;
  }, init);
  return result;
};

export const setUserSummaryFromRemote = async (
    user: string,
    sceneAggFeedback: Record<string, SceneAggregateFeedback>,
    setFeedback: (x: UserSummary) => void) => {
  const eventLogs = await pullLogsForOneUser(user);
  const userRequests = await loadUserRequests(user);
  const allEvents = addLevelOneUpgradeEvent(([...eventLogs, ...userRequests])
      .sort((a, b) => a.date - b.date));
  console.log('All events for user');
  console.log(allEvents);
  const sceneContributions = getSceneContributions(allEvents);
  const levels: LevelEvent[] = allEvents
      .filter((e) => e.type === 'level-up-event')
      .map((e) => ({
        date: e.date,
        leveledUpTo: (e as LevelUpEvent).levelUpTo,
      }));
  const sessionScores = getSessionScores(allEvents, levels, STUDY_START_DATE,
      sceneAggFeedback);
  const result: UserSummary = {
    userId: user,
    startDate: STUDY_START_DATE,
    sessionLength: PROCESSED_SESSION_LENGTH,
    sceneContributions,
    levels,
    sessionData: sessionScores,
  };
  const cacheRef = collection(db, 'AllUserDataSummaries');
  try {
    await setDoc(doc(cacheRef, `${user}-cache`), result);
  } catch (e) {
    console.log('error writing cache to fb');
    console.log(e);
  }
  await setDoc(doc(cacheRef, `${user}-date`), {
    cacheDate: (new Date()).getTime(),
  });
  setFeedback(result);
  return result;
};

export const setUserSummaryFromRemoteIfNeeded = async (
    user: string,
    sceneAggFeedback: Record<string, SceneAggregateFeedback>,
    setFeedback: (x: UserSummary) => void, firstPull: boolean) => {
  const dateRef = doc(db, 'AllUserDataSummaries', `${user}-date`);
  const docSnap = await getDoc(dateRef);
  if (docSnap.exists()) {
    console.log('Last cache date:', docSnap.data());
    const cacheDate = docSnap.data() as any as CacheDate;
    if ((new Date()).getTime() -
    cacheDate.cacheDate < MIN_TIME_UNTIL_NEW_PULL) {
      console.log('Using local cached data');
      if (!firstPull) {
        return;
      }
      const cacheRef = doc(db, 'AllUserDataSummaries', `${user}-date`);
      const cachedDoc = await getDoc(cacheRef);
      if (cachedDoc.exists()) {
        console.log('Using remote cached data');
        const data = cachedDoc.data() as any as UserSummary;
        console.log(data);
        setFeedback(data);
        return;
      }
    }
  } else {
    console.log('resetting cache');
  }
  const data = await setUserSummaryFromRemote(user,
      sceneAggFeedback, setFeedback);
  return {
    [user]: data,
  };
};

type KeyValSummary = {
  [x: string]: UserSummary;
}

export const pullAllUserSummariesFromFb = async (userlevels: UserLevel[],
    allUserData: Record<string, UserSummary>,
    sceneAggFeedback: Record<string, SceneAggregateFeedback>,
    setAllUserData: (x: Record<string, UserSummary>) => void) => {
  const filteredUsers = userlevels.filter((user) =>
    !EXCLUDED_USERS.some((v) => user.username === v));
  console.log(`filtered out ${userlevels.length - filteredUsers.length} users`);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const allUserSummaries = await Promise.all(userlevels.map((userLevel) => {
    const firstPull = allUserData[userLevel.username] === undefined;
    return setUserSummaryFromRemoteIfNeeded(userLevel.username,
        sceneAggFeedback,
        (x) => {},
        firstPull);
  }));
  const initVal: Record<string, UserSummary> = {};
  const reducer: (agg: Record<string, UserSummary>,
    curr: Record<string, UserSummary>)
  => Record<string, UserSummary> = (agg, curr) => {
    if (curr === undefined) {
      return agg;
    } else {
      return ({
        ...agg,
        ...curr,
      });
    }
  };
  const val: Record<string, UserSummary> = (allUserSummaries
      .filter((v) => v !== undefined) as KeyValSummary[])
      .reduce(reducer, initVal);
  console.log('updating all user data to: ');
  console.log(val);
  setAllUserData(val);
};


