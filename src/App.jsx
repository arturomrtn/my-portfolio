import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-all ${darkMode ? "bg-black text-green-400" : "bg-gray-100 text-black"}`}>
      {showNavbar && <Navbar toggleDarkMode={() => setDarkMode(!darkMode)} darkMode={darkMode} toggleNavbar={() => setShowNavbar(false)} />}
      {!showNavbar && (
        <button
          onClick={() => setShowNavbar(true)}
          className="fixed top-4 left-4 px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-400 transition z-50"
        >
          Show Navbar
        </button>
      )}
      <main className={`${showNavbar ? "pl-72" : "pl-0"} transition-all`}>
        <Home darkMode={darkMode} />
        <About darkMode={darkMode}/>
        <Projects darkMode={darkMode}/>
        <Contact />
      </main>
    </div>
  );
};

export default App;






