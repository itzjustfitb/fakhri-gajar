import React, { useState } from "react";
import { experiences } from "../../data/constants";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  const [readMoreActive, setReadMoreActive] = useState({
    index: "",
    boolean: "",
  });

  return (
    <section id="experience">
      <div className="experience__container">
        <div className="experience__top">
          <h1>Experience</h1>
          <p>
            My work experience as a software engineer and working on different
            companies and projects.
          </p>
        </div>
        <div className="experience__bottom">
          {experiences.map((experience, index) => {
            return (
              <ExperienceCard
                key={index}
                id={index}
                experienceList={experience}
                readMoreActive={readMoreActive}
                setReadMoreActive={setReadMoreActive}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
