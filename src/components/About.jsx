import React, { useState } from "react";
import { motion } from "framer-motion";
import useTypingEffect from "../hooks/useTypingEffect";
import technologies from "../data/technologiesData";
import languages from "../data/languagesData";

const About = ({ darkMode }) => {
  const typingText = useTypingEffect(
    [
      "💻 I specialize in Frontend Development with React & JavaScript.",
      "🚀 I love building interactive and responsive web applications.",
      "🎨 Passionate about UI/UX design and animations.",
      "📚 Constantly learning and improving my coding skills!",
    ],
    100,
    2500
  );

  const [hoveredLanguage, setHoveredLanguage] = useState(null);
  const baseClassP = "mt-4 text-lg font-normal max-w-md";

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center text-center px-6 text-xl font-medium font-bold transition-all mt-6"
    >
      <motion.div
        className="flex flex-col items-center text-left mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src="images/mypic.jpg"
          alt="Arturo image"
          className={`w-40 h-40 object-cover object-top mb-6 rounded-full shadow-lg ${darkMode ? "border-green-400" : "border-black"}`}
        />
        <p className={baseClassP}>
          Hi, I'm <span className="font-bold">Arturo</span>, a passionate front-end developer who loves crafting interactive web experiences.
        </p>
        <p className={baseClassP}>
          I completed a Web Development Bootcamp in 2021, where I built full-stack applications and gained hands-on experience with the latest frameworks. Since then, I've continued learning, participating on freelance projects, and developing personal applications to improve my skills.
        </p>
        <p className={baseClassP}>
          In 2022, I embarked on a Working Holiday in Australia for almost two years, an experience that helped me grow both personally and professionally. I developed strong problem-solving, adaptability and communication.
        </p>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {typingText}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 1 }}>
          |
        </motion.span>
      </motion.p>
      <motion.div
        className="mt-8 flex flex-wrap justify-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        {technologies.map(({ Icon, color }, index) => (
          <motion.div
            key={index}
            className="text-5xl shadow-md"
            whileHover={{ scale: 1.2 }}>
            <Icon style={{ color }} />
          </motion.div>
        ))}
      </motion.div>
      <motion.div className="mt-12">
        <h2 className={`${darkMode ? "text-green-400" : "text-black"}`}>🌍 Languages 🌍</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {languages.map((lang, index) => (
            <div
              key={index}
              className={`relative px-6 py-3 rounded-lg cursor-pointer transition-all
              ${darkMode ? "bg-gray-800 text-green-400" : "bg-gray-200 text-black"}`}
              onMouseEnter={() => setHoveredLanguage(lang)}
              onMouseLeave={() => setHoveredLanguage(null)}
            >
              {lang.name}
              {hoveredLanguage === lang && (
                <motion.div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 rounded-lg shadow-lg text-center p-3 transition-all
                  ${darkMode ? "bg-gray-100 text-black" : "bg-gray-900 text-white"}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-sm">{lang.level}</p>
                  <p className="text-sm italic">{lang.description}</p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;








