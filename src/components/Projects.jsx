import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../data/projectsData";

const Projects = ({ darkMode }) => {
  return (
    <section 
      id="projects" 
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 transition-all"
    >
      <h1 className="text-4xl font-bold text-center !mb-10">Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} {...project} darkMode={darkMode} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;







