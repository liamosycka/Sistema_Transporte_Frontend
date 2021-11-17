import React from 'react';
import  Home  from './Pages/home';
import  About  from './Pages/about';
import  Calendar  from './Pages/calendar';
import AltaSolicitud from './Pages/altaSolicitud';
import AsocSolRemito from './Pages/asocSolRemito';
import AsocRemitosViaje from './Pages/asocRemitosViaje';
import CierreViaje from './Pages/cierreViaje';
import Test from './Pages/test';
import  NavBar  from './Components/NavBar';
import AppBar from './Components/AppBar';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

export const Rutas = () => {
    return (
        <Router>
            <AppBar />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/calendar' element={<Calendar />}></Route>
                <Route path='/test' element={<Test />}></Route>
                <Route path='/altaSolicitud' element={<AltaSolicitud />}></Route>
                <Route path='/asocSolRemito' element={<AsocSolRemito />}></Route>
                <Route path='/asocRemitosViaje' element={<AsocRemitosViaje />}></Route>
                <Route path='/cierreViaje' element={<CierreViaje />}></Route>
            </Routes>
        </Router>
    );
};

export default Rutas;