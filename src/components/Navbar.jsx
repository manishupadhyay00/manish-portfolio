import React from "react";
import "../../src/styles/Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <a href="#home" className="navbar-logo">
          MU<span>_</span>
        </a>

        <nav className="navbar-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="navbar-cta">
          Let's Work Together <span>↗</span>
        </a>

      </div>
    </header>
  );
};

export default Navbar;