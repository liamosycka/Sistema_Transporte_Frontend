import './App.css';

import Home from './Pages/home';
import About from './Pages/about';
import Calendar from './Pages/calendar';
import React, { useState, useEffect, Fragment } from 'react'
import { Button, Form } from 'react-bootstrap'
import { getSolicitud, getLocalidades } from './Services/Solicitud'
import 'bootstrap/dist/css/bootstrap.min.css';
//Importar Componentes
import MostrarLocalidades from './Components/MostrarLocalidades';
import NavBar from './Components/NavBar';
import Rutas from './rutas';
//Fin Componentes
import { createTheme, ThemeProvider } from '@mui/material/styles';
import purple from '@mui/material/colors/purple';

const theme = createTheme({
  palette: {
    type:'light',
    primary: {
      main: '#212121'
    },
    secondary: {
      main: '#ffab00'
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
