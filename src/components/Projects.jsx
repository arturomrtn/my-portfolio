import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import projects from "../data/projectsData";

const Projects = () => {
  return (
    <section id="projects"className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-4xl font-bold text-center !mb-10">My Projects</h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;



