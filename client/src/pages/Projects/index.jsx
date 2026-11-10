import { useState, useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import data from "./data.json";
import "../../assets/css/projects.css";

// Static stills
import comingSoon from "../../assets/images/coming-soon.jpg";
import simpPort from "../../assets/images/simp-portfolio.png";
import witcherssatchel from "../../assets/images/witcherssatchel.png";
import whois from "../../assets/screenshots/whois.jpg";
import feedsiouxfalls from "../../assets/screenshots/feedsiouxfalls.png";

// Walkthroughs: a small poster frame for the grid + an MP4 (converted from
// the old GIFs; ~15MB total instead of ~113MB) that only loads on demand.
import blueyapiPoster from "../../assets/posters/blueyapi.jpg";
import blueyapiVideo from "../../assets/video/blueyapi.mp4";
import cortezcafePoster from "../../assets/posters/cortezcafe.jpg";
import cortezcafeVideo from "../../assets/video/cortezcafe.mp4";
import contractboardPoster from "../../assets/posters/contractboard.jpg";
import contractboardVideo from "../../assets/video/contractboard.mp4";
import codingquizPoster from "../../assets/posters/codingquiz.jpg";
import codingquizVideo from "../../assets/video/codingquiz.mp4";
import jacobeleniusPoster from "../../assets/posters/jacobelenius.jpg";
import jacobeleniusVideo from "../../assets/video/jacobelenius.mp4";
import jaskiersjournalPoster from "../../assets/posters/jaskiersjournal.jpg";
import jaskiersjournalVideo from "../../assets/video/jaskiersjournal.mp4";
import passwordgeneratorPoster from "../../assets/posters/passwordgenerator.jpg";
import passwordgeneratorVideo from "../../assets/video/passwordgenerator.mp4";
import poohPoster from "../../assets/posters/pooh-walkthrough.jpg";
import poohVideo from "../../assets/video/pooh-walkthrough.mp4";
import burnbookPoster from "../../assets/posters/burnbook.jpg";
import burnbookVideo from "../../assets/video/burnbook.mp4";
import novigradPoster from "../../assets/posters/novigradunderground.jpg";
import novigradVideo from "../../assets/video/novigradunderground.mp4";
import standardPortfolioPoster from "../../assets/posters/standard_portfolio.jpg";
import standardPortfolioVideo from "../../assets/video/standard_portfolio.mp4";

// Keyed by the `image` field in data.json.
const mediaMap = {
  comingSoon: { poster: comingSoon },
  simpPort: { poster: simpPort },
  witcherssatchel: { poster: witcherssatchel, tall: true },
  whois: { poster: whois, tall: true },
  feedsiouxfalls: { poster: feedsiouxfalls, tall: true },
  blueyapi: { poster: blueyapiPoster, video: blueyapiVideo },
  cortezcafe: { poster: cortezcafePoster, video: cortezcafeVideo },
  scheduler: { poster: contractboardPoster, video: contractboardVideo },
  quiz: { poster: codingquizPoster, video: codingquizVideo },
  jacob: { poster: jacobeleniusPoster, video: jacobeleniusVideo },
  notetaker: { poster: jaskiersjournalPoster, video: jaskiersjournalVideo },
  passgen: { poster: passwordgeneratorPoster, video: passwordgeneratorVideo },
  pooh: { poster: poohPoster, video: poohVideo },
  burnbook: { poster: burnbookPoster, video: burnbookVideo },
  novigradunderground: { poster: novigradPoster, video: novigradVideo },
  standardPorfolio: {
    poster: standardPortfolioPoster,
    video: standardPortfolioVideo,
  },
};

const canHover = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(hover: hover) and (pointer: fine)").matches;

// ── ProjectCard ──────────────────────────────────────────────────────────────
// Every card shows its poster immediately (so phones see real previews).
// On pointer devices, hovering or focusing mounts the walkthrough video,
// which fades in over the poster once it can play.
function ProjectCard({ project, media, onSelect }) {
  const [active, setActive] = useState(false);
  const [videoRequested, setVideoRequested] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef(null);

  const activate = () => {
    setActive(true);
    if (media.video && canHover()) setVideoRequested(true);
  };
  const deactivate = () => setActive(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (active) v.play().catch(() => {});
    else v.pause();
  }, [active, videoRequested]);

  return (
    <div
      className={`project-card${active ? " is-hovered" : ""}`}
      onMouseEnter={activate}
      onMouseLeave={deactivate}
      onFocus={activate}
      onBlur={deactivate}
      onClick={(e) => onSelect(project, e.currentTarget)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(project, e.currentTarget);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Open ${project.title}`}
    >
      <img
        src={media.poster}
        alt=""
        className={`project-card-img${
          media.contain ? " project-card-img--contain" : ""
        }`}
        loading="lazy"
        draggable={false}
      />
      {videoRequested && (
        <video
          ref={videoRef}
          src={media.video}
          className={`project-card-video${videoReady ? " is-ready" : ""}`}
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => setVideoReady(true)}
          aria-hidden="true"
        />
      )}
      {active && videoRequested && !videoReady && (
        <span className="project-card-spinner project-card-spinner--corner" />
      )}
      <div className="project-card-label">
        <span className="project-card-title">{project.title}</span>
      </div>
    </div>
  );
}

// ── Projects page ────────────────────────────────────────────────────────────
const Projects = () => {
  const [expandedItem, setExpandedItem] = useState(null);
  const expandedRef = useRef(null);
  const closeBtnRef = useRef(null);
  const openerRef = useRef(null); // the card to return focus to on close
  const gsapRan = useRef(false);

  useEffect(() => {
    if (gsapRan.current) return;
    gsapRan.current = true;
    gsap.fromTo(
      ".project-card",
      { opacity: 0, y: -24, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.055,
        duration: 0.4,
        ease: "back.out(1.4)",
      }
    );
  }, []);

  useEffect(() => {
    if (!expandedItem) return;
    closeBtnRef.current?.focus({ preventScroll: true });
    gsap.fromTo(
      "#expanded-project",
      { xPercent: 100 },
      { xPercent: 0, duration: 0.4, ease: "power3.out" }
    );
    gsap.fromTo(
      "#expanded-inner > *",
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, stagger: 0.07, ease: "power2.out", delay: 0.22 }
    );
  }, [expandedItem]);

  const handleSelect = useCallback((project, opener) => {
    openerRef.current = opener;
    setExpandedItem(project);
  }, []);

  const handleClose = useCallback(() => {
    setExpandedItem(null);
    openerRef.current?.focus({ preventScroll: true });
  }, []);

  // Close on outside click/tap and on Escape.
  useEffect(() => {
    if (!expandedItem) return;
    const onPointerDown = (e) => {
      if (expandedRef.current && !expandedRef.current.contains(e.target)) {
        // Let a click on another card switch projects instead of just closing.
        if (!e.target.closest(".project-card")) handleClose();
      }
    };
    const onKeyDown = (e) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [expandedItem, handleClose]);

  const media = expandedItem ? mediaMap[expandedItem.image] : null;

  return (
    <>
      <div id="projects-cont">
        <div id="image-list">
          {data.map((project) => (
            <ProjectCard
              key={project.key}
              project={project}
              media={mediaMap[project.image] || { poster: comingSoon }}
              onSelect={handleSelect}
            />
          ))}
        </div>
      </div>

      {expandedItem && (
        <aside
          id="expanded-project"
          ref={expandedRef}
          role="dialog"
          aria-labelledby="expanded-title"
        >
          <div id="expanded-inner">
            <button
              ref={closeBtnRef}
              className="expanded-close"
              onClick={handleClose}
              aria-label="Close project details"
            >
              ✕
            </button>

            {media?.video ? (
              <video
                key={media.video}
                src={media.video}
                poster={media.poster}
                id="expanded-image"
                className="expanded-image"
                autoPlay
                muted
                loop
                playsInline
                aria-label={`${expandedItem.title} walkthrough`}
              />
            ) : (
              <img
                src={media?.poster || comingSoon}
                alt={expandedItem.title}
                id="expanded-image"
                className={
                  media?.tall
                    ? "expanded-image expanded-image--small"
                    : "expanded-image"
                }
              />
            )}

            <h2 id="expanded-title" className="expanded-title">
              {expandedItem.title}
            </h2>

            <p className="expanded-desc">{expandedItem.description}</p>

            <div className="expanded-rope-divider" />

            <div id="project-a-cont">
              <a
                className="project-a"
                href={expandedItem.deployment}
                target="_blank"
                rel="noreferrer"
              >
                Deployment
              </a>
              {expandedItem.code && (
                <a
                  className="project-a"
                  href={expandedItem.code}
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
              )}
            </div>
          </div>
        </aside>
      )}
    </>
  );
};

export default Projects;
