import express from "express";
import { Resend } from "resend";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { existsSync } from "fs";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
app.use(express.json());

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
app.post("/api/contact", async (req, res) => {
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
    console.log("Sending email from:", email, "name:", topic);
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "mary.panda.jackson@gmail.com",
      reply_to: email,
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

// Serve static frontend only if dist exists (Netlify deploys handle frontend separately)
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const clientDistPath = path.join(__dirname, "../client/dist");

if (process.env.NODE_ENV === "production" && existsSync(clientDistPath)) {
  app.use(express.static(clientDistPath));
  app.get("*", (req, res) => {
    res.sendFile(path.join(clientDistPath, "index.html"));
  });
}

const PORT = process.env.PORT || 5001;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
