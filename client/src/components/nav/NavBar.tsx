/* eslint-disable require-jsdoc */
import React from 'react';
import {NavLink} from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/landing-page-asc-name.png';
import shieldIcon from '../../assets/navbar-challenges-icon.png';
import lockedIcon from '../../assets/lock-icon.png';
import eyeIcon from '../../assets/eye-icon.png';
import adventureIcon from '../../assets/navbar-adventure-icon.png';
import mapIcon from '../../assets/navbar-map-icon.png';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import PopupState, {bindTrigger, bindPopover} from 'material-ui-popup-state';
import Stack from '@mui/material/Stack';
import {useRecoilValue} from 'recoil';
import {competedChallengesState} from '../../state/recoil';

export default function Nav() {
  const completedChallenges = useRecoilValue(competedChallengesState);
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

          <NavLink to="/adventure" className="nav-item">
            <Stack direction="column" justifyContent="flex-start"
              alignItems="center">
              <img src={adventureIcon} style={{height: '70px'}}/>
            Aventure
            </Stack>
          </NavLink>
          <NavLink to="/map" className="nav-item">
            <Stack direction="column" justifyContent="flex-start"
              alignItems="center">
              <img src={mapIcon} style={{height: '70px'}}/>
            Map
            </Stack>
          </NavLink>

          <NavLink to="/profile" className="nav-item">
            <Stack direction="column" justifyContent="flex-start"
              alignItems="center">
              <img src={shieldIcon} style={{width: '62px'}}/>
            Challenges
            </Stack>
          </NavLink>

          {
          completedChallenges.challenge_1 === undefined ?
          <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState: any) => (
              <div>
                {/* <Button variant="contained" > */}
                <Stack direction="column" justifyContent="flex-start"
                  alignItems="center" {...bindTrigger(popupState)}>
                  <img src={lockedIcon} style={{width: '62px'}}/>
            Analytics
                </Stack>
                {/* </Button> */}
                <Popover
                  {...bindPopover(popupState)}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                >
                  <Typography sx={{p: 2}}>
                    You must complete challenge 1
                     to unlock this tool.</Typography>
                </Popover>
              </div>
            )}
          </PopupState> :
          <NavLink to="/profile" className="nav-item">
            <Stack direction="column" justifyContent="flex-start"
              alignItems="center">
              <img src={eyeIcon} style={{width: '62px'}}/>
            Analytics
            </Stack>
          </NavLink>
          }

          {
          completedChallenges.challenge_4 === undefined ?
          <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState: any) => (
              <div>
                {/* <Button variant="contained" > */}
                <Stack direction="column" justifyContent="flex-start"
                  alignItems="center" {...bindTrigger(popupState)}>
                  <img src={lockedIcon} style={{width: '62px'}}/>
            Facilitator
                </Stack>
                {/* </Button> */}
                <Popover
                  {...bindPopover(popupState)}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                >
                  <Typography sx={{p: 2}}>
                    You must complete challenge 4
                     to unlock this tool.</Typography>
                </Popover>
              </div>
            )}
          </PopupState> :
          <NavLink to="/profile" className="nav-item">
            <Stack direction="column" justifyContent="flex-start"
              alignItems="center">
              <img src={eyeIcon} style={{width: '62px'}}/>
            Facilitator
            </Stack>
          </NavLink>
          }


        </Stack>
      </Stack>
    </AppBar>
  );
}
