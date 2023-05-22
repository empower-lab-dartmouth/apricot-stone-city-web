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

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [page, _setPage] = useRecoilState(currentPageState);

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/:id/adventure" element={<Page pageData={page}/>} />
          <Route path="/:id/map" element={<Main />} />
          <Route path="/:id/form" element={<Form />} />
          <Route path="*" element={<FallBack />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
};


const FallBack = () => {
  return <div>Not Found</div>;
};


export default App;
