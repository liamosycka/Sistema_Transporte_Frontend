import React from 'react';
import  Home  from './Pages/home';
import  About  from './Pages/about';
import  Calendar  from './Pages/calendar';
import Test from './Pages/test';
import  NavBar  from './Components/NavBar';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

export const Rutas = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/calendar' element={<Calendar />}></Route>
                <Route path='/test' element={<Test />}></Route>
            </Routes>
        </Router>
    );
};

export default Rutas;