/* eslint-disable react/jsx-no-target-blank */
import * as React from 'react';
import {CardData} from './card-model';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typewriter from 'typewriter-effect';
import {typewriterEffectState} from '../../state/recoil';
import {useRecoilValue} from 'recoil';
import Typography from '@mui/material/Typography';
import isUrl from 'is-url';


// const TextCard: React.FC<TextCardData> = ({text}) => (
//   <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
//     {text}
//   </Typography>
// );

type CardDataParams = {
  cardData: CardData
}

const CardFC: React.FC<CardDataParams> = ({cardData}) => {
  const typewriterEffectOn = useRecoilValue(
      typewriterEffectState);

  return (
    <>
      <Box sx={{width: '50%', marginBottom: '3px'}}>
        {cardData.type === 'image' ?
      <div style={{
        backgroundColor: 'white',
        borderRadius: '100px',
        padding: '20px'}}>
        <img
          className='center'
          src={`${cardData.src}?w=164&h=164&fit=crop&auto=format`}
          srcSet={`${cardData.src}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
          alt={cardData.id}
          loading="lazy"
        />
      </div> :
      <Card variant="outlined" sx={{backgroundColor: 'rgba(1,0,0,. 5)'}}>
        <CardContent>
          { typewriterEffectOn ?
          <Typewriter
            options={{
              cursor: '',
              delay: 1,
              strings: cardData.text,
              autoStart: true,
              loop: false,
            }}
          /> :
          <>
            {
              isUrl(cardData.text) ?
              <a href={cardData.text} target="_blank">
                <Typography sx={{fontSize: 16}} color="black" gutterBottom>
                  {cardData.text}
                </Typography>
              </a> :
          <Typography sx={{fontSize: 16}} color="black" gutterBottom>
            {cardData.text}
          </Typography>
            }
          </>
          }
        </CardContent>
      </Card>}
      </Box>
    </>
  );
};

export default CardFC;
