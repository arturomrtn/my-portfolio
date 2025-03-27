import React from "react";
import { navbarIcons } from "./../data/iconsData";

const Navbar = ({ toggleDarkMode, darkMode, toggleNavbar, isMobile }) => {
  const icons = navbarIcons.reduce((acc, icon) => {
    acc[icon.name] = icon;
    return acc;
  }, {});
  
  const { Sun: darkModeIcon, Moon: lightModeIcon, Cross: closeIcon } = icons;

  return (
    <nav
      className={`fixed left-0 top-0 h-full ${
        isMobile ? "w-full" : "w-72"
      } py-10 px-6 flex flex-col items-center space-y-12 transition-all ${
        darkMode ? "bg-black text-green-400" : "bg-white text-black"
      } z-50`}
    >
      <button
        onClick={toggleNavbar}
        className={`absolute top-4 left-4 p-3 transition ${closeIcon.color}`}
      >
        <closeIcon.Icon size={24} />
      </button>

      <h2 className="text-3xl mt-12">art.dev</h2>

      <button
        onClick={toggleDarkMode}
        className={`p-3 rounded-full transition duration-300 flex items-center justify-center hover:scale-110 ${
          darkMode ? darkModeIcon.color : lightModeIcon.color
        }`}
      >
        {darkMode ? <darkModeIcon.Icon size={24} /> : <lightModeIcon.Icon size={24} />}
      </button>

      <ul className="flex flex-col text-lg space-y-2">
        {["Home", "About", "Projects", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="hover:text-green-400 transition-all"
              onClick={toggleNavbar}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

