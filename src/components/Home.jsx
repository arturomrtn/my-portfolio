import React from "react";
import { motion } from "framer-motion";
import useTypingEffect from "../hooks/useTypingEffect";

const Home = ({ darkMode }) => {
  const typingText = useTypingEffect(
    [
      "I'm a Web Developer. Just starting with this! :) ",
      "Focused on creating new solutions based on JavaScript.",
      "Let's create something big!",
    ],
    100,
    2000
  );

  return (
    <section
      id="home"
      className={`relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-16 bg-cover bg-center transition-all
      ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('/images/${darkMode ? "kandinskydarkpainting.jpg" : "kandinskybluepainting.jpg"}')`,
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10"
      >
        <h1 className={`text-5xl font-bold ${darkMode ? "text-green-400" : "text-black"}`}>
          Welcome to My Portfolio
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className={`mt-4 text-xl font-medium ${darkMode ? "text-green-400" : "text-black"}`}
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
      </motion.div>
    </section>
  );
};

export default Home;



