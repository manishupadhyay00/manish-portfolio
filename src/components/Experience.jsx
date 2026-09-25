import React from "react";
import "../styles/Experience.css";

const Experience = () => {
  return (
    <section className="experience section" id="experience">
      <div className="container">

        <div className="experience-heading">
          <div>
            <span className="section-label">07 / EXPERIENCE</span>

            <h2 className="section-title">
              Experience &
              <br />
              <span>education.</span>
            </h2>
          </div>
        </div>

        <div className="experience-grid">

          <div className="experience-timeline">

            <div className="timeline-item">
              <span className="timeline-number">01</span>

              <div className="timeline-content">
                <span className="timeline-date">
                  AUG 2024 — AUG 2025
                </span>

                <h3>Data Analyst Intern</h3>

                <h4>Elite One HR Consultants</h4>

                <p>
                  Worked on data analysis, reporting, dashboard
                  development and data preparation workflows.
                </p>

                <ul>
                  <li>Analyzed and prepared datasets for reporting.</li>
                  <li>Worked with Power BI dashboards and visualizations.</li>
                  <li>Cleaned and transformed data for analysis.</li>
                  <li>Supported data-driven reporting workflows.</li>
                </ul>
              </div>
            </div>

          </div>

          <div className="education-card">

            <span className="education-label">
              EDUCATION
            </span>

            <div className="education-icon">
              B.Tech
            </div>

            <span className="education-year">
              2020 — 2024
            </span>

            <h3>
              Bachelor of Technology
            </h3>

            <h4>
              Computer Science & Engineering
            </h4>

            <p>
              Lovely Professional University
            </p>

            <div className="education-line"></div>

            <span className="education-location">
              Punjab, India
            </span>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;