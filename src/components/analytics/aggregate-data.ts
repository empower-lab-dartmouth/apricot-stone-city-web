/* eslint-disable max-len */
/* eslint-disable max-len */
// Pull all relevant data from fb

import {collection, doc, getDoc, getDocs, query, setDoc, where} from 'firebase/firestore';
import {db} from '../firebase/firebase-config';
import {LoggedEvent, RatedSceneEvent, SceneAggregateFeedback, UserLevel} from '../../state/recoil';
import _ from 'lodash';
import * as stats from 'stats-lite';

const EXCLUDED_USERS = [
  'wpiskandar304@gmail.com',
  'dylanedwardmoore@gmail.com',
  'emurnane@dartmouth.edu',
];

export const pullLogsForOneUser = async (username: string) => {
  const q = query(collection(db, `zEL-${username}`));
  const querySnapshot = await getDocs(q);
  console.log(querySnapshot.docs);
  console.log('Firebase collection read <event logs>');
  const docs = querySnapshot.docs
      .map((doc: any) => {
        let d = doc.data() as any as LoggedEvent;
        if (d.type === 'edit-scene-card') {
          d = {
            ...d,
            feedback: {
              ...d.feedback,
              bugFix: d.feedback.bugFix !== undefined ? d.feedback.bugFix : false,
              level2Change: d.feedback.level2Change !== undefined ? d.feedback.level2Change : true,
              level3Change: d.feedback.level3Change !== undefined ? d.feedback.level3Change : false,
              level4Change: d.feedback.level4Change !== undefined ? d.feedback.level4Change : false,
              otherReason: d.feedback.otherReason !== undefined ? d.feedback.otherReason : false,
            },
          };
        }
        return d as LoggedEvent;
      })
      .sort((a, b) => b.date - a.date);
  return docs;
};

export const pullFeedbackLogsForOneUser = async (username: string) => {
  const q = query(collection(db, `zEL-${username}`), where('type', '==', 'scene-feedback'));
  const querySnapshot = await getDocs(q);
  console.log(querySnapshot.docs);
  console.log('Firebase collection read <event logs>');
  const docs = querySnapshot.docs
      .map((doc: any) => {
        const d = doc.data() as any as RatedSceneEvent;
        return d as RatedSceneEvent;
      })
      .sort((a, b) => b.date - a.date);
  return docs;
};

export const setAllSceneFeedbackFromRemote = async (userlevels: UserLevel[], setFeedback: (x: Record<string, SceneAggregateFeedback>) => void) => {
  const filteredUsers = userlevels.filter((user) => !EXCLUDED_USERS.some((v) => user.username === v));
  console.log(`filtered out ${userlevels.length - filteredUsers.length} users`);
  const allUserLogs = await Promise.all(userlevels.flatMap((userLevel) => {
    return pullFeedbackLogsForOneUser(userLevel.username);
  }));
  const flattenedLogs = allUserLogs.flat();
  console.log(flattenedLogs);
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
  const cacheRef = collection(db, 'AllScenesFeedbackCache');
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

type CacheDate = {
    cacheDate: number
}

const MIN_TIME_UNTIL_NEW_PULL = 1200000;


const formatScenes: (input: Record<string, RatedSceneEvent[]>) => Record<string, SceneAggregateFeedback> = (input) => {
  const quizScore = (correct: boolean[]) => {
    return stats.sum(correct.map((c) => c ? 1 : 0)) / correct.length;
  };

  const newObj = Object.entries(input).reduce((agg, [k, v]) => ({
    ...agg,
    [k]: {
      sceneId: k,
      avgEnjoymentScore: _.round(_.mean(v.map((v) => v.enjoymentRating)), 2),
      stdEnjoymentScore: _.round(stats.stdev(v.map((v) => v.enjoymentRating)), 2),
      avgLearnedScore: _.round(_.mean(v.map((v) => v.learningRating)), 2),
      stdLearnedScore: _.round(stats.stdev(v.map((v) => v.learningRating)), 2),
      liked: v.map((v) => v.liked),
      wanted: v.map((v) => v.wanted),
      avgTestScore: v[v.length -1].quiz.length > 0 ? _.round(stats.mean(v.flatMap((v) => quizScore(v.quiz.map((q) => q.correct)))), 2) : 'none',
      stdTestScore: v[v.length -1].quiz.length > 0 ? _.round(stats.stdev(v.flatMap((v) => quizScore(v.quiz.map((q) => q.correct)))), 2) : 'none',
      quests: v[v.length -1].quests,
    },
  }), {});
  console.log('summary: ');
  console.log(newObj);
  return newObj;
};

export const setAllSceneFeedbackFromRemoteIfNeeded = async (userlevels: UserLevel[],
    setFeedback: (x: Record<string, SceneAggregateFeedback>) => void, firstPull: boolean) => {
  const dateRef = doc(db, 'AllScenesFeedbackCache', 'date');
  const docSnap = await getDoc(dateRef);
  if (docSnap.exists()) {
    console.log('Last cache date:', docSnap.data());
    const cacheDate = docSnap.data() as any as CacheDate;
    if ((new Date()).getTime() - cacheDate.cacheDate < MIN_TIME_UNTIL_NEW_PULL) {
      console.log('Using local cached data');
      if (!firstPull) {
        return;
      }
      const cacheRef = doc(db, 'AllScenesFeedbackCache', 'cache');
      const cachedDoc = await getDoc(cacheRef);
      if (cachedDoc.exists()) {
        console.log('Using remote cached data');
        const data = cachedDoc.data() as any as Record<string, SceneAggregateFeedback>;
        console.log(data);
        setFeedback(data);
        return;
      }
    }
  } else {
    console.log('resetting cache');
  }
  setAllSceneFeedbackFromRemote(userlevels, setFeedback);
};

export const pullAllDataFromFb = async (userlevels: UserLevel[]) => {
  const filteredUsers = userlevels.filter((user) => !EXCLUDED_USERS.some((v) => user.username === v));
  console.log(`filtered out ${userlevels.length - filteredUsers.length} users`);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const allUserLogs = await Promise.all(userlevels.map((userLevel) => {
    return pullLogsForOneUser(userLevel.username);
  }));
};
