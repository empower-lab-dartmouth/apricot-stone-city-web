/* eslint-disable require-jsdoc */
import React from 'react';
import {NavLink} from 'react-router-dom';
import './navbar.css';

export default function Nav() {
  return (
    <div className="navbar">
      <h1 className='title'>Apricot Stone City</h1>
      <div className="inner-navbar">
        <li>
          <NavLink to="/map" className="nav-item">Map</NavLink>
        </li>
        <li>
          <NavLink to="/adventure" className="nav-item">Adventure</NavLink>
        </li>
        <li>
          <NavLink to="/profile" className="nav-item">Profile</NavLink>
        </li>
      </div>
    </div>
  );
}
