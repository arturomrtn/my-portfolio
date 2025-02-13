import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { GiHeraldicSun } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = ({ toggleDarkMode, darkMode, toggleNavbar }) => {
  const modeStyles = darkMode
    ? "bg-gradient-to-b from-[#4682B4] to-[#87CEEB] text-[#DAA520] shadow-[0_0_8px_#DAA520] hover:shadow-[0_0_15px_#DAA520]"
    : "bg-gradient-to-b from-black to-[#1E3A8A] text-[#F5DEB3] shadow-[0_0_12px_#F5DEB3] hover:shadow-[0_0_20px_#F5DEB3]";

  return (
    <nav className="fixed left-0 top-0 h-full w-72 py-10 px-6 flex flex-col items-center space-y-12 transition-all">

      <button 
        onClick={toggleNavbar}
        className="absolute top-4 left-4 p-3 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 transition"
      >
        <RxCross2 size={24} />
      </button>
      
      <h2 className="text-3xl font-thin mt-12">art.dev</h2>

      <button 
        onClick={toggleDarkMode}
        className={`p-3 rounded-full transition duration-300 flex items-center justify-center hover:scale-110 ${modeStyles}`}
      >
        {darkMode ? <GiHeraldicSun size={24} /> : <BsFillMoonStarsFill size={24} />}
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
};

export default Navbar;











