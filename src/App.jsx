import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  const getInitialTheme = () => {
    return localStorage.getItem('theme') === 'dark';
  };

  const [darkMode, setDarkMode] = useState(getInitialTheme);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };
  
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <div className='content'>
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
