import React from "react";
import { motion } from "framer-motion";
import { HiDocumentDownload } from "react-icons/hi";
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
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-12 sm:px-6 sm:py-16 bg-cover bg-center font-light transition-all w-full overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('/images/${darkMode ? "kandinskydarkpainting.jpg" : "basqui.jpg"}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 flex flex-col items-center w-full max-w-2xl px-4"
      >
        <h1
          className={`text-3xl sm:text-5xl font-bold ${
            darkMode ? "text-green-400" : "text-black"
          }`}
        >
          Hi! I'm Arturo.
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className={`mt-4 text-base sm:text-lg font-medium leading-relaxed w-full ${
            darkMode ? "text-green-400" : "text-black"
          }`}
        >
          {typingText}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="text-green-400"
          >
            |
          </motion.span>
        </motion.p>

        <div className="mt-4 flex justify-center space-x-4 sm:space-x-6">
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
          <a
            href="images/ArturoCVVActual01.pdf"
            download
            className="bg-green-500 text-white p-3 rounded-full shadow-md hover:bg-green-400 transform hover:scale-110 transition"
          >
            <HiDocumentDownload size={28} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;










