import './App.css';

import React, { useState, useEffect, Fragment } from 'react'
import Rutas from './rutas';


import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    type:'light',
    primary: {
      main: '#212121'
    },
    secondary: {
      main: '#ffab40'
    },
    text: {
      secondary: 'rgba(255,255,255,0.54)',
    },
  },
});

function App() {

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Rutas />
      </ThemeProvider>
    </Fragment>

  );
}

export default App;
