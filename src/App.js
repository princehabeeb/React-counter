// import React from 'react';
import {  Routes,  BrowserRouter, Route, NavLink } from 'react-router-dom';
import About from './Pages/About';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    {/* <NavLink to='/about'>About Us</NavLink> */}
    <Routes>
            <Route path='/about'  element={<About />} />
     </Routes>
    </BrowserRouter>
  )
}

export default App