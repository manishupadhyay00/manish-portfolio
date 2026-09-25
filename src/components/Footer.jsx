import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span>
            MU<span>_</span>
          </span>
          <p>Data • Analytics • Intelligence</p>
        </div>

        <div className="footer-center">
          © 2026 Manish Upadhyay
        </div>

        <a href="#home" className="footer-top">
          BACK TO TOP ↑
        </a>
      </div>
    </footer>
  );
};

export default Footer;