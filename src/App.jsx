import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
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
    document.body.style.backgroundColor = darkMode ? "black" : "white";
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-all  ${darkMode ? "bg-black text-green-400" : "bg-white text-black"}`}>
      {showNavbar && (
        <Navbar
          toggleDarkMode={() => setDarkMode(!darkMode)}
          darkMode={darkMode}
          toggleNavbar={() => setShowNavbar(false)}
        />
      )}

      {!showNavbar && (
        <button
          onClick={() => setShowNavbar(true)}
          className="fixed top-4 left-4 p-3 bg-cyan-300 text-white rounded-md shadow-md hover:bg-cyan-400 transition z-50"
        >
          <RxHamburgerMenu size={28} />
        </button>
      )}

      <main className={`${showNavbar ? "pl-72" : "pl-0"} transition-all`}>
        <Home darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Contact />
      </main>

    </div>
  );
};

export default App;

















