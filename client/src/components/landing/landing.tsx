import React from 'react';
import './landing.css';

/**
 * Adds two numbers together.
 * @return {React}
 */
export default function Landing() {
  const handleSubmit = () => {

  };
  return (
    <div className='page-container'>
      <div className='login-container'>
        <h1>Welcome!</h1>
        <br />
        <label htmlFor="username">
        username:
          <input id="username" type="text" />
        </label>
        <br />
        <label htmlFor="password">
        password:
          <input id="password" type="text" />
        </label>

        <br />
        <input id="submit" type="button" value="sign in"
          onClick={handleSubmit} />

      </div>

    </div>
  );
}
