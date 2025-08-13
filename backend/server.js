import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import fetch from "node-fetch";
import portfolioData from "./portfolioData.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const OPENROUTER_MODEL = process.env.OPENROUTER_MODEL || "mistralai/mixtral-8x7b-instruct";

// Validate API key
if (!OPENROUTER_API_KEY) {
  console.error("ERROR: OPENROUTER_API_KEY not set in .env");
  process.exit(1);
}

// --- Utility: Build system prompt for chatbot ---
function buildSystemPrompt() {
  const { name, role, email, skills, education, projects, achievements } = portfolioData;

  const edu = (education || []).map(e => `${e.degree} at ${e.institution} (${e.year})`).join("; ");
  const projs = (projects || []).map(
    p => `${p.title}: ${p.description} (Tech: ${p.techStack.join(", ")})`
  ).join("\n");
  const ach = (achievements || []).join("; ");
  const skillsList = (skills || []).join(", ");

  return [
    `You are ${name}'s portfolio assistant.`,
    `Answer ONLY using the information below. If the user asks something unrelated to the portfolio, say: "I can only answer questions about ${name}'s portfolio, skills, education, projects, or achievements."`,
    `Be concise, professional, and helpful.`,
    `---`,
    `Name: ${name}`,
    `Role: ${role}`,
    `Email: ${email}`,
    `Skills: ${skillsList}`,
    `Education: ${edu}`,
    `Projects:\n${projs}`,
    `Achievements: ${ach}`,
    `---`
  ].join("\n");
}

// --- Endpoint: Manual quick summary ---
app.get("/api/manual-summary", (req, res) => {
  const summary = `Hi! I am ${portfolioData.name}, ${portfolioData.role}. 
  My key skills include ${portfolioData.skills.slice(0, 5).join(", ")} and more. 
  I have worked on projects like ${portfolioData.projects.map(p => p.title).join(", ")}.`;
  res.json({ summary });
});

// --- Endpoint: AI-generated summary ---
let cachedSummary = null;
app.get("/api/ai-summary", async (req, res) => {
  try {
    if (cachedSummary) {
      return res.json({ summary: cachedSummary });
    }

    const prompt = `Write a professional summary for this portfolio:\n${JSON.stringify(portfolioData, null, 2)}`;

    const r = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: OPENROUTER_MODEL,
        messages: [
          { role: "system", content: "You are a helpful assistant that writes portfolio summaries." },
          { role: "user", content: prompt }
        ],
        temperature: 0.7,
        max_tokens: 350
      })
    });

    const data = await r.json();
    if (!data?.choices?.length) return res.status(500).json({ error: "No summary generated" });

    cachedSummary = data.choices[0].message.content.trim();
    res.json({ summary: cachedSummary });
  } catch (err) {
    console.error("AI Summary Error:", err);
    res.status(500).json({ error: "Failed to generate AI summary" });
  }
});

// --- Endpoint: Chatbot ---
app.post("/api/chat", async (req, res) => {
  try {
    const userMessage = (req.body.message || "").trim();
    if (!userMessage) return res.status(400).json({ error: "Empty message" });

    const systemPrompt = buildSystemPrompt();

    const body = {
      model: OPENROUTER_MODEL,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userMessage }
      ],
      max_tokens: 512,
      temperature: 0.2
    };

    const r = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "X-Title": "Harshitha-Portfolio-Assistant"
      },
      body: JSON.stringify(body)
    });

    if (!r.ok) {
      const txt = await r.text();
      return res.status(502).json({ error: "OpenRouter API error", details: txt });
    }

    const data = await r.json();
    const aiReply = data?.choices?.[0]?.message?.content ?? "Sorry, I couldn't generate a reply.";
    res.json({ reply: aiReply });
  } catch (err) {
    console.error("Chat error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/", (req, res) => res.send("SmartPortfolio backend running"));

app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
