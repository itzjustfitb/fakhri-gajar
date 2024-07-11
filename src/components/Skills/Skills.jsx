import React from "react";
import { skills } from "../../data/constants";
import SkillCard from "./SkillCard";

function Skills() {
  return (
    <section id="skills">
      <div className="skills__container">
        <div className="skills__top">
          <h1>Skills</h1>
          <p>
            Here are some of my skills on which I have been working on for the
            past 2 years.
          </p>
        </div>
        <div className="skills__bottom">
          {skills.map((skill, index) => {
            return <SkillCard key={index} skill={skill} index={index} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
