/* eslint-disable require-jsdoc */
import React, {useState} from 'react';
import './modal.css';

export default function SignUp(props: any) {
  const {
    closeModal,
  } = props;

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


  return (
    <div className="modal">
      <div className="card">
        <span className="close" onClick={closeModal}>back</span>
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
  );
}
