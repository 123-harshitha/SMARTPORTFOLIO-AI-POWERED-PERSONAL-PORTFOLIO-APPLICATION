import React, { useState } from "react";

import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import About from "./Components/About/About.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import Contacts from "./Components/Contacts/contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import PortfolioSummary from "./Components/PortfolioSummary/PortfolioSummary.jsx";
import ChatBot from "./Components/ChatBot/chatbot.jsx";

const App = () => {
  const [showSummary, setShowSummary] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);

  const openResumeSummary = () => setShowSummary(true);
  const closeResumeSummary = () => setShowSummary(false);

  const openSkillExtraction = () => alert("Skill extraction feature coming soon!");
  const openChatbot = () => setShowChatbot(true);
  const closeChatbot = () => setShowChatbot(false);

  return (
    <div>
      <Navbar
        openResumeSummary={openResumeSummary}
        openSkillExtraction={openSkillExtraction}
        openChatbot={openChatbot}
      />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />

      <PortfolioSummary visible={showSummary} onClose={closeResumeSummary} />

      {showChatbot && (
  <div className="chatbot-overlay" onClick={closeChatbot}>
    <div className="chatbot-container" onClick={e => e.stopPropagation()}>
      <button className="close-chatbot-btn" onClick={closeChatbot}>✖</button>
      <ChatBot onClose={closeChatbot} />
    </div>
  </div>
)}
    </div>
  );
};

export default App;
