// src/components/ChatBot.jsx
import React, { useState } from "react";
import "./chatbot.css";

const ChatBot = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { text: "👋 Hello! Ask me anything about my portfolio.", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input })
      });

      const data = await res.json();
      const botReply = data.reply || "Sorry, I couldn’t process that.";

      setMessages(prev => [...prev, { text: botReply, sender: "bot" }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [
        ...prev,
        { text: "⚠️ Server error. Please try again later.", sender: "bot" }
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="chatbot-popup">
      <div className="chatbot-header">
        <span>Portfolio Assistant</span>
        <button onClick={onClose}>✖</button>
      </div>

      <div className="chatbot-messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={`chat-message ${msg.sender}-msg`}>
            {msg.text}
          </div>
        ))}
        {loading && <div className="chat-message bot-msg">Thinking...</div>}
      </div>

      <div className="chatbot-input">
        <input
          type="text"
          placeholder="Type your question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage} disabled={!input.trim() || loading}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
