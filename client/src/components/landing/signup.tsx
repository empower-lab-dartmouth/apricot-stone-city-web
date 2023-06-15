/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
import React, {useState} from 'react';
import {handleSignUp} from '../firebase/firebase';
import './modal.css';

export default function SignUp(props: any) {
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

    if (password === confirm) {
      handleSignUp(email, password);
    } else {
      console.log('passwords do not match');
    }
  };


  return (
    <div className="modal">
      <div className="card">
        <span className="close" onClick={closeModal}>back</span>
        <form onSubmit={handleSubmit}
          className='group'
        >
          <div>
            <input placeholder='Email' type="text" name="email"
              onChange={handleChange}
              style={{backgroundColor: 'white', color: 'black'}}/>
          </div>

          <div>
            <input placeholder='Password' type="text" name="password"
              onChange={handleChange}
              style={{backgroundColor: 'white', color: 'black'}}/>
          </div>

          <div>
            <input placeholder='Confirm Password' type="text" name="confirm"
              onChange={handleChange}
              style={{backgroundColor: 'white', color: 'black'}}/>
          </div>

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
