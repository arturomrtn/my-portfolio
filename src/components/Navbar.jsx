import React from "react";

const Navbar = ({ toggleDarkMode, darkMode, toggleNavbar }) => (
  <nav className={`fixed left-0 top-0 h-full w-72 py-10 px-6 flex flex-col items-center space-y-12 transition-all
    ${darkMode ? "bg-black text-green-400" : "bg-gray-100 text-black"}`}>
    <button 
      onClick={toggleNavbar}
      className="absolute top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 transition"
    >
      Hide Navbar
    </button>
    <h2 className="text-3xl font-thin mt-12">art.dev</h2>
    <button 
      onClick={toggleDarkMode}
      className="px-5 py-2 border border-green-400 rounded-md hover:bg-green-400 hover:text-black transition"
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
    <ul className="flex flex-col text-lg font-light tracking-wide space-y-2">
      {["Home", "About", "Projects", "Contact"].map((item) => (
        <li key={item}>
          <a href={`#${item.toLowerCase()}`} className="hover:text-green-400 transition">
            {item}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;






