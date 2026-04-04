import { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControlLabel,
  Switch,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { EnglishPolicy, PiratePolicy } from "../../components/PolicyContent";
import "../../assets/css/whois.css";

const screenshots = [
  { src: "/screenshots/login.jpg", label: "Login" },
  { src: "/screenshots/signup.jpg", label: "Sign Up" },
  { src: "/screenshots/create_game.jpg", label: "Create Game" },
  { src: "/screenshots/lobby_ready.jpg", label: "Lobby" },
  { src: "/screenshots/in_game.jpg", label: "In Game" },
  { src: "/screenshots/in_game_answer_selected.jpg", label: "Answer Selected" },
  { src: "/screenshots/results_both_agreed.jpg", label: "Round Results" },
  { src: "/screenshots/game_complete_results.jpg", label: "Game Complete" },
  { src: "/screenshots/personality_profile1.jpg", label: "Personality Profile" },
  { src: "/screenshots/friends_friends.jpg", label: "Friends" },
];

const features = [
  {
    title: "Real-Time Multiplayer",
    desc: "Two players connect instantly via Socket.IO — questions, answers, and results all sync live with no lag.",
  },
  {
    title: "Personality Profiling",
    desc: "Every game builds a persistent profile tracking how others see you versus how you see yourself, across all categories.",
  },
  {
    title: "Friends & Invites",
    desc: "Add friends, view their profiles, send direct game invites, and manage your social circle with block support.",
  },
  {
    title: "Guest Mode",
    desc: "Jump in with no account. Create one later and your game stats carry over automatically — nothing is lost.",
  },
  {
    title: "Skip & Block",
    desc: "Skip questions that don't fit, or block ones you find inappropriate. You stay in control of every round.",
  },
  {
    title: "Post-Round Chat",
    desc: "React to each other's picks between rounds with a quick in-game chat window before moving to the next question.",
  },
];

const tech = [
  "React Native",
  "Expo",
  "Node.js",
  "Express",
  "Socket.IO",
  "PostgreSQL",
  "Sequelize",
  "Redux",
  "JWT Auth",
  "Google AdMob",
  "Sentry",
  "Stripe",
  "Render",
  "EAS / OTA Updates",
];

export default function WhoIs() {
  const [pirateMode, setPirateMode] = useState(
    localStorage.getItem("pirateTalk") === "true"
  );

  const handlePirateToggle = (e) => {
    const val = e.target.checked;
    setPirateMode(val);
    localStorage.setItem("pirateTalk", val);
  };

  return (
    <Container maxWidth="lg" className="whois-container">
      {/* ── Hero ── */}
      <Box className="whois-hero">
        <Typography variant="h1" className="whois-title">
          Who Is...?
        </Typography>
        <Typography variant="body1" className="whois-tagline">
          A real-time "Who is more likely to..." personality game for couples,
          friends, and family. Answer together, reveal each other's picks, and
          build a shared personality profile one round at a time.
        </Typography>
        <Box className="whois-cta">
          <a
            className="whois-btn"
            href="https://github.com/404pandas/whois/releases/latest"
            target="_blank"
            rel="noreferrer"
          >
            Download APK
          </a>
          <a
            className="whois-btn whois-btn-outline"
            href="https://github.com/404pandas/whois"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </Box>
        <Typography variant="caption" className="whois-platform">
          Android Only · iOS coming soon
        </Typography>
      </Box>

      {/* ── Screenshots ── */}
      <Typography variant="h6" className="whois-section-title">
        Screenshots
      </Typography>
      <Box className="whois-screenshots-track">
        {screenshots.map(({ src, label }) => (
          <Box key={label} className="whois-screenshot-item">
            <img
              src={src}
              alt={label}
              className="whois-screenshot-img"
              loading="lazy"
            />
            <Typography variant="caption" className="whois-screenshot-label">
              {label}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* ── Features ── */}
      <Typography variant="h6" className="whois-section-title">
        Features
      </Typography>
      <Grid container spacing={3} sx={{ mb: 6 }}>
        {features.map(({ title, desc }) => (
          <Grid item xs={12} sm={6} md={4} key={title}>
            <Box className="whois-feature-card">
              <Typography variant="h6">{title}</Typography>
              <Typography variant="body2">{desc}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* ── Tech Stack ── */}
      <Typography variant="h6" className="whois-section-title">
        Tech Stack
      </Typography>
      <Box className="whois-chips">
        {tech.map((t) => (
          <Chip key={t} label={t} className="whois-chip" />
        ))}
      </Box>

      {/* ── Privacy Policy ── */}
      <Typography variant="h6" className="whois-section-title">
        Legal
      </Typography>
      <Accordion className="whois-accordion">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">
            {pirateMode ? "The Captain's Charter of Privacy" : "Privacy Policy"}
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="whois-policy">
          <FormControlLabel
            control={
              <Switch
                checked={pirateMode}
                onChange={handlePirateToggle}
                sx={{
                  "& .MuiSwitch-switchBase.Mui-checked": { color: "#594b39" },
                  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                    backgroundColor: "#594b39",
                  },
                }}
              />
            }
            label="Pirate Talk"
            sx={{ mb: 2 }}
          />
          {pirateMode ? <PiratePolicy /> : <EnglishPolicy />}
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}
