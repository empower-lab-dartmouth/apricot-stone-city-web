/* eslint-disable require-jsdoc */

import React from 'react';
import {ChangeEvent, FormEvent, useState} from 'react';
import {signInUser} from '../firebase/firebase';
import {useNavigate} from 'react-router-dom';
import '../../App.css';
import './landing.css';

const defaultFormFields = {
  email: '',
  password: '',
};

function Home() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {email, password} = formFields;
  const navigate = useNavigate();

  const resetFormFields = () => {
    return (
      setFormFields(defaultFormFields)
    );
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      // Send the email and password to firebase
      const userCredential = await signInUser(email, password);

      if (userCredential) {
        resetFormFields();
        navigate('/profile');
      }
    } catch (error:any) {
      console.log('User Sign In Failed', error.message);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setFormFields({...formFields, [name]: value});
  };

  return (
    <div className='login-container'>
      <div className="App-header">
        <div className='login-header-img'
          style={{marginTop: '-200px', marginBottom: '5px',
            height: '150px', width: '600px'}}
        />
        <div className='card'>
          <form onSubmit={handleSubmit}
            className='group'
          >
            <div>
              <input
                style={{backgroundColor: 'white',
                  color: 'black'}}
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
            </div>
            <div>
              <input
                style={{backgroundColor: 'white',
                  color: 'black'}}
                type='password'
                name='password'
                value={password}
                onChange={handleChange}
                placeholder="Password"
                required
              />
            </div>
            <div>
              <input id='login'
                style={{backgroundColor: 'white', color: 'black'}}
                type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;


// import React from 'react';
// import './landing.css';

// /**
//  * Adds two numbers together.
//  * @return {React}
//  */
// export default function Landing() {
//   const handleSubmit = () => {

//   };
//   return (
//     <div className='page-container'>
//       <div className='login-container'>
//         <h1>Welcome!</h1>
//         <br />
//         <label htmlFor="username">
//         username:
//           <input id="username" type="text" />
//         </label>
//         <br />
//         <label htmlFor="password">
//         password:
//           <input id="password" type="text" />
//         </label>

//         <br />
//         <input id="submit" type="button" value="sign in"
//           onClick={handleSubmit} />

//       </div>

//     </div>
//   );
// }
