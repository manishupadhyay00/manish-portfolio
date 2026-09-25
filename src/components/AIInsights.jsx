import React from "react";
import "../styles/AIInsights.css";

const AIInsights = () => {
  return (
    <section className="ai-insights section" id="ai-insights">
      <div className="container">

        <div className="ai-heading">
          <div>
            <span className="section-label">AI / ANALYTICS</span>
            <h2 className="section-title">
              Intelligent
              <br />
              <span>insights.</span>
            </h2>
          </div>

          <span className="ai-status">
            <span></span>
            AI ENGINE READY
          </span>
        </div>

        <div className="ai-dashboard">

          <div className="ai-main-card">
            <div className="ai-card-top">
              <span>AI ANALYTICS ENGINE</span>
              <span>MU-01</span>
            </div>

            <div className="ai-visual">
              <div className="ai-ring ring-one"></div>
              <div className="ai-ring ring-two"></div>
              <div className="ai-core">
                <span>AI</span>
              </div>
            </div>

            <div className="ai-message">
              <span className="ai-message-label">
                ANALYTICAL APPROACH
              </span>

              <h3>
                Turning complex datasets into clear,
                actionable insights.
              </h3>

              <p>
                I combine data cleaning, exploratory analysis,
                visualization, and business context to understand
                what the data is saying.
              </p>
            </div>
          </div>

          <div className="ai-side-panel">

            <div className="insight-card">
              <span className="insight-number">01</span>

              <div>
                <span className="insight-label">INPUT</span>
                <h3>Raw Data</h3>
                <p>
                  Structured and unstructured datasets prepared
                  for analysis.
                </p>
              </div>
            </div>

            <div className="insight-card">
              <span className="insight-number">02</span>

              <div>
                <span className="insight-label">PROCESS</span>
                <h3>Analyze</h3>
                <p>
                  Clean, transform, explore and identify
                  meaningful patterns.
                </p>
              </div>
            </div>

            <div className="insight-card">
              <span className="insight-number">03</span>

              <div>
                <span className="insight-label">OUTPUT</span>
                <h3>Insights</h3>
                <p>
                  Clear dashboards, visualizations and
                  data-driven conclusions.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AIInsights;