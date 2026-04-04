import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Box, Grid, Chip } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../assets/css/whois.css";

gsap.registerPlugin(ScrollTrigger);

const screenshots = [
  { src: "/screenshots/login.jpg", label: "Login" },
  { src: "/screenshots/signup.jpg", label: "Sign Up" },
  { src: "/screenshots/create_game.jpg", label: "Create Game" },
  { src: "/screenshots/lobby_ready.jpg", label: "Lobby" },
  { src: "/screenshots/in_game.jpg", label: "In Game" },
  { src: "/screenshots/in_game_answer_selected.jpg", label: "Answer Selected" },
  { src: "/screenshots/results_both_agreed.jpg", label: "Round Results" },
  { src: "/screenshots/game_complete_results.jpg", label: "Game Complete" },
  {
    src: "/screenshots/personality_profile1.jpg",
    label: "Personality Profile",
  },
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
  const containerRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Hero: immediate cinematic entrance ──
      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
      heroTl
        .fromTo(
          ".whois-title",
          { y: -36, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 0.75 }
        )
        .fromTo(
          ".whois-tagline",
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.35"
        )
        .fromTo(
          ".whois-btn",
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            stagger: 0.14,
            ease: "back.out(2)",
            duration: 0.42,
          },
          "-=0.25"
        )
        .fromTo(
          ".whois-platform",
          { opacity: 0 },
          { opacity: 1, duration: 0.4 },
          "-=0.1"
        );

      // ── Section titles slide in from the left on scroll ──
      gsap.utils.toArray(".whois-section-title").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -36 },
          {
            opacity: 1,
            x: 0,
            duration: 0.55,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 87%",
            },
          }
        );
      });

      // ── Screenshots track slides in from the right ──
      gsap.fromTo(
        ".whois-screenshots-track",
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".whois-screenshots-track",
            start: "top 88%",
          },
        }
      );

      // Individual screenshot items pop in on scroll
      gsap.utils.toArray(".whois-screenshot-item").forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 20, scale: 0.93 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.45,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: ".whois-screenshots-track",
              start: "top 88%",
            },
            delay: i * 0.06,
          }
        );
      });

      // ── Feature cards stagger up ──
      gsap.fromTo(
        ".whois-feature-card",
        { opacity: 0, y: 38, scale: 0.94 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".whois-feature-card",
            start: "top 88%",
          },
        }
      );

      // ── Tech chips pop in ──
      gsap.fromTo(
        ".whois-chip",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          stagger: 0.045,
          ease: "back.out(1.8)",
          duration: 0.35,
          scrollTrigger: {
            trigger: ".whois-chips",
            start: "top 88%",
          },
        }
      );

      // ── Privacy Policy link fades in ──
      gsap.fromTo(
        ".whois-policy-link",
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".whois-policy-link",
            start: "top 90%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Container ref={containerRef} maxWidth="lg" className="whois-container">
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
            href="https://drive.google.com/file/d/1iRiSHn7CZXkd19QYGYbj8HZ6o-kqLqZ_/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
          >
            Download APK
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

      {/* ── Legal ── */}
      <Typography variant="h6" className="whois-section-title">
        Legal
      </Typography>
      <Link to="/privacy-policy" className="whois-policy-link">
        <Box className="whois-policy-nav">
          <Typography variant="h6" className="whois-policy-nav-title">
            Privacy Policy
          </Typography>
          <Typography variant="body2" className="whois-policy-nav-desc">
            How Who Is...? handles your data — available in plain English or
            full Pirate Charter.
          </Typography>
          <span className="whois-policy-nav-arrow">Read the Charter →</span>
        </Box>
      </Link>
    </Container>
  );
}
