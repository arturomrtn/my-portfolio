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
            className="transition hover:opacity-70"
          >
            <Icon size={24} style={{ color }} />
          </a>
        ))}
      </div>
      <p className="text-sm">
        © 2024 Arturo Web Dev | Built with React & Tailwind
      </p>
    </footer>
  );
};

export default Footer;
