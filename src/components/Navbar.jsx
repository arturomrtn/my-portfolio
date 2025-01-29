import React from "react";

const Navbar = ({ toggleDarkMode, darkMode }) => {
  return (
    <nav className="fixed top-0 left-0 h-full w-60 bg-blue-600 text-white p-5 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-6">My Portfolio</h2>
      <button
        onClick={toggleDarkMode}
        className="mb-4 px-4 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 transition"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <ul className="w-full text-center space-y-4">
        <li>
          <a href="#home" className="block py-2 text-lg hover:text-yellow-300 transition">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="block py-2 text-lg hover:text-yellow-300 transition">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="block py-2 text-lg hover:text-yellow-300 transition">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="block py-2 text-lg hover:text-yellow-300 transition">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
