import React from 'react';
import './analytics.css';
import Nav from '../nav/NavBar';
import {Box, Paper, ThemeProvider, createTheme, styled} from '@mui/material';

const lightTheme = createTheme({palette: {mode: 'light'}});
const Item = styled(Paper)(({theme}) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
}));

const UserEvent = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box
        sx={{
          p: 2,
          bgcolor: 'background.default',
          display: 'grid',
          gridTemplateColumns: {md: '1fr 1fr'},
          gap: 2,
        }}
      >
        {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((elevation) => (
          <Item key={elevation} elevation={elevation}>
            {`elevation=${elevation}`}
          </Item>
        ))}
      </Box>
    </ThemeProvider>
  );
};


export const AnalyticsPage: React.FC = () => {
  return (
    <>
      <Nav />
      <div className="page-container1">
        <div className="scrollable-container" >
          <div style={{marginTop: '30px'}}>
            <UserEvent />
          </div>
        </div>
      </div>
    </>
  );
};
