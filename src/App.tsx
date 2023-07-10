/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
// banstest
import * as React from 'react';
import {useRecoilState, useRecoilValue} from 'recoil';
import {useIdleTimer} from 'react-idle-timer';
import {
  Routes, Route, useNavigate, useLocation,
} from 'react-router-dom';
import './App.css';
import {SessionActivityEvent, competedScenesState,
  currentPageState, currentSessionActivityState,
  newActivtySession,
  serverReadyState, useServerUrlState,
  userIsActiveState,
  userLevelState} from './state/recoil';
import Landing, {loadPageDataFromFB,
  loadUserLevel,
  loadVisitedScenesFromFB} from './components/landing/landing';
import Page from './components/page/Page';
import Main from './components/map/Main';
import Form from './components/create/Form';
import Profile from './components/profile/Profile';
import SignUp from './components/landing/signup';
import {useContext, useEffect} from 'react';
import {AuthContext} from './context/auth-context';
import RequireAuth from './components/require-auth';
import {wakeUpServer} from './state/handle-action';
import {FacilitatorPage} from './components/facilitator/Facilitator';
import {AnalyticsPage} from './components/analytics/Analytics';
import {REMOTE_SERVER_URL} from './utils/data-utils';
import {doc, setDoc} from 'firebase/firestore';
import {db} from './components/firebase/firebase-config';


const App = () => {
  // eslint-disable-next-line no-unused-vars
  const {currentUser} = useContext(AuthContext);
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const [visitedScenes, setVisitedScenes] = useRecoilState(competedScenesState);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const [userLevel, setUserLevel] = useRecoilState(userLevelState);
  // NOTE: console log for testing purposes
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const [serverIsReady, setServerIsReady] = useRecoilState(serverReadyState);
  const server = useRecoilValue(useServerUrlState);

  useEffect(() => {
    wakeUpServer(setServerIsReady, server);
    if (currentUser) {
      loadPageDataFromFB(currentUser?.email as string,
          setCurrentPage);
      loadUserLevel(currentUser?.email as string,
          setUserLevel);
      loadVisitedScenesFromFB(currentUser?.email as string,
          setVisitedScenes);
      navigate('/adventure');
    }
  }, [currentUser]);
  const [page, _setPage] = useRecoilState(currentPageState);
  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<SignUp />} />

      <Route path="/profile" element={<RequireAuth>
        <Profile />
      </RequireAuth>} />

      <Route path="/adventure" element={<RequireAuth>
        <Page pageData={page}/>
      </RequireAuth>} />

      <Route path="/facilitator" element={<RequireAuth>
        <FacilitatorPage/>
      </RequireAuth>} />

      <Route path="/analytics" element={<RequireAuth>
        <AnalyticsPage />
      </RequireAuth>} />

      <Route path="/map" element={<RequireAuth>
        <Main />
      </RequireAuth>} />

      <Route path="/form" element={<RequireAuth>
        <Form />
      </RequireAuth>} />

      <Route path="*" element={<FallBack />} />
    </Routes>
  );
};


const FallBack = () => {
  return <div>Not Found</div>;
};


export default App;
