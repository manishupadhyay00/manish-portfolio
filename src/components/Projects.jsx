
import React from "react";
import "../styles/Projects.css";

// Exported for automatic counting in DashboardStats.jsx
export const projects = [
  {
    type: "CONTENT ANALYTICS",
    title: "Netflix Content Analysis",
    description:
      "Explored Netflix content trends, genres, ratings, release patterns and other characteristics using Python and Pandas.",
    tools: ["Python", "Pandas"],
    image: "/images/Netflix.png",
    github:
      "https://github.com/manishupadhyay00/Netflix-Data-Analysis-Python",
  },
  {
    type: "BUSINESS ANALYTICS",
    title: "E-Commerce Sales Analysis",
    description:
      "Analyzed e-commerce sales data using Excel and SQL, and developed Power BI dashboards to explore sales trends, customer behavior and business performance.",
    tools: ["Excel", "SQL", "Power BI", "Problem Solving"],
    image: "/images/E-Commerce.png",
    github: "",
  },
  {
    type: "EXPLORATORY ANALYSIS",
    title: "Olympic Games Data Analysis",
    description:
      "Analyzed Olympic data using Excel and SQL, and created Power BI visualizations to explore athlete performance, country participation and historical trends.",
    tools: ["Excel", "SQL", "Power BI", "Problem Solving"],
    image: "/images/Olympic.png",
    github:
      "https://github.com/manishupadhyay00/Olympic-Data-Analysis",
  },
  {
    type: "BUSINESS INTELLIGENCE",
    title: "Hotel Booking Analysis",
    description:
      "Used Excel, SQL and Power BI to analyze hotel booking patterns, customer behavior and business performance through interactive dashboards.",
    tools: ["Excel", "SQL", "Power BI", "Problem Solving"],
    image: "/images/hotel.png",
    github: "",
  },
];

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="projects-heading">
          <div>
            <span className="section-label">
              04 / PROJECTS
            </span>

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
          {projects.map((project, index) => (
            <article
              className="project-card"
              key={project.title}
              style={{
                "--project-image": `url("${project.image}")`,
              }}
            >
              <div className="project-top">
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>
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
                    <span key={tool}>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-footer">
                <span>ANALYTICS PROJECT</span>

                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    VIEW PROJECT ↗
                  </a>
                ) : (
                  <span>LINK COMING SOON</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;