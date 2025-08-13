import React, { useState } from "react";
import './PortfolioSummary.css';

const PortfolioSummary = ({ visible, onClose }) => {
  const [aiSummary, setAiSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!visible) return null;

  const fetchAiSummary = () => {
    setLoading(true);
    setError("");
    setAiSummary("");
    fetch("http://localhost:5000/api/ai-summary") // make sure your backend port is correct
      .then((res) => res.json())
      .then((data) => {
        if (data.summary) {
          setAiSummary(data.summary);
        } else {
          setError("Failed to generate AI summary.");
        }
      })
      .catch(() => setError("Failed to generate AI summary."))
      .finally(() => setLoading(false));
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: "rgba(18,18,18,0.9)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 3000,
        padding: "1rem",
        overflowY: "auto",
      }}
    >
      <div
        style={{
          backgroundColor: "#1e1e1e",
          color: "#eee",
          padding: "2rem 2.5rem",
          borderRadius: "12px",
          maxWidth: "650px",
          width: "100%",
          position: "relative",
          fontFamily: "'Poppins', sans-serif",
          boxShadow: "0 0 20px #b415ffcc",
          maxHeight: "90vh",
          overflowY: "auto",
          userSelect: "text"
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            background: "transparent",
            border: "none",
            fontSize: "2rem",
            color: "#b415ff",
            cursor: "pointer",
            fontWeight: "700",
            userSelect: "none",
            lineHeight: 1,
          }}
          aria-label="Close portfolio summary"
          title="Close"
        >
          &times;
        </button>

        <h2
          style={{
            marginBottom: "1.5rem",
            borderBottom: "3px solid #b415ff",
            paddingBottom: "0.5rem",
            fontWeight: "700",
            letterSpacing: "1.2px",
          }}
        >
          Portfolio Summary
        </h2>

        <button
          onClick={fetchAiSummary}
          disabled={loading}
          style={{
            padding: "0.75rem 1.5rem",
            borderRadius: "8px",
            background: loading
              ? "gray"
              : "linear-gradient(267deg, #DA7C25, #B923E1)",
            color: "#fff",
            border: "none",
            cursor: loading ? "not-allowed" : "pointer",
            fontWeight: "700",
            fontSize: "1.1rem",
            width: "100%",
            marginBottom: "1.5rem",
            transition: "background 0.3s ease",
            boxShadow: loading ? "none" : "0 4px 10px #b415ff99",
          }}
          aria-busy={loading}
        >
          {loading ? (
            <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center'}}>
              <svg
                style={{ marginRight: "8px" }}
                width="20"
                height="20"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
              >
                <circle
                  cx="50"
                  cy="50"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="10"
                  r="35"
                  strokeDasharray="164.93361431346415 56.97787143782138"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    repeatCount="indefinite"
                    dur="1s"
                    values="0 50 50;360 50 50"
                    keyTimes="0;1"
                  />
                </circle>
              </svg>
              Generating AI Summary...
            </span>
          ) : (
            "Generate AI Summary"
          )}
        </button>

        {error && (
          <p
            style={{
              color: "#ff4c4c",
              marginBottom: "1rem",
              fontWeight: "700",
              fontSize: "1rem",
              textAlign: "center",
            }}
            role="alert"
          >
            {error}
          </p>
        )}

        {aiSummary && (
          <section
            style={{
              backgroundColor: "#2a2a2a",
              padding: "1.5rem 2rem",
              borderRadius: "12px",
              lineHeight: "1.6",
              fontSize: "1.05rem",
              whiteSpace: "pre-wrap",
              boxShadow: "0 0 15px #b415ff88",
            }}
            aria-live="polite"
          >
            {/* You can format summary more here if you want */}
            {aiSummary.split('\n').map((line, i) => {
              if(line.trim().startsWith("- ")) {
                return <li key={i} style={{ marginLeft: '1.5rem', marginBottom: '0.3rem' }}>{line.replace(/^- /, '')}</li>;
              }
              return <p key={i} style={{ marginBottom: "0.8rem" }}>{line}</p>;
            })}
          </section>
        )}
      </div>
    </div>
  );
};

export default PortfolioSummary;
