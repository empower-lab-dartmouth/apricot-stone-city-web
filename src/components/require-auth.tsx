/* eslint-disable require-jsdoc */
import React from 'react';
import {useContext} from 'react';
import {AuthContext} from '../context/auth-context';
import {Navigate, useLocation} from 'react-router-dom';
import {loadLastUserServerValues} from './landing/landing';
import {firstTimePullingServerState,
  inputtedServerUrlState, useServerUrlState} from '../state/recoil';
import {useRecoilState} from 'recoil';

function RequireAuth({children}: { children:JSX.Element }) {
  const {currentUser} = useContext(AuthContext);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const [useServer, setServer] = useRecoilState(useServerUrlState);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const [useInputtedServer,
    setInputtedServer] = useRecoilState(inputtedServerUrlState);
  const [firstTimePullingServer,
    setFirstTimePullingServer] = useRecoilState(firstTimePullingServerState);
  const location = useLocation();

  if (!currentUser) {
    // Redirect the user to the home page.
    // Please! Close the mustache {{}}
    return <Navigate to="/" state={ {from: location} } replace />;
  } else {
    if (currentUser.email !== null && firstTimePullingServer) {
      console.log('pulling info from remote');
      setFirstTimePullingServer(false);
      loadLastUserServerValues(currentUser.email,
          setInputtedServer, setServer);
    }
  }

  return children;
}

export default RequireAuth;
