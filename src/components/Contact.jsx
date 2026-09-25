
import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="container">

        <div className="contact-dashboard">

          <div className="contact-main">
            <span className="section-label">08 / CONTACT</span>

            <h2>
              Let's build
              <br />
              <span>something useful.</span>
            </h2>

            <p>
              Have a data project, dashboard requirement, job opportunity,
              or analytics problem? Let's connect and discuss how I can help.
            </p>

            <a
              href="mailto:manishupadhyay3666@gmail.com"
              className="contact-email"
            >
              manishupadhyay3666@gmail.com
              <span>↗</span>
            </a>
          </div>

          <div className="contact-panel">

            <div className="contact-status">
              <span></span>
              AVAILABLE FOR OPPORTUNITIES
            </div>

            <div className="contact-links">

              <a href="#" className="contact-link">
                <div>
                  <small>PROFESSIONAL NETWORK</small>
                  <strong>LinkedIn</strong>
                </div>
                <span>↗</span>
              </a>

              <a
                href="https://github.com/manishupadhyay00"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <div>
                  <small>CODE & PROJECTS</small>
                  <strong>GitHub</strong>
                </div>
                <span>↗</span>
              </a>

              <a href="#" className="contact-link">
                <div>
                  <small>FREELANCE</small>
                  <strong>Upwork</strong>
                </div>
                <span>↗</span>
              </a>

            </div>

            <a
              href="mailto:manishupadhyay3666@gmail.com"
              className="contact-button"
            >
              Start a Conversation
              <span>→</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;