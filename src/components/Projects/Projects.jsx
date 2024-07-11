import React, { useState } from "react";
import { projects } from "../../data/constants";
import ProjectCard from "./ProjectCard";

function Projects() {
  const tabs = ["All", "E-Commerce", "Web App", "Landing Page"];
  const [activeTab, setActiveTab] = useState("All");
  const [updatedProjects, setUpdatedProjects] = useState(projects);

  const filterCategories = (category) => {
    const filteredProjects = projects.filter(
      (project) => project.category === category
    );
    setUpdatedProjects(filteredProjects);
  };
  return (
    <section id="projects">
      <div className="projects__container">
        <div className="projects__top">
          <h1>Projects</h1>
          <p>
            I have worked on a wide range of projects. Here are some of my
            projects.
          </p>
        </div>
        <div className="projects__bottom">
          <nav>
            <ul>
              {tabs.map((tab, index) => {
                return (
                  <li
                    onClick={() => {
                      setActiveTab(tab);
                      filterCategories(tab);
                      if (tab === "All") {
                        setUpdatedProjects(projects);
                      }
                    }}
                    className={tab === activeTab ? "active-tab" : ""}
                    key={index}
                  >
                    {tab}
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="projects__list">
            {updatedProjects.map((project, index) => {
              return <ProjectCard key={index} projectsList={project} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
