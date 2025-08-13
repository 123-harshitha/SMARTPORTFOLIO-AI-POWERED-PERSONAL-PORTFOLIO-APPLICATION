// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";


const Navbar = ({ openResumeSummary, openSkillExtraction, openChatbot }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aiDropdownOpen, setAiDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => {
    setMenuOpen(false);
    setAiDropdownOpen(false);
  };

  const toggleAiDropdown = () => setAiDropdownOpen(!aiDropdownOpen);

  const handleConnectClick = () => {
    closeMenu();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Close dropdown if click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setAiDropdownOpen(false);
      }
    };

    if (aiDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [aiDropdownOpen]);

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#hero" onClick={closeMenu}>Portfolio.</a>
      </div>

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === "Enter") toggleMenu(); }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <li><a href="#hero" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About Me</a></li>
        <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>

        {/* AI Features Dropdown */}
        <li className="ai-dropdown" ref={dropdownRef}>
          <button
            className="ai-dropdown-btn"
            onClick={toggleAiDropdown}
            aria-haspopup="true"
            aria-expanded={aiDropdownOpen}
          >
            AI Features ▾
          </button>
          {aiDropdownOpen && (
            <ul className="ai-dropdown-menu" onClick={(e) => e.stopPropagation()}>
              <li>
                <button
                  onClick={() => {
                    closeMenu();
                    openResumeSummary();
                    setAiDropdownOpen(false);
                  }}
                >
                  Resume Summarization
                </button>
              </li>
              <li>
                {/* <button
                  onClick={() => {
                    closeMenu();
                    openSkillExtraction();
                    setAiDropdownOpen(false);
                  }}
                >
                  Job-based Skill Extraction
                </button> */}
              </li>
              <li>
                <button
                  onClick={() => {
                    closeMenu();
                    openChatbot();
                    setAiDropdownOpen(false);
                  }}
                >
                  AI Chatbot
                </button>
              </li>
            </ul>
          )}
        </li>
      </ul>

      <button className="nav-connect" onClick={handleConnectClick}>
        Connect with me
      </button>
    </nav>
  );
};

export default Navbar;
