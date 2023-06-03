/* eslint-disable require-jsdoc */
import React from 'react';
import {NavLink} from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/landing-page-asc-name.png';
import shieldIcon from '../../assets/navbar-challenges-icon.png';
import adventureIcon from '../../assets/navbar-adventure-icon.png';
import mapIcon from '../../assets/navbar-map-icon.png';
import AppBar from '@mui/material/AppBar';
import {Stack} from '@mui/material';

export default function Nav() {
  return (
    <AppBar component="nav">
      {/* <Toolbar> */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-end"
        spacing={2}
      >
        {/* <div className="navbar"> */}
        <img src={logo} style={{height: '100px'}}/>
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-end"
          spacing={2}
          sx={{paddingRight: '40px'}}
        >
          {/* <li> */}
          <NavLink to="/adventure" className="nav-item">
            <img src={adventureIcon} style={{height: '70px'}}/>
          </NavLink>
          {/* </li> */}
          {/* <li> */}
          <NavLink to="/map" className="nav-item">
            <img src={mapIcon} style={{height: '70px'}}/>
          </NavLink>
          {/* </li> */}
          {/* <li> */}
          <NavLink to="/profile" className="nav-item">
            <img src={shieldIcon} style={{height: '70px'}}/>
          </NavLink>
          {/* </li> */}
        </Stack>
      </Stack>
      {/* </Toolbar> */}
    </AppBar>
  );
}
