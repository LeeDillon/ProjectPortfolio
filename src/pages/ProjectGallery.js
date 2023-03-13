// import React, { useState } from "react";
import Project from '../components/Project/project';
import projectsData from "../projects.json";


function ProjectGallery() {

  return (
    <div>
      <h1>Project List</h1>
      {projectsData.map((project) => (
        <Project
          id={project.id}
          key={project.id}
          name={project.name}
          image={project.image}
          description={project.description}
          githubRepo={project.githubRepo}
          deployedAppLink={project.deployedAppLink}
        />
      ))}
    </div>
  );
}

export default ProjectGallery;