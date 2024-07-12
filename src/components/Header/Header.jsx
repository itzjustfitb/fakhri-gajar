import React, { useEffect, useRef, useState } from "react";
import { DefaultBtn } from "../components.style";
import siteLogo from "../../assets/images/site-logo.png";
import { Sling as Hamburger } from "hamburger-react";
import { navigations } from "../../data/constants";

function Header() {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "initial";
  }, [isOpen]);

  const [scrollInt, setScrollInt] = useState(0);
  window.addEventListener("scroll", () => {
    setScrollInt(scrollY);
  });

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute("id");
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  return (
    <header className={scrollInt > 120 ? "header-shadow" : ""}>
      <div className="header__container">
        <div className="header__logo">
          <a href="/">Fakhri Gajar.</a>
        </div>
        <nav className={isOpen ? "active-nav" : ""}>
          <ul>
            {navigations.map((navigation, index) => {
              return (
                <li onClick={() => setIsOpen(false)} key={index}>
                  <a
                    className={
                      navigation.value === "#" + activeSection
                        ? "active-ul"
                        : ""
                    }
                    href={navigation.value}
                  >
                    {navigation.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
      </div>
    </header>
  );
}

export default Header;
