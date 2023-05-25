import React from "react";
import { projectData } from "../components/ProjectCard/data";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ProjectCard from "../components/ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <div className="content">
        <div id="projectCardContainer">
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
