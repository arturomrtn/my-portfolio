import React from "react";
import ProjectCard from "./ProjectCard";
import  projects from "../data/projectsData";

const Projects = ({ darkMode }) => {
  return (
    <section id="projects" className="py-20 px-6 text-center">
      <h1 className="text-3xl mb-12 max-w-3xl mx-auto">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} {...project} darkMode={darkMode} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;











