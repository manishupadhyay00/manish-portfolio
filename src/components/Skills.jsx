
import React from "react";
import "../styles/Skills.css";

export const skills = [
  { name: "Python", level: "Programming & Analytics", value: "90%" },
  { name: "SQL", level: "Data Querying", value: "90%" },
  { name: "Power BI", level: "Business Intelligence", value: "88%" },
  { name: "Excel", level: "Data Analysis", value: "88%" },
  { name: "Pandas", level: "Data Processing", value: "85%" },
  { name: "NumPy", level: "Numerical Computing", value: "82%" },
  { name: "DAX", level: "BI Analytics", value: "82%" },
  { name: "Power Query", level: "Data Transformation", value: "85%" },
  { name: "PySpark", level: "Big Data Processing", value: "75%" },
];

export const skillCategories = [
  {
    number: "01",
    title: "Data Analytics",
    description: "Data exploration, cleaning and visualization.",
    tools: [
      "Python", "SQL", "Excel", "Pandas", "NumPy",
      "Matplotlib", "Seaborn", "Exploratory Data Analysis",
      "Data Cleaning", "Statistical Analysis",
    ],
  },
  {
    number: "02",
    title: "Business Intelligence",
    description: "Dashboards and business performance reporting.",
    tools: [
      "Power BI", "DAX", "Power Query", "Data Modeling",
      "Dashboard Development", "KPI Reporting",
      "Data Visualization", "Tableau",
    ],
  },
  {
    number: "03",
    title: "Data Engineering",
    description: "Data pipelines and scalable processing.",
    tools: [
      "PySpark", "Apache Spark", "ETL / ELT",
      "Data Pipelines", "Data Warehousing", "Data Lakes",
      "Data Quality", "Batch Processing",
      "Apache Airflow", "Apache Kafka",
    ],
  },
  {
    number: "04",
    title: "Cloud & Databases",
    description: "Cloud platforms, databases and storage.",
    tools: [
      "MySQL", "PostgreSQL", "SQL Server",
      "Microsoft Azure", "Azure Data Factory",
      "Azure Databricks", "Azure Data Lake",
      "Snowflake", "AWS",
    ],
  },
  {
    number: "05",
    title: "Development Tools",
    description: "Development and engineering practices.",
    tools: [
      "Git", "GitHub", "VS Code", "Jupyter Notebook",
      "Docker", "Linux", "REST APIs",
      "GitHub Actions", "CI/CD", "Pipeline Testing",
    ],
  },
];

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="skills-heading">
          <div>
            <span className="section-label">03 / SKILLS</span>
            <h2 className="section-title">
              Technical
              <br />
              <span>intelligence.</span>
            </h2>
          </div>

          <p>
            Analytics, business intelligence, cloud
            technologies and modern data engineering.
          </p>
        </div>

        <div className="skills-dashboard">
          <div className="skills-main">
            <div className="skills-top">
              <span>CORE TECH STACK</span>
              <span>MU / DATA</span>
            </div>

            <div className="skill-list">
              {skills.map((skill, index) => (
                <div className="skill-row" key={skill.name}>
                  <div className="skill-info">
                    <span className="skill-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3>{skill.name}</h3>
                      <span>{skill.level}</span>
                    </div>
                  </div>

                  <div className="skill-meter">
                    <div
                      className="skill-meter-fill"
                      style={{ width: skill.value }}
                    />
                  </div>

                  <span className="skill-percent">
                    {skill.value}
                  </span>
                </div>
              ))}
            </div>

            <p className="skill-disclaimer">
              Skill levels are personal self-assessments.
            </p>
          </div>

          <div className="skills-side">
            {skillCategories.slice(0, 3).map((category) => (
              <div
                className="skill-category"
                key={category.number}
              >
                <span>{category.number}</span>
                <h3>{category.title}</h3>
                <p>{category.tools.join(", ")}.</p>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-category-grid">
          {skillCategories.map((category) => (
            <div
              className="skills-category-card"
              key={category.number}
            >
              <div className="skills-category-header">
                <span>{category.number}</span>
                <h3>{category.title}</h3>
              </div>

              <p className="skills-category-description">
                {category.description}
              </p>

              <div className="skills-tags">
                {category.tools.map((tool) => (
                  <span className="skills-tag" key={tool}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;