import React, { useState } from "react";
import { DefaultBtn } from "../components.style";
import siteLogo from "../../assets/images/site-logo.png";
import { Sling as Hamburger } from "hamburger-react";
import { navigations } from "../../data/constants";

function Header() {
  const [activeNav, setActiveNav] = useState("");
  const [isOpen, setOpen] = useState(false);

  return (
    <header>
      <div className="header__container">
        <div className="header__logo">
          <a href="/">
            <img src={siteLogo} alt="Site Logo" />
          </a>
        </div>
        <nav className={isOpen ? "active-nav" : ""}>
          <ul>
            {navigations.map((navigation, index) => {
              return (
                <li onClick={() => setActiveNav(navigation.label)} key={index}>
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
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
    </header>
  );
}

export default Header;
