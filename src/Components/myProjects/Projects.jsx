import React from "react";
import "./Projects.css";

import ProjectCard from "./ProjectCard";
import Header from "../Header/Header";
import DroneImg from "../../imgs/ProjectsImgs/drone2.png";
import Pro2Img from "../../imgs/ProjectsImgs/project2.png";
import carSystem from "../../imgs/ProjectsImgs/chiledInCar2.jpeg";
import colorOnLogo from "../../imgs/ProjectsImgs/coloronLogo.png";

function Projects() {
  const myProjects = [
    {
      title: "Real-time Drone Delivery `Management Solution (C#, .NET, WPF):",
      description:
        "Developed a real-time delivery system management solution using the three-layer model architecture. Implemented a user interface for Windows systems (WPF) and utilized language tools. Incorporated important programming principles like SOLID, Design Patterns, OOP & OOD, multithreading, and version control with GitHub.",
      image: DroneImg,
      link: "https://github.com/jshlomov/Drones-Delivery",
    },
    {
      title: "3D Graphic Scene Modeling Solution (Java):",
      description: `Designed and implemented a solution for creating and modeling virtual 3D graphic
     scenes with realistic lighting effects. Covered concepts such as light sources, rays, reflections, 
     transparencies, and other advanced rendering techniques. Incorporated principles of software engineering, 
     OOP & OOD, Design Patterns, SOLID, and Test-driven Development (TDD).`,
      image: Pro2Img,
      link: "https://github.com/jshlomov/3D-Graphic-Scene-Modeling-Solution",
    },
    {
      title: "A warning system to prevent children from being left in the car",
      description: `Developed a real-time delivery system management solution using the three-layer model
    architecture.
    Implemented a user interface for Windows systems (WPF) and utilized language tools.
    Incorporated important programming principles like SOLID, Design Patterns, OOP &
    OOD, multithreading, and version control with GitHub.`,
      image: carSystem,
      link: "https://github.com/jshlomov/Child-safety-in-the-car",
    },
    {
      title: "website for photography store and services",
      description:"Advanced responsive landing page.",
      image: colorOnLogo,
      link: "https://github.com/jshlomov/coloron-website",
    },
  ];

  //TODO - לקצר את התיאורים ממש ארוך ויוצא מהריבוע
  return (
    <div id="Projects" className="Projects bgColorTwo fontColorTwo cardSizesAndFlex">
      <Header header="My Projects" />
      <div className="ProjectsWrapper">
        {myProjects.map((x, index) => {
          return (
            <ProjectCard
              title={x.title}
              description={x.description}
              image={x.image}
              link={x.link}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
