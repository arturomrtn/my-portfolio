import React from "react";
import { motion } from "framer-motion";
import useTypingEffect from "../hooks/useTypingEffect";

const Home = () => {
  const typingText = useTypingEffect(
    [
      "I'm a Web Developer. Just starting with this! :) ",
      "Focussed on create new solutions based in JavaScript",
      "Let's create something big!",
    ],
    100,
    2000
  );

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center 
      px-6 py-16 bg-cover bg-center bg-no-repeat transition-all 
      bg-gray-100 dark:bg-gray-900"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/kandinskypainting.jpg')" }}
      />

      <div className="absolute inset-0 bg-black/50 dark:bg-black/60 pointer-events-none"></div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10"
      >

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-4 text-xl font-medium text-gray-300 dark:text-gray-400"
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
