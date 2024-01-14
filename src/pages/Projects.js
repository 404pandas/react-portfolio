import React from "react";

// local imports
import { projectData } from "../components/ProjectCard/data";

import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div>
      <div className='content' id='project-content'>
        <div id='projectCardContainer'>
          {projectData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
