import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <section id="home">
          <h1>Welcome to My Portfolio</h1>
          <p>This is the home section.</p>
        </section>
        <section id="about">
          <h1>About Me</h1>
          <p>This is the about section.</p>
        </section>
        <section id="projects">
          <h1>My Projects</h1>
          <p>This is the projects section.</p>
        </section>
        <section id="contact">
          <h1>Contact Me</h1>
          <p>This is the contact section.</p>
        </section>
      </div>
    </div>
  );
}

export default App;