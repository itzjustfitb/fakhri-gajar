import React from "react";
import HeroImage from "./HeroImage";
import { Typewriter } from "react-simple-typewriter";
import { DefaultBtn } from "../components.style";
import { bio } from "../../data/constants";

function Hero() {
  return (
    <section id="about">
      <div className="hero__container">
        <div className="hero__left">
          <h1>
            Hi, I am <span>{bio.name}</span>
          </h1>
          <div>
            I am a
            <span>
              <Typewriter words={bio.roles} loop={0} cursor />
            </span>
          </div>
          <p>{bio.description}</p>
          <a target="_blank" href={bio.resume}>
            <DefaultBtn>Check Resume</DefaultBtn>
          </a>
        </div>
        <HeroImage />
      </div>
    </section>
  );
}

export default Hero;
