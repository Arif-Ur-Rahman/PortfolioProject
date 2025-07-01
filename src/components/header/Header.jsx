import React, { useState } from "react";
import "./header.css";

const Header = () => {
      window.addEventListener("scroll", function () {
        const header = this.document.querySelector(".header");
        if(this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    })

  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
      <nav className="nav navbar container">
        <a href="#home" className="nav__logo">
          <img src="./src/assets/atik.png" alt="logo" />

        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" onClick={ () => setActiveNav("#home")} className={activeNav === "#home" ? "nav__link active-link": "nav__link"}>
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link active-link">
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link active-link">
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link active-link">
                <i className="uil uil-briefcase-alt nav__icon"></i> Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link active-link">
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link active-link">
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>
        </div>

        {Toggle ? (
          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(false)}
          ></i>
        ) : (
          <div className="nav__toggle" onClick={() => showMenu(true)}>
            <i className="uil uil-apps"></i>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
