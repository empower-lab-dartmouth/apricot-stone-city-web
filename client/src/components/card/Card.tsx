import * as React from 'react';
import {CardData} from './card-model';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typewriter from 'typewriter-effect';


// const TextCard: React.FC<TextCardData> = ({text}) => (
//   <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
//     {text}
//   </Typography>
// );

type CardDataParams = {
  cardData: CardData
}

const CardFC: React.FC<CardDataParams> = ({cardData}) => (
  <>
    <Box sx={{minWidth: 275}}>
      <Card variant="outlined">
        <CardContent>
          <Typewriter
            options={{
              cursor: '',
              strings: cardData.type === 'image' ? cardData.src : cardData.text,
              autoStart: true,
              loop: false,
            }}
          />
        </CardContent>
      </Card>
    </Box>
  </>
);

export default CardFC;
