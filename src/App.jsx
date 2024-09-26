import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact'
import './App.css';

  const App = () => {

    const [darkMode, setDarkMode] = useState(false); // State to manage the theme
  
    const toggleDarkMode = () => {
      setDarkMode(!darkMode); // Toggle dark mode
    };
    
  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
      <div className='content'>
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;