import React from "react";

function ExperienceCard({ experienceList, readMoreActive, setReadMoreActive }) {
  let firstPartOfDescription = "";

  const settingFirstPartOfText = (text) => {
    const words = text.split(" ");
    const firstPart = words.slice(0, 30);
    const result = firstPart.join(" ");
    firstPartOfDescription = result;
  };

  settingFirstPartOfText(experienceList.description);
  return (
    <div className="experience__card">
      <div className="experience__card-left">
        <span></span>
        <span></span>
      </div>
      <div className="experience__card-right">
        <div className="experience__card-top">
          <img src={experienceList.image} alt="" />
          <div className="experience__card-title">
            <h1>{experienceList.position}</h1>
            <h2>{experienceList.company}</h2>
            <p>{experienceList.date}</p>
          </div>
        </div>
        <div className="experience__card-bottom">
          <div
            className={`experience__card-content ${
              readMoreActive ? "read-more-active" : ""
            }`}
          >
            <p>
              {readMoreActive
                ? experienceList.description
                : firstPartOfDescription}
              <span onClick={() => setReadMoreActive(!readMoreActive)}>
                {readMoreActive ? "show less..." : "read more..."}
              </span>
            </p>
          </div>
          <div className="experience__card-skills">
            <p>Skills:</p>
            <ul>
              {experienceList.skills.map((skill, index) => {
                return <li key={index}>{skill}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
