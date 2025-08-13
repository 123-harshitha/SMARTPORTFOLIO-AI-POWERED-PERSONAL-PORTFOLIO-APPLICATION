import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import "./Projects.css";

import travelImg from "../../assets/travel.png";
import moodscapeImg from "../../assets/moodscape.jpg";
import ecommerceImg from "../../assets/CoonectSphere.png";
import reminderImg from "../../assets/GPT.png";

const allProjects = [
  {
    title: "Travel Blog Website",
    category: "React",
    image: travelImg,
    description:
      "A responsive travel blog platform where users can explore destinations, share experiences, and connect with other travelers. Features blog posting, destination highlights, and interactive design.",
    techStack: ["React", "CSS", "Firebase"],
    github: "https://github.com/123-harshitha/TravellersBlog.git",
    demo: "http://harshithamrtravellersblog.netlify.app",
  },
  {
    title: "Moodscape App",
    category: "React Native",
    image: moodscapeImg,
    description:
      "A mental wellness app that allows users to log daily moods, maintain journals, and book therapy sessions via QR code. Includes emotion tracking with an intuitive interface for better self-awareness.",
    techStack: ["React Native", "MongoDB", "Express"],
    github: "https://github.com/123-harshitha/MoodScape-A_Real-time_Emotion_Detection_System.git",
    demo: "http://moodscapeapp.com",
  },
  {
    title: "ConnectSphere - Secure Video Conferencing",
    category: "React",
    image: ecommerceImg,
    description:
      "A secure video conferencing platform with real-time chat, user authentication, and meeting room management. Designed for seamless collaboration with an integrated admin dashboard.",
    techStack: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/123-harshitha/ConnectSphere-Secure-Video-Conferencing-with-Real-Time-Chat-and-User-Authentication.git",
    demo: "https://connectsphere-secure-video-conferencing-a9zd.onrender.com",
  },
  {
    title: "HarNovaGPT - Custom AI Chat Interface",
    category: "React",
    image: reminderImg,
    description:
      "An AI-powered custom chat interface built with OpenRouter API, featuring personalized responses and task management. Integrated with WhatsApp API to send automated reminders.",
    techStack: ["Java", "Firebase", "Twilio API"],
    github: "https://github.com/123-harshitha/HarNovaGPT-A-Custom-AI-Chat-Interface-Using-OpenRouter-API.git",
    demo: "http://",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  hover: { scale: 1.05 },
};

const modalVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="projects-section" id="projects">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h2>

      <motion.div
        className="projects-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {allProjects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            variants={cardVariants}
            whileHover="hover"
            onClick={() => setSelectedProject(project)}
            layout
          >
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="card-description">{project.description}</p>
              <div className="card-links" onClick={(e) => e.stopPropagation()}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn small-btn"
                >
                  <FaGithub /> Source
                </a>
                {project.demo && project.demo.trim() !== "" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn small-btn demo-btn"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-overlay"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              layout
            >
              <button
                className="close-btn"
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
              >
                <FaTimes />
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="modal-image"
              />
              <h2>{selectedProject.title}</h2>
              <p className="project-description">{selectedProject.description}</p>
              <p className="project-techstack">
                <strong>Tech Stack:</strong> {selectedProject.techStack.join(", ")}
              </p>
              <div className="project-links">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
                {selectedProject.demo && selectedProject.demo.trim() !== "" && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn demo-btn"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
