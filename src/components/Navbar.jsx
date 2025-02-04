import React from "react";

const Navbar = ({ toggleDarkMode, darkMode }) => {
  return (
    <nav className={`fixed left-0 top-0 h-full w-72 py-10 px-6 flex flex-col items-center space-y-12 
      transition-all duration-300 ${darkMode ? "bg-black text-green-400" : "bg-gray-100 text-black"}`}>
      
      <h2 className="text-3xl font-thin !m-4">My Portfolio</h2>

      <button onClick={toggleDarkMode} 
        className="px-5 py-2 border border-green-400 !mb-50 rounded-md
          hover:bg-green-400 hover:text-black transition">
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <ul className="flex flex-col justify-between text-lg font-light tracking-wide">
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
};

export default Navbar;

