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

function App() {
  
  return (
      <Rutas/>

  );
}

export default App;
