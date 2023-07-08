/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
import React, {useState} from 'react';
import {handleSignUp} from '../firebase/firebase';
import './modal.css';
import {useRecoilValue} from 'recoil';
import {inputtedServerUrlState, useServerUrlState} from '../../state/recoil';

export default function SignUp(props: any) {
  const [appear, setAppear] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const serverURL = useRecoilValue(useServerUrlState);
  const inputtedServerURL = useRecoilValue(inputtedServerUrlState);

  const handleAppear = () => {
    setAppear(true);
  };

  const {
    closeModal,
  } = props;

  const [event, setEvent] = useState({
    email: '', password: '', confirm: ''});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> |
    React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setEvent({
      ...event,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;
    const confirm = event.target[2].value;
    const name = event.target[3].value;

    if (name === '') {
      console.log('must enter a name');
      setMessage('Must enter a name');
      handleAppear();
      return;
    } else {
      setMessage('');
      handleAppear();
    }

    if (password === confirm) {
      const res = await handleSignUp(email, password, name,
          serverURL, inputtedServerURL);
      if (typeof(res) === 'string') {
        setMessage(res);
        handleAppear();
      }
    } else {
      console.log('passwords do not match');
    }
  };


  return (
    <div className="modal">
      <div className="landing-card">
        <span className="close" onClick={closeModal}>back</span>
        <form onSubmit={handleSubmit}
          className='group'
          autoComplete='off'
        >
          <div>
            <input placeholder='Email' type="text" name="email"
              onChange={handleChange}
              style={{backgroundColor: 'white', color: 'black'}}
              autoComplete="off"/>
          </div>

          <div>
            <input placeholder='Password' type="password" name="password"
              onChange={handleChange}
              style={{backgroundColor: 'white', color: 'black'}}
              autoComplete="off"/>
          </div>

          <div>
            <input placeholder='Confirm Password' type="password" name="confirm"
              onChange={handleChange}
              style={{backgroundColor: 'white', color: 'black'}}/>
          </div>
          <div>
            <input placeholder='Name' type="text" name="name"
              onChange={handleChange}
              style={{backgroundColor: 'white', color: 'black'}}
              autoComplete="off"/>
          </div>

          {appear && (
            <span className='error-msg'>{message}</span>
          )}

          <div>
            <input id='signup'
              style={{backgroundColor: 'white', color: 'black'}}
              type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
