/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import * as React from 'react';
import {useRecoilState} from 'recoil';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import './App.css';
import {currentPageState} from './state/recoil';
import Landing from './components/landing/landing';
import Page from './components/page/Page';
import Main from './components/map/Main';
import Form from './components/create/Form';
import Profile from './components/profile/Profile';

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [page, _setPage] = useRecoilState(currentPageState);

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/:id/adventure" element={<Page pageData={page}/>} />
      <Route path="/:id/map" element={<Main />} />
      <Route path="/:id/profile" element={<Profile />} />
      <Route path="/:id/form" element={<Form />} />
      <Route path="*" element={<FallBack />} />
    </Routes>
  );
};


const FallBack = () => {
  return <div>Not Found</div>;
};


export default App;
