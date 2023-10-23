import React from 'react'
import '../styles/Navbar.css';


var myName = 'Prince';
const Navbar = () => {
  return (
    <nav>
      <h1>{myName}</h1>
      <ul>
        <li><a href='#'>Home </a></li>
        <li><a href='#'>Home </a></li>
        <li><a href='#'>Home </a></li>
      </ul>
    </nav>
  )
}

export default Navbar