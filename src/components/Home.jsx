import React from "react";
import { motion } from "framer-motion";
import useTypingEffect from "../hooks/useTypingEffect";
import { socials } from "../data/iconsData";

const Home = ({ darkMode }) => {
  const typingText = useTypingEffect(
    [
      "Focused on creating UI based on JavaScript and React.",
      "Let's build something big!",
    ],
    100,
    2000
  );

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-16 bg-cover bg-center font-light transition-all w-full overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('/images/${
            darkMode ? "kandinskydarkpainting.jpg" : "basqui.jpg"
          }')`,
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-2xl px-4"
      >
        <h1
          className="text-4xl sm:text-5xl font-bold"
        >
          Hi! I'm Arturo.
        </h1>
        <p
          className="mt-4 text-lg sm:text-xl font-medium leading-relaxed"
            
        >
          {typingText}
        </p>
        <div className="mt-6 flex justify-center space-x-5">
          {socials.map(({ name, Icon, color, link }) => (
            <a
              key={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full shadow-md transform hover:scale-110 transition"
              style={{ backgroundColor: color }}
            >
              <Icon size={28} className="text-white" />
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Home;





