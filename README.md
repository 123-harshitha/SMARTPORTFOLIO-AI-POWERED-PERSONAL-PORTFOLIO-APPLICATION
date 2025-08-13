SMARTPORTFOLIO - AI Powered Personal Portfolio Application
Overview
SMARTPORTFOLIO is a modern, AI-powered personal portfolio web application built with React and Vite. It offers automated resume summarization and an interactive chatbot to provide visitors with an engaging experience while showcasing professional skills, projects, and achievements.

Features
AI-powered Resume Summarization: Automatically generates concise summaries from detailed resume content to highlight key qualifications.

Customized ChatBot: An AI-driven chat interface that answers visitor questions about the portfolio and guides them interactively.

Responsive Design: Fully mobile-friendly with smooth layouts across devices.

Interactive Project Showcase: Display projects with live demos, source code links, and brief descriptions.

Downloadable Resume: Easy access to download the full resume PDF.

Built with Modern Tools: React, Vite, and modern CSS techniques for optimal performance and developer experience.

Live Demo
Check out the live demo of the portfolio application here:
https://smartportfolio-ai-powered-personal-yvzp.onrender.com



Technologies Used
React.js
Vite
CSS3 / Flexbox / Grid
Node.js (backend API if applicable)
AI APIs / Services (e.g., OpenRouter API)

Installation
Clone the repository:
git clone https://github.com/123-harshitha/SMARTPORTFOLIO-AI-POWERED-PERSONAL-PORTFOLIO-APPLICATION.git
cd SMARTPORTFOLIO-AI-POWERED-PERSONAL-PORTFOLIO-APPLICATION
Install dependencies:
npm install

(Optional) Configure base path in vite.config.js if deploying to a subfolder:
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // or '/your-subfolder/' if hosting under a subfolder
  plugins: [react()],
});

Run the development server:
npm run dev

Build for production:
npm run build

Preview the production build locally:
npm run preview

Deployment
Deploy the contents of the build folder to any static hosting provider such as:
Render

important: Ensure the base in vite.config.js matches your deployment path to avoid asset loading issues.

Customized ChatBot and Resume Summarization Features
Customized ChatBot
The integrated AI-powered chat interface enables visitors to interact naturally with the portfolio, asking questions about skills, projects, or resume content. It provides contextual and relevant responses directly on the site, improving visitor engagement and assistance without redirecting users elsewhere.

Resume Summarization
The resume summarization feature automatically extracts and condenses key information from the full resume, displaying a clear, concise summary of skills, experience, and education. This allows visitors to quickly grasp core qualifications while offering the option to download the complete resume PDF.

Project Structure(frontend)
portfolio/src
  /assets         # Images, resume PDF, etc.
  /components     # React components (ChatBot, ResumeSummary, Projects, Hero, Navbar, etc.)
  /styles         # CSS files
  App.jsx         # Main application entry
  main.jsx        # React DOM rendering
vite.config.js    # Vite configuration file
package.json      # Project metadata and dependencies


Contributing
Contributions are welcome! Please open issues or pull requests to improve the project.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
Harshitha MR
Email: harshithamr461@gmail.com
GitHub: https://github.com/123-harshitha
LinkedIn: https://www.linkedin.com/in/harshitha-mr-1b2a95267/

Thank you for visiting!
