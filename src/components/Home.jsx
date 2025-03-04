import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiDocumentDownload } from "react-icons/hi";
import useTypingEffect from "../hooks/useTypingEffect";

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
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-16 bg-cover bg-center font-light transition-all"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
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
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 flex flex-col items-center"
      >
        <h1
          className={`text-6xl font-bold ${
            darkMode ? "text-green-400" : "text-black"
          }`}
        >
          Hi! I'm Arturo.
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className={`mt-4 text-xl font-medium min-h-[80px] ${
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

        <div className="mt-4 flex justify-center space-x-6">
          <a
            href="https://linkedin.com/in/arturomrtn/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white p-3 rounded-full shadow-md hover:bg-blue-500 transform hover:scale-110 transition"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="https://github.com/arturomrtn"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 transform hover:scale-110 transition"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="images/ArturoCVVActual01.pdf"
            download
            className="bg-green-500 text-white p-3 rounded-full shadow-md hover:bg-green-400 transform hover:scale-110 transition"
          >
            <HiDocumentDownload size={32} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;







