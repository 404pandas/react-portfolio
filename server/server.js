import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
app.use(express.json());

// ✅ Only use CORS once with correct domain and no port
app.use(
  cors({
    origin: "https://react-portfolio-iqr5.onrender.com",
    methods: ["POST"],
  })
);

// 📬 Contact route
app.post("/api/contact", async (req, res) => {
  const { topic, message, email } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER, // your Gmail
      pass: process.env.MAIL_PASS, // Gmail app password
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "mary.panda.jackson@gmail.com",
      subject: `Contact Form: ${topic}`,
      text: message,
      replyTo: email,
    });

    res.status(200).send({ success: true });
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).send({ error: "Email could not be sent" });
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
  console.log(
    `🚀 Server running on port https://www.react-portfolio-iqr5.onrender.com:${PORT}`
  )
);
