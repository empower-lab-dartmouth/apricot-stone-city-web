/* eslint-disable require-jsdoc */
import React from 'react';
import {NavLink} from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/landing-page-asc-name.png';
import shieldIcon from '../../assets/completed-challenge-icon.png';
import lockedIcon from '../../assets/lock-icon.png';
import eyeIcon from '../../assets/eye-icon.png';
import facilitatorIcon from '../../assets/settings-icon.png';
import adventureIcon from '../../assets/navbar-adventure-icon.png';
import mapIcon from '../../assets/navbar-map-icon.png';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import PopupState, {bindTrigger, bindPopover} from 'material-ui-popup-state';
import Stack from '@mui/material/Stack';
import {useRecoilValue} from 'recoil';
import {useServerUrlState, userLevelState} from '../../state/recoil';
import {REMOTE_SERVER_URL} from '../../utils/data-utils';
import SessionTracker from '../../Tracker';

export default function Nav() {
  const completedChallenges = useRecoilValue(userLevelState);
  const server = useRecoilValue(useServerUrlState);
  return (
    <AppBar component="nav">
      <SessionTracker />
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
          {
            server !== REMOTE_SERVER_URL ?
            <Stack direction="column">
              <p style={{height: '1px', color: 'white'}}><strong>
              Using local server:</strong></p>
              <p style={{color: 'white', height: '1px',
                paddingBottom: '5px'}}><strong>
                  {server}</strong></p>
            </Stack> :
          <></> }
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
            Progress
            </Stack>
          </NavLink>

          {
          completedChallenges < 1 ?
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
                    You must complete level 1
                     to unlock this tool.</Typography>
                </Popover>
              </div>
            )}
          </PopupState> :
          <NavLink to="/analytics" className="nav-item">
            <Stack direction="column" justifyContent="flex-start"
              alignItems="center">
              <img src={eyeIcon} style={{width: '62px'}}/>
            Analytics
            </Stack>
          </NavLink>
          }

          {
          completedChallenges < 4 ?
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
                    You must complete level 4
                     to unlock this tool.</Typography>
                </Popover>
              </div>
            )}
          </PopupState> :
          <NavLink to="/facilitator" className="nav-item">
            <Stack direction="column" justifyContent="flex-start"
              alignItems="center">
              <img src={facilitatorIcon} style={{width: '62px'}}/>
            Facilitator
            </Stack>
          </NavLink>
          }


        </Stack>
      </Stack>
    </AppBar>
  );
}
