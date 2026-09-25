import React from "react";
import "../styles/Skills.css";

const Skills = () => {
  const skills = [
    { name: "Python", level: "Analytics", value: "90%" },
    { name: "SQL", level: "Data Querying", value: "90%" },
    { name: "Power BI", level: "Visualization", value: "88%" },
    { name: "Excel", level: "Analysis", value: "88%" },
    { name: "Pandas", level: "Data Processing", value: "85%" },
    { name: "NumPy", level: "Computation", value: "82%" },
    { name: "DAX", level: "BI Analytics", value: "82%" },
    { name: "PySpark", level: "Big Data", value: "75%" },
  ];

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
            A practical toolkit for turning data into
            analysis, dashboards and insights.
          </p>
        </div>

        <div className="skills-dashboard">

          <div className="skills-main">
            <div className="skills-top">
              <span>TECH STACK</span>
              <span>MU / DATA</span>
            </div>

            <div className="skill-list">
              {skills.map((skill, index) => (
                <div className="skill-row" key={skill.name}>

                  <div className="skill-info">
                    <span className="skill-number">
                      0{index + 1}
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
                    ></div>
                  </div>

                  <span className="skill-percent">
                    {skill.value}
                  </span>

                </div>
              ))}
            </div>
          </div>

          <div className="skills-side">

            <div className="skill-category">
              <span>01</span>
              <h3>Analytics</h3>
              <p>
                Python, Pandas, NumPy, Matplotlib,
                Seaborn and exploratory data analysis.
              </p>
            </div>

            <div className="skill-category">
              <span>02</span>
              <h3>Business Intelligence</h3>
              <p>
                Power BI, DAX, Power Query, Excel
                and interactive reporting.
              </p>
            </div>

            <div className="skill-category">
              <span>03</span>
              <h3>Data Engineering</h3>
              <p>
                SQL, PySpark, Databricks, Azure
                and modern data workflows.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;