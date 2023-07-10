import React, {useContext, useEffect} from 'react';
import {useRecoilState, useRecoilValue} from 'recoil';
import {AuthContext} from './context/auth-context';
import {SessionActivityEvent,
  currentSessionActivityState, newActivtySession, trackingTimeUntilNextPush,
  useServerUrlState, userIsActiveState} from './state/recoil';
import {useLocation} from 'react-router-dom';
import {doc, setDoc} from 'firebase/firestore';
import {db} from './components/firebase/firebase-config';
import {useIdleTimer} from 'react-idle-timer';
import {REMOTE_SERVER_URL} from './utils/data-utils';


type EventCountByPage = {
    facilitator: number,
      profile: number,
      adventure: number,
      analytics: number,
      map: number,
  }

const userWasActive = (session: SessionActivityEvent) =>
  session.adventure.activeTime > 0 ||
    session.progress.activeTime > 0 ||
    session.analysis.activeTime > 0 ||
    session.map.activeTime > 0 ||
    session.facilitator.activeTime > 0;

const postActivitySessionToFB = async (session: SessionActivityEvent) => {
  // No need to waste FB writes on this.
  // The user may just have left the browser open.
  if (!userWasActive(session)) {
    return;
  }

  try {
    await setDoc(
        doc(db, `zEL-${session.username}`, session.id), session);
    console.log('Session logged to FB');
    console.log(session);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

const SessionTracker = () => {
  const {currentUser} = useContext(AuthContext);
  const TIME_BETWEEN_PUSHES = 240000; // Four minutes
  const server = useRecoilValue(useServerUrlState);
  const [timeUntilNextPush,
    setTimeuntilNextPush] = useRecoilState(trackingTimeUntilNextPush);

  // Check if the current user exists on the initial render.

  const [sessionActivity, setSessionActivity] = useRecoilState(
      currentSessionActivityState);
  const [isActive, setIsActive] = useRecoilState(userIsActiveState);
  const location = useLocation();
  const startingEventCount = {
    facilitator: 0,
    profile: 0,
    adventure: 0,
    analytics: 0,
    map: 0,
  };
  const [eventCount, setEventCount] = React.useState<EventCountByPage>(
      startingEventCount);

  const onIdle = () => {
    setIsActive(false);
  };

  const onActive = () => {
    setIsActive(true);
  };

  const onAction = (event?: Event) => {
    if (event !== undefined && event.type !== 'mousemove') {
      if (location.pathname.includes('facilitator')) {
        setEventCount({
          ...eventCount,
          facilitator: eventCount.facilitator + 1,
        });
      } else if (location.pathname.includes('profile')) {
        setEventCount({
          ...eventCount,
          profile: eventCount.profile + 1,
        });
      } else if (location.pathname.includes('adventure')) {
        setEventCount({
          ...eventCount,
          adventure: eventCount.adventure + 1,
        });
      } else if (location.pathname.includes('analytics')) {
        setEventCount({
          ...eventCount,
          analytics: eventCount.analytics + 1,
        });
      } else if (location.pathname.includes('map')) {
        setEventCount({
          ...eventCount,
          map: eventCount.map + 1,
        });
      }
    }
  };

  const {getElapsedTime} = useIdleTimer({
    onAction,
    onActive,
    onIdle,
    throttle: 500,
  });

  const addActiveAndIdleTimeToSession: (session: SessionActivityEvent,
       time: number) => SessionActivityEvent = (session, time) => {
         const idleTime = isActive ? 0 : time;
         const activeTime = !isActive ? 0 : time;
         if (location.pathname.includes('facilitator')) {
           return {
             ...session,
             facilitator: {
               ...session.facilitator,
               idleTime: session.facilitator.idleTime + idleTime,
               activeTime: session.facilitator.activeTime + activeTime,
             },
           };
         } else if (location.pathname.includes('profile')) {
           return {
             ...session,
             progress: {
               ...session.progress,
               idleTime: session.progress.idleTime + idleTime,
               activeTime: session.progress.activeTime + activeTime,
             },
           };
         } else if (location.pathname.includes('adventure')) {
           return {
             ...session,
             adventure: {
               ...session.adventure,
               idleTime: session.adventure.idleTime + idleTime,
               activeTime: session.adventure.activeTime + activeTime,
             },
           };
         } else if (location.pathname.includes('analytics')) {
           return {
             ...session,
             analysis: {
               ...session.analysis,
               idleTime: session.analysis.idleTime + idleTime,
               activeTime: session.analysis.activeTime + activeTime,
             },
           };
         } else if (location.pathname.includes('map')) {
           return {
             ...session,
             map: {
               ...session.map,
               idleTime: session.map.idleTime + idleTime,
               activeTime: session.map.activeTime + activeTime,
             },
           };
         } else {
           return session;
         }
       };

  const sessionId = (username: string,
      startDate: number) => `sess-act-${username}-${startDate}`;

  useEffect(() => {
    const interval = setInterval(async () => {
      const elapsedTime = Math.ceil(getElapsedTime() / 1000);
      if (currentUser?.email !== undefined &&
          currentUser?.email !== null) {
        const updatedSessionPreTime: SessionActivityEvent = {
          ...sessionActivity,
          username: currentUser.email,
          customServer: server !== REMOTE_SERVER_URL,
          id: sessionId(currentUser.email, sessionActivity.date),
          facilitator: {
            ...sessionActivity.facilitator,
            events: eventCount.facilitator,
          },
          map: {
            ...sessionActivity.map,
            events: eventCount.map,
          },
          progress: {
            ...sessionActivity.progress,
            events: eventCount.profile,
          },
          adventure: {
            ...sessionActivity.adventure,
            events: eventCount.adventure,
          },
          analysis: {
            ...sessionActivity.analysis,
            events: eventCount.analytics,
          },
        };
        const updatedSession = addActiveAndIdleTimeToSession(
            updatedSessionPreTime, elapsedTime);
          // Start a new session locally.
        if (updatedSession.date < (new Date()).getTime()) {
          console.log('Start a new session locally.');
          const newSession = newActivtySession(
              currentUser.email, updatedSession.date + 1,
              server !== REMOTE_SERVER_URL);
          console.log('resetting session locally.');
          setSessionActivity(newSession);
          await postActivitySessionToFB(updatedSession);
          setTimeuntilNextPush(TIME_BETWEEN_PUSHES);
        } else {
          if (timeUntilNextPush < 0) {
            console.log(
                'Post session, overriding a prior session in FB if it exists.');
            // Post session, overriding a prior session in FB if it exists.
            setTimeuntilNextPush(TIME_BETWEEN_PUSHES);
            await postActivitySessionToFB(updatedSession);
          } else {
            setTimeuntilNextPush(timeUntilNextPush - elapsedTime);
          }
          setSessionActivity(updatedSession);
        }
      }
    }, 500);

    return () => {
      clearInterval(interval);
    };
  });

  return (<></>);
};
export default SessionTracker;
