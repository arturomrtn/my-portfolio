import React from 'react';
import './Navbar.css';

const Navbar = ({ toggleDarkMode, darkMode }) => {
  return (
    <div className="navbar">
      <h2>My portfolio</h2>
      <button onClick={toggleDarkMode}>
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      <ul className='navbar-list'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  );
};

export default Navbar;