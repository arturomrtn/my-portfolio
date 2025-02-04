import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowBackground(true), 300);
  }, []);

  return (
    <section 
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center 
  px-6 py-16 bg-cover bg-center bg-no-repeat transition-all
  bg-gray-100 dark:bg-gray-900"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showBackground ? 1 : 0 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/kandinskypainting.jpg')" }}
      ></motion.div>

      <div className="absolute inset-0 bg-black/50 dark:bg-black/60 pointer-events-none"></div>
      <motion.div

        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10"
      >
        <h1 className="text-5xl font-bold text-white">
          Welcome to My Portfolio
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-4 text-xl text-gray-300"
        >
          I'm a passionate developer building amazing projects.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Home;
