import React from "react";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        {/* Quick Links */}
        <div className="footer-section footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact Me</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section footer-contact">
          <h3>Contact</h3>
          <p>Email: <a href="mailto:youremail@example.com">harshithamr461@gmail.com.com</a></p>
          <p>Phone: <a href="tel:+911234567890">+91 7204589448</a></p>
          <p>Location: Karnataka, India</p>
        </div>

        {/* Social Links */}
        <div className="footer-section footer-social">
          <h3>Follow Me</h3>
          <div className="social-icons">
            <a
              href="https://github.com/123-harshitha"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/harshitha-mr-1b2a95267/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://x.com/mr461_Harshitha"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a href="mailto:harshithamr461@gmail.com" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <div
        className="back-to-top"
        onClick={scrollToTop}
        role="button"
        tabIndex={0}
        aria-label="Back to top"
        onKeyDown={(e) => { if (e.key === "Enter") scrollToTop(); }}
      >
        ↑ Back to Top
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Harshitha M R. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
