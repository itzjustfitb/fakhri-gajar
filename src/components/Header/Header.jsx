import React, { useEffect, useState } from "react";
import { DefaultBtn } from "../components.style";
import siteLogo from "../../assets/images/site-logo.png";
import { Sling as Hamburger } from "hamburger-react";
import { navigations } from "../../data/constants";

function Header() {
  const [activeNav, setActiveNav] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "initial";
  }, [isOpen]);

  const [scrollInt, setScrollInt] = useState(0);
  window.addEventListener("scroll", () => {
    setScrollInt(scrollY);
  });

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
                <li
                  onClick={() => {
                    setActiveNav(navigation.label);
                    setIsOpen(false);
                  }}
                  key={index}
                >
                  <a
                    className={
                      activeNav === navigation.label ? "active-ul" : ""
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
