import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, techStack, link }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="p-6 rounded-2xl shadow-lg border font-thin border-green-400 transition-all 
      bg-gray-100 text-black dark:bg-gray-800 dark:text-white"
    >
      <h3 className="text-xl font-semibold text-green-400">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{description}</p>

      <div className="flex flex-wrap gap-2 mt-3">
        {techStack.map((tech, index) => (
          <span key={index} className="text-xs text-green-400 border border-green-400 px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 text-sm text-green-400 hover:underline"
      >
        View Project →
      </a>
    </motion.div>
  );
};

export default ProjectCard;


