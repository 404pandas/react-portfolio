import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "../../assets/images/feedsiouxfalls-logo.png";
import shotHome from "../../assets/screenshots/feedsiouxfalls.png";
import shotHelp from "../../assets/screenshots/02_help.png";
import shotGive from "../../assets/screenshots/03_give.png";
import shotSurvey from "../../assets/screenshots/04_survey.png";
import shotStaffHome from "../../assets/screenshots/05_staff_home.png";
import shotCount from "../../assets/screenshots/06_count.png";
import shotInventory from "../../assets/screenshots/07_inventory.png";
import shotMessages from "../../assets/screenshots/08_messages.png";
// Shares the Who Is...? page's layout classes (whois-*) so both app pages
// look like siblings; only the logo and org callout need their own styles.
import "../../assets/css/whois.css";
import "../../assets/css/feedsiouxfalls.css";

gsap.registerPlugin(ScrollTrigger);

const SITE_URL = "https://feed-sioux-falls-website.onrender.com";

// Add more phone screenshots here; the section hides itself when empty.
const screenshots = [
  { src: shotHome, label: "Home" },
  { src: shotHelp, label: "Get Help" },
  { src: shotGive, label: "Give" },
  { src: shotSurvey, label: "Community Survey" },
  { src: shotStaffHome, label: "Staff Home" },
  { src: shotCount, label: "Count" },
  { src: shotInventory, label: "Inventory" },
  { src: shotMessages, label: "Messages" },
];

const features = [
  {
    title: "Get Help, Fast",
    desc: "Neighbors see the 24/7 pantry's address, live open status, and one-tap directions, plus where to find the Saturday street outreach crew.",
  },
  {
    title: "Community Survey",
    desc: "A 3-minute anonymous survey in English and Spanish with read-aloud, offline-safe progress, and a printable paper version for in-person outreach.",
  },
  {
    title: "Safety by Design",
    desc: "A Quick Exit button (or Esc) wipes answers and leaves instantly. Contact details are stored apart from survey answers so they can't be matched.",
  },
  {
    title: "Giving Made Simple",
    desc: "Shows what the pantry needs right now and routes donations through card, Zeffy, Pledge, and text-to-give.",
  },
  {
    title: "Staff & Volunteer Tools",
    desc: "Inventory, quick-stock, receipts, budgeting, events, and messaging, with push notifications to the team's phones.",
  },
  {
    title: "Data for Advocacy",
    desc: "Survey results, public impact numbers, and a report builder that turns hand counts into totals the team can bring to City Council.",
  },
];

const tech = [
  "React",
  "Vite",
  "React Router",
  "Expo",
  "Push Notifications",
  "Stripe",
  "English / Spanish",
  "Render",
];

export default function FeedSiouxFalls() {
  const containerRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .fromTo(".fsf-logo", { y: -30, opacity: 0, scale: 0.9 }, { y: 0, opacity: 1, scale: 1, duration: 0.7 })
        .fromTo(".whois-tagline", { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.35")
        .fromTo(".whois-btn", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, stagger: 0.14, ease: "back.out(2)", duration: 0.42 }, "-=0.25")
        .fromTo(".whois-platform", { opacity: 0 }, { opacity: 1, duration: 0.4 }, "-=0.1");

      gsap.utils.toArray(".whois-section-title").forEach((el) => {
        gsap.fromTo(el, { opacity: 0, x: -36 }, {
          opacity: 1, x: 0, duration: 0.55, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 87%" },
        });
      });

      gsap.fromTo(".whois-feature-card", { opacity: 0, y: 38, scale: 0.94 }, {
        opacity: 1, y: 0, scale: 1, stagger: 0.1, duration: 0.5, ease: "power2.out",
        scrollTrigger: { trigger: ".whois-features-grid", start: "top 88%" },
      });

      gsap.fromTo(".whois-chip", { scale: 0, opacity: 0 }, {
        scale: 1, opacity: 1, stagger: 0.045, ease: "back.out(1.8)", duration: 0.35,
        scrollTrigger: { trigger: ".whois-chips", start: "top 88%" },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="whois-container">
      {/* ── Hero ── */}
      <div className="whois-hero">
        <h1 className="fsf-visually-hidden">Feed Sioux Falls</h1>
        <img src={logo} alt="Feed Sioux Falls logo" className="fsf-logo" />
        <p className="whois-tagline">
          A web and mobile platform I built for Feed Sioux Falls, a nonprofit
          running a 24/7 community pantry and Saturday street outreach. Neighbors
          can find help and see what's needed; staff and volunteers run
          inventory, events, and community data from one place.
        </p>
        <div className="whois-cta">
          <a className="whois-btn" href={SITE_URL} target="_blank" rel="noreferrer">
            Visit the Site
          </a>
          <a
            className="whois-btn whois-btn-outline"
            href={`${SITE_URL}/privacy`}
            target="_blank"
            rel="noreferrer"
          >
            Privacy Policy
          </a>
        </div>
        <span className="whois-platform">Web · Mobile</span>
      </div>

      {/* ── The mission ── */}
      <blockquote className="fsf-mission">
        “Food is a human right. No one should be hungry.”
        <cite>Feed Sioux Falls, 501(c)(3) nonprofit</cite>
      </blockquote>

      {/* ── Screenshots (only once some are added above) ── */}
      {screenshots.length > 0 && (
        <>
          <h2 className="whois-section-title">Screenshots</h2>
          <div className="whois-screenshots-track">
            {screenshots.map(({ src, label }) => (
              <div key={label} className="whois-screenshot-item">
                <img src={src} alt={label} className="whois-screenshot-img" loading="lazy" />
                <span className="whois-screenshot-label">{label}</span>
              </div>
            ))}
          </div>
        </>
      )}

      {/* ── Features ── */}
      <h2 className="whois-section-title">Features</h2>
      <div className="whois-features-grid">
        {features.map(({ title, desc }) => (
          <div key={title} className="whois-feature-card">
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>

      {/* ── Tech Stack ── */}
      <h2 className="whois-section-title">Tech Stack</h2>
      <div className="whois-chips">
        {tech.map((t) => (
          <span key={t} className="whois-chip">{t}</span>
        ))}
      </div>
    </div>
  );
}
