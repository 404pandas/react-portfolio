import React from "react";

// local imports
import { projectData } from "../components/ProjectCard/data";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <div className='content' id='project-content'>
        <div id='projectCardContainer'>
          {projectData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Projects;
