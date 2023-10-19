import React from "react";
import "./ProjectCard.css";

function ProjectCard(props) {
  return (
    <div className="ProCardContainer" onClick={()=> window.open(props.link, "_blank")}>
      <div
        className="bgImage"
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="ProCardTextContainer">
        <h2>
          {props.title}
        </h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
