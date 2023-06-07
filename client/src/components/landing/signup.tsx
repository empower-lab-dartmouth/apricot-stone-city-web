/* eslint-disable require-jsdoc */
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';


export default function SignUp() {
  const navigate = useNavigate();
  const [event, setEvent] = useState({
    username: '', email: '', password: ''});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> |
    React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setEvent({
      ...event,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async () => {
    // do firebase stuff to write
    console.log(event);
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className='login-container'>
      <div className="App-header">
        <div className='login-header-img'
          style={{marginTop: '-200px', marginBottom: '5px',
            height: '150px', width: '600px'}}
        />
        <button className='sign-up' onClick={handleBack}>
          Log In
        </button>
        <div className='card'>
          <form onSubmit={handleSubmit}
            className='group'
          >
            <div>
              <input placeholder='Username' type="text" name="username"
                onChange={handleChange}
                style={{backgroundColor: 'white', color: 'black'}}/>
            </div>

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
              <input id='signup'
                style={{backgroundColor: 'white', color: 'black'}}
                type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
