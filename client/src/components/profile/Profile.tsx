/* eslint-disable require-jsdoc */
import React, {useEffect, useState} from 'react';
import './profile.css';
import Nav from '../nav/NavBar';
import Challenges from './Challenges';
import Quests from './Quests';
import {useContext} from 'react';
import {AuthContext} from '../../context/auth-context';
import {Box, FormControlLabel, FormGroup, Modal,
  Stack, Switch, TextField, Typography} from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import {userLevelState} from '../../state/recoil';
import {useRecoilValue} from 'recoil';
import {PostToFacilitator, RequestType,
  UserPost,
  setFacilitatorRequestInFB} from '../facilitator/Facilitator';
import {collection, getDocs, query, where} from 'firebase/firestore';
import {db} from '../firebase/firebase-config';

const options: RequestType[] = ['Complete Level 1',
  'Complete Level 2', 'Complete Level 3',
  'Complete Level 4', 'Other', 'None'];

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function Profile() {
  const {currentUser, signOut} = useContext(AuthContext);
  const [submitRequestOpen, setSubmitRequestOpen] = useState<boolean>(false);
  const [userResponseMessage, setUserResponseMessage] = useState<string>('');
  const [open, setOpen] = React.useState(false);
  const [showHiddenPosts, setShowHiddenPosts] = useState(false);
  const [requests, setRequests] = useState<PostToFacilitator[]>([]);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const userLevel = useRecoilValue(userLevelState);
  const [selectedIndex, setSelectedIndex] = React.useState(userLevel);
  const q = query(collection(db, 'PostToFacilitator'),
      where('requestorUsername', '==', currentUser?.email as string));
  const loadDataFromFb = async () => {
    const querySnapshot = await getDocs(q);
    const docs = querySnapshot.docs
        .map((doc: any) => doc.data()) as any as PostToFacilitator[];
    setRequests(docs);
    loadDataFromFb();
  };
  useEffect(() => {
    loadDataFromFb();
  });

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (
      event: React.MouseEvent<HTMLLIElement, MouseEvent>,
      index: number,
  ) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  return (
    <div className='container'>
      <Nav/>
      <Modal
        open={submitRequestOpen}
        onClose={() => {
          setSubmitRequestOpen(false);
          setUserResponseMessage('');
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <div >
            <Box sx={style}>
              <Typography variant="h6" component="h2">
            Explain your request and provide supporting evidence:
              </Typography>
              <TextField onChange={(e) =>
                setUserResponseMessage(e.target.value)}
              multiline
              value={userResponseMessage}
              style={{width: '100%',
                paddingBottom: '10px', paddingTop: '10px'}}
              id="outlined-basic" variant="outlined" />
              <Typography variant="h6" component="h2">
            What action are you requesting?
              </Typography>
              <ButtonGroup variant="contained"
                ref={anchorRef} aria-label="split button">
                <Button onClick={handleClick}>{options[selectedIndex]}</Button>
                <Button
                  size="small"
                  aria-controls={open ? 'split-button-menu' : undefined}
                  aria-expanded={open ? 'true' : undefined}
                  aria-label="select merge strategy"
                  aria-haspopup="menu"
                  onClick={handleToggle}
                >
                  <ArrowDropDownIcon />
                </Button>
              </ButtonGroup>
              <Popper
                sx={{
                  zIndex: 1,
                }}
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
              >
                {({TransitionProps, placement}) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList id="split-button-menu" autoFocusItem>
                          {options.map((option, index) => (
                            <MenuItem
                              key={option}
                              disabled={userLevel > index}
                              selected={index === selectedIndex}
                              onClick={(event) =>
                                handleMenuItemClick(event, index)}
                            >
                              {option}
                            </MenuItem>
                          ))}
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
              <br />
              <Button sx={{marginTop: '5px'}}
                variant="contained"
                disabled={
                  userResponseMessage === ''
                }
                onClick={() => {
                  const r: PostToFacilitator = {
                    status: 'active',
                    title: 'Request',
                    hiddenForUser: true,
                    date: (new Date()).toString(), // also ID
                    message: userResponseMessage,
                    requestorUsername: currentUser?.email as string,
                    request: options[selectedIndex],
                  };
                  setFacilitatorRequestInFB(r);
                  // Update locally
                  setRequests([r, ...requests]);
                  setSubmitRequestOpen(false);
                  setUserResponseMessage('');
                }}>Submit</Button>
            </Box>
          </div>
        </div>
      </Modal>
      <div className='profile-content'>
        <div className='challenges-container'>
          <div className='full-opacity'>
            <h1 className='full-opacity'>Welcome, {currentUser?.email}</h1>
            <Button variant='contained' onClick={() =>
              setSubmitRequestOpen(true)}>
              Submit request to the platform facilitators</Button>
            <div className='controls' style={{backgroundColor: 'white'}}>
              <FormGroup>
                <FormControlLabel control={<Switch
                  checked={showHiddenPosts}
                  onChange={() => {
                    setShowHiddenPosts(!showHiddenPosts);
                  }} />}
                label="Show hidden requests" />
              </FormGroup>
            </div>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
              spacing={2}
            >
              {
                requests
                    .filter((r) =>
                      showHiddenPosts || r.hiddenForUser,
                    )
                    .sort((a, b) => (
                      new Date(a.date)).getMilliseconds() -
                (new Date(b.date)).getMilliseconds()).reverse()
                    .map((r) => {
                      const reply = () => {
                        // Update remotely
                        setFacilitatorRequestInFB({
                          ...r,
                          hiddenForUser: !r.hiddenForUser,
                        });
                        // Update locally
                        const newValues = requests.map((v) =>
                          (v.date === r.date ? {
                            ...r,
                            hiddenForUser: !r.hiddenForUser,
                          } : v));
                        setRequests(newValues);
                      };
                      const replyHeader = !r.hiddenForUser ? 'Unhide' : 'Hide';

                      return (
                        <UserPost status={r.status} title={r.title}
                          message={r.message}
                          replyHeader={replyHeader}
                          hiddenForUser={r.hiddenForUser}
                          requestorUsername={r.requestorUsername}
                          responderUsername={r.responderUsername}
                          date={r.date} request={r.request} key={r.date}
                          response={r.response}
                          reply={reply} />
                      );
                    })
              }
            </Stack>
            <Challenges />
            <Quests />
          </div>
        </div>
      </div>
      <button onClick={signOut} className='sign-out'>Sign Out</button>
    </div>

  );
}
