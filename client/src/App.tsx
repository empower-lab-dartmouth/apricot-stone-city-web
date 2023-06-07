/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
// banstest
import * as React from 'react';
import {useRecoilState} from 'recoil';
import {
  Routes, Route, useNavigate,
} from 'react-router-dom';
import './App.css';
import {currentPageState} from './state/recoil';
import Landing from './components/landing/landing';
import Page from './components/page/Page';
import Main from './components/map/Main';
import Form from './components/create/Form';
import Profile from './components/profile/Profile';
import SignUp from './components/landing/signup';
import {useContext, useEffect} from 'react';
import {AuthContext} from './context/auth-context';
import RequireAuth from './components/require-auth';

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const {currentUser} = useContext(AuthContext);
  const navigate = useNavigate();

  // NOTE: console log for testing purposes
  console.log('User:', !!currentUser);

  // Check if the current user exists on the initial render.
  useEffect(() => {
    if (currentUser) {
      navigate('/map');
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
