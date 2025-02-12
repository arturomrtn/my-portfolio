import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ProjectCard = ({ title, description, techStack, link, darkMode, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  const variants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 }, 
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 0.6, delay: index * 0.1 }
    },
  };

  return (
    <motion.div
      ref={ref}
      className={`p-6 rounded-2xl shadow-lg border font-thin transition-all
      ${darkMode ? "bg-gray-800 text-white border-green-400" : "bg-gray-100 text-black border-black"}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <h3 className="text-xl font-semibold text-green-400">{title}</h3>
      <p className="text-sm mt-2">{description}</p>

      <div className="flex flex-wrap gap-2 mt-3">
        {techStack.map((tech, idx) => (
          <span key={idx} className="text-xs border px-2 py-1 rounded border-green-400 text-green-400">
            {tech}
          </span>
        ))}
      </div>

      <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-sm text-green-400 hover:underline">
        View Project →
      </a>
    </motion.div>
  );
};

export default ProjectCard;




