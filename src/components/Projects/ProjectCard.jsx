import React from "react";

function ProjectCard({ projectsList }) {
  return (
    <div className="projects__row" data-aos="zoom-in">
      <img src={projectsList.image} alt={projectsList.name} />
      <div className="projects__row-content">
        <h1>{projectsList.name}</h1>
        <h3>{projectsList.date}</h3>
        <ul className="projects__row-skills">
          {projectsList.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <div className="projects__row-buttons">
          {projectsList.links.map((link, index) => {
            return (
              <a key={index} target="_blank" href={link}>
                {index === 0 ? "View Live" : index === 1 ? "View Code" : ""}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
