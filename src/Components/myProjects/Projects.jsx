import React from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";
import DroneImg from "../../imgs/ProjectsImgs/drone2.png";

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
        title="Real-time Drone Delivery `Management Solution (C#, .NET, WPF):"
        description="Developed a real-time delivery system management solution using the three-layer model
        architecture.
        Implemented a user interface for Windows systems (WPF) and utilized language tools.
        Incorporated important programming principles like SOLID, Design Patterns, OOP &
        OOD, multithreading, and version control with GitHub."
        image={DroneImg}
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
