/* eslint-disable react/jsx-key */
import * as React from 'react';
import Card from '../card/Card';
import {handleAction} from '../../state/handle-action';
import {PageData} from './page-model';
import './page.css';
import Nav from '../nav/NavBar';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {useRecoilState} from 'recoil';
import {currentPageState, typewriterEffectState} from '../../state/recoil';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Modal from '@mui/material/Modal';
import {Box, Button, FormControlLabel,
  FormGroup, Switch, TextField, Typography} from '@mui/material';
// import optionsBackgroundImg from '../../assets/golden-paper-tex.jpeg';

// const radialGradient =
// eslint-disable-next-line max-len
// `background: rgb(4,0,79); background: linear-gradient(90deg, rgba(4,0,79,1) 0%, rgba(255,255,255,1) 8%, rgba(255,184,0,1) 17%, rgba(242,175,0,1) 85%, rgba(255,255,255,1) 95%, rgba(4,0,79,1) 100%);`;

type PageParams = {
  pageData: PageData
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Page: React.FC<PageParams> = ({pageData}) => {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
  const [typewriterEffectOn, setTypewriterEffectOn] = useRecoilState(
      typewriterEffectState);
  const messagesEndRef = React.useRef(null);
  const scrollToBottom = () => {
    (messagesEndRef?.current as any).scrollIntoView({behavior: 'smooth'});
  };
  React.useEffect(scrollToBottom, [pageData.chatHistory]);
  const [freeResponseModalOpen,
    setFreeResponseModalOpen] = React.useState(false);
  const [inputtedFreeResponseText,
    setInputtedFreeResponseText] = React.useState<string>('');
  const handleOpenFreeResponse = () => setFreeResponseModalOpen(true);
  const handleCloseFreeResponse = () => {
    setFreeResponseModalOpen(false);
    setInputtedFreeResponseText('');
  };

  const handleInputTextChange = (e: React.ChangeEvent<HTMLInputElement> |
    React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputtedFreeResponseText(e.target.value);
  };


  return (
    <div>
      <Nav />
      <Modal
        open={freeResponseModalOpen}
        onClose={handleCloseFreeResponse}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Enter text below:
          </Typography>
          <TextField onChange={handleInputTextChange}
            style={{width: '100%',
              paddingBottom: '10px', paddingTop: '10px'}}
            id="outlined-basic" variant="outlined" />
          <Button variant="contained" onClick={() => {
            handleAction({
              action: {
                type: 'click-option',
                option: inputtedFreeResponseText,
              },
              id: 'free-response',
              text: inputtedFreeResponseText,
              type: 'option'}, currentPage, setCurrentPage);
            setInputtedFreeResponseText('');
          }}>Submit</Button>
        </Box>
      </Modal>
      <div className="page-container">
        <div className="page scrollable-container" >
          { pageData.chatHistory.map((cardOrOptionData) =>
            cardOrOptionData.type === 'option' ?
            <Stack
              direction="row-reverse"
              justifyContent="flex-start"
              alignItems="center"
              spacing={2}
            >
              <Chip label={cardOrOptionData.text} sx={{
                'height': 'auto',
                '& .MuiChip-label': {
                  display: 'block',
                  borderRadius: '25px',
                  padding: '20px',
                  whiteSpace: 'normal',
                  backgroundColor: '#ffb800',
                  color: 'black',
                },
              }}
              />
            </Stack> :
            <Card cardData={cardOrOptionData} key={cardOrOptionData.id}/>)}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className='fixed'>
        <FormGroup>
          <FormControlLabel control={<Switch
            checked={typewriterEffectOn}
            onChange={() => setTypewriterEffectOn(!typewriterEffectOn)} />}
          label="Typewriter effect" />
        </FormGroup>
        <BottomNavigation showLabels sx={{
          backgroundColor: 'white',
        }}>
          { pageData.options.map((optionData) =>
            <BottomNavigationAction key={optionData.id}
              label={optionData.text} onClick={() => {
                if (optionData.action.type === 'free-response') {
                  handleOpenFreeResponse();
                } else {
                  handleAction({
                    ...optionData,
                    type: 'option'}, currentPage, setCurrentPage);
                }
              }} />,
          )}
        </BottomNavigation>
      </div>
    </div>
  );
};

export default Page;
