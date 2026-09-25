
import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        <div className="hero-content">
          <p className="hero-label">
            DATA ANALYST • DATA ENGINEER • PROBLEM SOLVER
          </p>

          <h1>
            MANISH
            <br />
            <span>UPADHYAY</span>
          </h1>

          <p className="hero-description">
            I turn raw data into meaningful insights, interactive dashboards,
            and practical data-driven solutions using modern analytics tools.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="hero-btn hero-btn-primary">
              View My Work <span>↗</span>
            </a>

            <a href="#contact" className="hero-btn hero-btn-secondary">
              Hire Me
            </a>
          </div>
        </div>

        <div className="hero-photo">
          <div className="photo-placeholder">
            <img
              src="/images/picture.png"
              alt="Manish Upadhyay"
              className="profile-image"
            />
          </div>

          <div className="hero-orbit orbit-one"></div>
          <div className="hero-orbit orbit-two"></div>

          <span className="photo-label">01 / INTRO</span>
        </div>

      </div>
    </section>
  );
};

export default Hero;