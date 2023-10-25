import React from 'react';
import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css';
import Logo from '../Images/logo.png';


var myName = 'Prince';
const Navbar = () => {
  return (
    <nav>
     <img src={Logo} />

     <NavLink to='/'>Home</NavLink>
     <NavLink to='/about'>About</NavLink>
     <NavLink to='/contact'>Contact Us</NavLink>
    </nav>
  )
}

export default Navbar