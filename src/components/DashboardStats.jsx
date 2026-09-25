import React from "react";
import "../styles/DashboardStats.css";

const DashboardStats = () => {
  const stats = [
    {
      value: "04",
      label: "Featured Projects",
      detail: "Analytics & BI",
    },
    {
      value: "14+",
      label: "Tools & Technologies",
      detail: "Data & Engineering",
    },
    {
      value: "04",
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
              <span className="status-dot"></span>
              SYSTEM ONLINE
            </span>

            <h2>Analytics Overview</h2>
          </div>

          <span className="dashboard-id">MU / 2026</span>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div className="stat-card" key={index}>
              <span className="stat-index">
                0{index + 1}
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