import React, { useState } from "react";
import { motion } from "framer-motion";
import useTypingEffect from "../hooks/useTypingEffect";
import { technologies } from "../data/iconsData";
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

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center text-center px-6 py-6 text-lg transition-all"
    >
      <div className="flex flex-col items-center text-left mb-10">
        <img
          src="images/mypic.jpg"
          alt="Arturo image"
          className={`w-40 h-40 object-cover object-top mb-6 rounded-full shadow-lg ${
            darkMode ? "border-green-400" : "border-black"
          }`}
        />
        <div className="max-w-md space-y-4">
          <p>
            Hi, I'm <span className="font-bold">Arturo</span>, a passionate
            front-end developer who loves crafting interactive web experiences.
          </p>
          <p>
            I completed a Web Development Bootcamp in 2021, where I built
            full-stack applications and gained hands-on experience with the
            latest frameworks. Since then, I've continued learning, freelancing,
            and developing personal projects.
          </p>
          <p>
            In 2022, I embarked on a Working Holiday in Australia for almost two
            years, an experience that helped me grow personally and
            professionally. I developed strong problem-solving, adaptability,
            and communication.
          </p>
        </div>
      </div>
      <p className="mt-6 max-w-lg text-xl">{typingText}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-6">
        {technologies.map(({ Icon, color }, index) => (
          <motion.div
            key={index}
            className="text-5xl shadow-md cursor-pointer"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Icon style={{ color }} />
          </motion.div>
        ))}
      </div>
      <div className="mt-12">
        <h2 className="text-xl">🌍 Languages 🌍</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {languages.map((lang, index) => (
            <div
              key={index}
              className={`relative px-6 py-3 rounded-lg cursor-pointer transition-all ${
                darkMode
                  ? "bg-gray-800 text-green-400"
                  : "bg-gray-200 text-black"
              }`}
              onMouseEnter={() => setHoveredLanguage(lang)}
              onMouseLeave={() => setHoveredLanguage(null)}
            >
              {lang.name}
              {hoveredLanguage === lang && (
                <motion.div
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 rounded-lg shadow-lg p-3 transition-all ${
                    darkMode
                      ? "bg-gray-100 text-black"
                      : "bg-gray-900 text-white"
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-sm underline">{lang.level}</p>
                  <p className="text-sm italic">{lang.description}</p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
