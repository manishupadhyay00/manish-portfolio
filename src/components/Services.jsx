import React from "react";
import "../styles/Services.css";

const Services = () => {
  const services = [
    {
      number: "01",
      title: "Power BI Dashboards",
      description:
        "Interactive dashboards, KPI reporting, data modeling and business-focused visualizations.",
      tools: ["Power BI", "DAX", "Power Query"],
    },
    {
      number: "02",
      title: "Python Data Analysis",
      description:
        "Data cleaning, exploratory analysis, transformation and insight generation from structured datasets.",
      tools: ["Python", "Pandas", "NumPy"],
    },
    {
      number: "03",
      title: "SQL Analytics",
      description:
        "Joins, aggregations, analytical queries and reporting datasets designed around business questions.",
      tools: ["SQL", "MySQL", "PostgreSQL"],
    },
    {
      number: "04",
      title: "Excel & Data Cleaning",
      description:
        "Clean, organize and transform messy business data into analysis-ready reporting workflows.",
      tools: ["Excel", "Power Query", "Data Cleaning"],
    },
  ];

  return (
    <section className="services section" id="services">
      <div className="container">

        <div className="services-heading">
          <div>
            <span className="section-label">06 / SERVICES</span>

            <h2 className="section-title">
              Data solutions
              <br />
              <span>that work.</span>
            </h2>
          </div>

          <div className="services-intro">
            <span className="service-status">
              <span></span>
              AVAILABLE FOR PROJECTS
            </span>

            <p>
              Helping businesses turn messy data into
              clear analysis, dashboards and useful insights.
            </p>
          </div>
        </div>

        <div className="services-grid">

          {services.map((service) => (
            <article className="service-card" key={service.number}>

              <div className="service-top">
                <span>{service.number}</span>
                <span>DATA SERVICE</span>
              </div>

              <div className="service-content">
                <div className="service-icon">↗</div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <div className="service-tools">
                  {service.tools.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
              </div>

              <div className="service-bottom">
                <span>DISCUSS A PROJECT</span>
                <span>→</span>
              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Services;