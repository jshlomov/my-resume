import React from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";
import DroneImg from "../../imgs/ProjectsImgs/drone2.png";
import Pro2Img from "../../imgs/ProjectsImgs/project2.png";


function Projects() {
  return (
    <div className="ProjectsWrapper">
      <ProjectCard
        title="Real-time Drone Delivery `Management Solution (C#, .NET, WPF):"
        description="Developed a real-time delivery system management solution using the three-layer model
        architecture.
        Implemented a user interface for Windows systems (WPF) and utilized language tools.
        Incorporated important programming principles like SOLID, Design Patterns, OOP &
        OOD, multithreading, and version control with GitHub."
        image={DroneImg}
      />

      <ProjectCard
        title="3D Graphic Scene Modeling Solution (Java):"
        description="Designed and implemented a solution for creating and modeling virtual 3D graphic scenes with realistic lighting effects.
        Covered concepts such as light sources, rays, reflections, transparencies, and other
        advanced rendering techniques.
        Incorporated principles of software engineering, OOP & OOD, Design Patterns, SOLID,
        and Test-driven Development (TDD)."
        image={Pro2Img}
      />

      <ProjectCard
        title="Real-time Drone Delivery `Management Solution (C#, .NET, WPF):"
        description="Developed a real-time delivery system management solution using the three-layer model
              architecture.
              Implemented a user interface for Windows systems (WPF) and utilized language tools.
              Incorporated important programming principles like SOLID, Design Patterns, OOP &
              OOD, multithreading, and version control with GitHub."
        image={DroneImg}
      />
    </div>
  );
}

export default Projects;
