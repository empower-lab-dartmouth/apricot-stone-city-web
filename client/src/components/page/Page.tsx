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
import {currentPageState} from '../../state/recoil';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

type PageParams = {
  pageData: PageData
}

const Page: React.FC<PageParams> = ({pageData}) => {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
  const messagesEndRef = React.useRef(null);
  const scrollToBottom = () => {
    (messagesEndRef?.current as any).scrollIntoView({behavior: 'smooth'});
  };
  React.useEffect(scrollToBottom, [pageData.chatHistory]);

  return (
    <div>
      <Nav />
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
              <Chip label={cardOrOptionData.text} color="primary" />
            </Stack> :
            <Card cardData={cardOrOptionData} key={cardOrOptionData.id}/>)}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className='fixed'>
        <BottomNavigation showLabels>
          { pageData.options.map((optionData) =>
            <BottomNavigationAction label={optionData.text} onClick={() =>
              handleAction({
                ...optionData,
                type: 'option'}, currentPage, setCurrentPage)} />,
          )}
        </BottomNavigation>
      </div>
    </div>
  );
};

export default Page;
