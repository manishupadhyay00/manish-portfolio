
import React from "react";
import "../styles/DashboardStats.css";

import { skills, skillCategories } from "./Skills";
import { projects } from "./Projects";
import { services } from "./Services";

const DashboardStats = () => {
  const allSkillNames = [
    ...skills.map((skill) => skill.name),
    ...skillCategories.flatMap((category) => category.tools),
  ];

  const totalSkills = new Set(
    allSkillNames.map((name) => name.trim().toLowerCase())
  ).size;

  const stats = [
    {
      value: String(projects.length).padStart(2, "0"),
      label: "Featured Projects",
      detail: "Analytics & BI",
    },
    {
      value: String(totalSkills),
      label: "Tools & Technologies",
      detail: "Data & Engineering",
    },
    {
      value: String(services.length).padStart(2, "0"),
      label: "Analytics Services",
      detail: "Freelance Ready",
    },
    {
      value: "∞",
      label: "Learning & Building",
      detail: "Always Improving",
    },
  ];

  return (
    <section className="dashboard-stats">
      <div className="dashboard-stats-container">
        <div className="dashboard-header">
          <div>
            <span className="dashboard-status">
              <span className="status-dot" />
              SYSTEM ONLINE
            </span>

            <h2>Analytics Overview</h2>
          </div>

          <span className="dashboard-id">MU / 2026</span>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div className="stat-card" key={stat.label}>
              <span className="stat-index">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="stat-value">
                {stat.value}
              </div>

              <div className="stat-label">
                {stat.label}
              </div>

              <div className="stat-detail">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardStats;