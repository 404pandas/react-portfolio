import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { error } from "console";

dotenv.config();

const app = express();
app.use(express.json());

// ✅ Only use CORS once with correct domain and no port
app.use(
  cors({
    origin: [
      "https://react-portfolio-iqr5.onrender.com",
      "https://maryelenius.com",
    ],
    methods: ["POST"],
  })
);

// 📬 Contact route
app.post("/api/contact", async (req, res) => {
  const { topic, message, email } = req.body;

  if (!topic || !message || !email) {
    return res.status(400).send({ error: "All fields are required." });
  }

  if (typeof topic !== "string" || typeof message !== "string" || typeof email !== "string") {
    return res.status(400).send({ error: "Invalid input." });
  }

  if (topic.length > 200 || message.length > 5000) {
    return res.status(400).send({ error: "Input exceeds maximum length." });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).send({ error: "Invalid email address." });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER, // your Gmail
      pass: process.env.MAIL_PASS, // Gmail app password
    },
  });

  try {
    console.log("Sending email with:", { topic, message, email });
    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: "mary.panda.jackson@gmail.com",
      subject: `Contact Form: ${topic}`,
      text: `From: ${email}\n\n${message}`, // visitor info inside message
      replyTo: email, // replies go to visitor
    });
    res.status(200).send({ success: true });
    console.log("Email sent successfully");
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).send({ error: `Email could not be sent. ${err.message}` });
  }
});

// ✅ Serve static files if in production
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const clientDistPath = path.join(__dirname, "../client/dist");

if (process.env.NODE_ENV === "production") {
  app.use(express.static(clientDistPath));

  // Catch-all to serve React app
  app.get("*", (req, res) => {
    res.sendFile(path.join(clientDistPath, "index.html"));
  });
}

const PORT = process.env.PORT || 5001;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
