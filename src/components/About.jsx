import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">

        <div className="about-heading">
          <span className="section-label">01 / ABOUT</span>

          <h2 className="section-title">
            Data with
            <br />
            <span>purpose.</span>
          </h2>
        </div>

        <div className="about-content">
          <p>
            I'm Manish Upadhyay, a Computer Science & Engineering graduate
            focused on data analytics, visualization, and practical
            data-driven solutions.
          </p>

          <p>
            I work with Python, SQL, Power BI, Excel, and modern data
            analytics tools to clean, transform, analyze, and visualize
            data.
          </p>

          <div className="about-quote">
            <span>“</span>
            <p>
              Good data tells a story. Good analysis makes that story useful.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;