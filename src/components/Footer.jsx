import React from "react";
import { socials } from "../data/iconsData";

const Footer = () => {
  return (
    <footer className="w-full py-10 text-center mt-10">
      <div className="flex justify-center space-x-6 mb-4">
        {socials.map(({ name, Icon, color, link }) => (
          <a
            key={name}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full shadow-md transform hover:scale-110 transition"
            style={{ backgroundColor: color }}
          >
            <Icon size={24}  className="text-white" />
          </a>
        ))}
      </div>
      <p className="text-sm">
        © 2025 Arturo Web Dev | Built with React & Tailwind
      </p>
    </footer>
  );
};

export default Footer;
