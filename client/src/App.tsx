
import * as React from 'react';
import {useRecoilState} from 'recoil';
// import {getData} from './utils/data-utils';
// import FormInput from './components/form-input/form-input';

import './App.css';
import Page from './components/page/Page';
import {currentPageState} from './state/recoil';

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [page, _setPage] = useRecoilState(currentPageState);

  // const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   try {
  //     // make the API call
  //     const res:User = await getData(
  //         'http://localhost:8000/respond', email, password,
  //     );
  //     setUser(res);
  //     resetFormFields();
  //   } catch (error) {
  //     alert('User Sign In Failed');
  //   }
  // };

  // const reload = () => {
  //   setUser(null);
  //   resetFormFields();
  // };

  return (
    <Page pageData={page}></Page>
  );
};

export default App;
