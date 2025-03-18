import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );
  const [showNavbar, setShowNavbar] = useState(window.innerWidth >= 1024);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    document.body.style.backgroundColor = darkMode ? "black" : "white";
  }, [darkMode]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      setShowNavbar(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);
  const toggleNavbar = () => setShowNavbar(false);

  return (
    <div
      className={`min-h-screen transition-all ${
        darkMode ? "bg-black text-green-400" : "bg-white text-black"
      }`}
    >
      {showNavbar ? (
        <Navbar
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
          toggleNavbar={toggleNavbar}
          isMobile={isMobile}
        />
      ) : (
        <button
          onClick={() => setShowNavbar(true)}
          className="fixed top-4 left-4 p-3 bg-cyan-300 text-white rounded-md shadow-md hover:bg-cyan-400 transition z-50"
        >
          <RxHamburgerMenu size={28} />
        </button>
      )}
      <main
        className={`${
          showNavbar && !isMobile ? "pl-72" : "pl-0"
        } transition-all`}
      >
        <Home darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;

