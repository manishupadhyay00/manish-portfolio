import React from "react";
import "../styles/Projects.css";

const Projects = () => {
  const projects = [
    {
      number: "01",
      type: "CONTENT ANALYTICS",
      title: "Netflix Content Analysis",
      description:
        "Explored Netflix content trends, genres, ratings, release patterns and other characteristics to derive meaningful insights.",
      tools: ["Python", "Pandas", "Power BI"],
    },
    {
      number: "02",
      type: "BUSINESS ANALYTICS",
      title: "E-Commerce Sales Analysis",
      description:
        "Analyzed e-commerce data to understand sales patterns, customer behavior and business performance.",
      tools: ["Python", "SQL", "Power BI"],
    },
    {
      number: "03",
      type: "EXPLORATORY ANALYSIS",
      title: "Olympic Games Data Analysis",
      description:
        "Performed exploratory analysis across athletes, countries, events and historical Olympic performance.",
      tools: ["Python", "Pandas", "Seaborn"],
    },
    {
      number: "04",
      type: "BUSINESS INTELLIGENCE",
      title: "Hotel Booking Analysis",
      description:
        "Analyzed hotel booking data to explore booking behavior, customer patterns and business performance.",
      tools: ["SQL", "Excel", "Power BI"],
    },
  ];

  return (
    <section className="projects section" id="projects">
      <div className="container">

        <div className="projects-heading">
          <div>
            <span className="section-label">04 / PROJECTS</span>

            <h2 className="section-title">
              Data that
              <br />
              <span>tells stories.</span>
            </h2>
          </div>

          <p>
            Selected analytical projects demonstrating data
            cleaning, exploration, visualization and business
            thinking.
          </p>
        </div>

        <div className="projects-grid">

          {projects.map((project) => (
            <article className="project-card" key={project.number}>

              <div className="project-top">
                <span>{project.number}</span>
                <span>{project.type}</span>
              </div>

              <div className="project-body">

                <div className="project-icon">
                  <span>↗</span>
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tools">
                  {project.tools.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>

              </div>

              <div className="project-footer">
                <span>ANALYTICS PROJECT</span>
                <span>VIEW →</span>
              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;