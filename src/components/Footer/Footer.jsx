import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about-us">About Us</a></li>
            <li><a href="#privacy-policy">Privacy Policy</a></li>
            <li><a href="#terms-of-service">Terms of Service</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>contact@Fitlife.com</p>
          <p>+1 (555) 123-4567</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#facebook" aria-label="Facebook">🌐</a>
            <a href="#twitter" aria-label="Twitter">🌐</a>
            <a href="#linkedin" aria-label="LinkedIn">🌐</a>
            <a href="#instagram" aria-label="Instagram">🌐</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Fitlife. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
