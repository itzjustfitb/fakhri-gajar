import React from "react";
import { navigations, socials } from "../../data/constants";

function Footer() {
  return (
    <footer>
      <div className="footer__container">
        <nav>
          <ul>
            {navigations.map((navigation, index) => {
              return (
                <li key={index}>
                  <a href={navigation.value}>{navigation.label}</a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="footer__socials">
          {socials.map((social, index) => {
            return (
              <a key={index} href={social.value}>
                <i className={social.icon}></i>
              </a>
            );
          })}
        </div>
        <p>© 2024 Fakhri Gajar. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
