import express from "express";
import { Resend } from "resend";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { existsSync } from "fs";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
// Render (and Netlify) sit behind a proxy; trust it so req.ip is the visitor.
app.set("trust proxy", 1);
app.use(express.json({ limit: "20kb" }));

// Tiny in-memory rate limiter for the contact form: stops a script from
// flooding the inbox or burning through the Resend quota. Resets on restart,
// which is fine for a single small instance.
const RATE_WINDOW_MS = 15 * 60 * 1000;
const RATE_MAX = 5;
const hits = new Map();
function contactRateLimit(req, res, next) {
  const now = Date.now();
  const recent = (hits.get(req.ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_MAX) {
    return res
      .status(429)
      .send({ error: "Too many ravens at once. Try again in a few minutes." });
  }
  recent.push(now);
  hits.set(req.ip, recent);
  next();
}
setInterval(() => {
  const now = Date.now();
  for (const [ip, times] of hits) {
    if (times.every((t) => now - t >= RATE_WINDOW_MS)) hits.delete(ip);
  }
}, RATE_WINDOW_MS).unref();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://react-portfolio-azoy.onrender.com",
      "https://maryelenius.com",
    ],
    methods: ["POST"],
  })
);

const resend = new Resend(process.env.RESEND_API_KEY);

// 📬 Contact route
app.post("/api/contact", contactRateLimit, async (req, res) => {
  const { topic, message, email } = req.body;

  if (!topic || !message || !email) {
    return res.status(400).send({ error: "All fields are required." });
  }

  if (
    typeof topic !== "string" ||
    typeof message !== "string" ||
    typeof email !== "string"
  ) {
    return res.status(400).send({ error: "Invalid input." });
  }

  if (topic.length > 200 || message.length > 5000) {
    return res.status(400).send({ error: "Input exceeds maximum length." });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).send({ error: "Invalid email address." });
  }

  try {
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "mary.panda.jackson@gmail.com",
      // Resend SDK v6 only reads `replyTo` (it maps it to the API's reply_to).
      // The old snake_case key was silently dropped, so replies went nowhere.
      replyTo: email,
      subject: `Portfolio Contact: ${topic}`,
      text: `From: ${topic} <${email}>\n\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(500).send({ error: error.message });
    }

    console.log("Email sent successfully");
    res.status(200).send({ success: true });
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).send({ error: `Email could not be sent. ${err.message}` });
  }
});

// Unknown API routes should 404 as JSON, not fall through to the SPA shell.
app.use("/api", (req, res) => res.status(404).send({ error: "Not found." }));

// Serve the built frontend when it exists (single-service deploy on Render).
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const clientDistPath = path.join(__dirname, "../client/dist");

if (existsSync(clientDistPath)) {
  app.use(express.static(clientDistPath));
  app.get("*", (req, res) => {
    res.sendFile(path.join(clientDistPath, "index.html"));
  });
}

const PORT = process.env.PORT || 5001;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
