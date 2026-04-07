import { useState, useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import data from "./data.json";
import "../../assets/css/projects.css";

import comingSoon from "../../assets/images/coming-soon.jpg";
import blueyapi from "../../assets/images/blueyapi.png";
import cortezcafe from "../../assets/images/cortezcafe.gif";
import scheduler from "../../assets/images/contractboard.gif";
import quiz from "../../assets/images/quiz.png";
import jacob from "../../assets/images/jacob.png";
import simpPort from "../../assets/images/simp-portfolio.png";
import notetaker from "../../assets/images/jaskiersjournal.gif";
import passgen from "../../assets/images/passwordgenerator.gif";
import pooh from "../../assets/images/pooh-walkthrough.gif";
import witcherssatchel from "../../assets/images/witcherssatchel.png";
import kitties from "../../assets/images/kitties.png";
import whois from "../../assets/screenshots/whois.jpg";
import burnbook from "../../assets/images/burnbook.gif";
import novigradunderground from "../../assets/images/novigradunderground.gif";
import standardPorfolio from "../../assets/images/standard_portfolio.gif";

const imageMap = {
  comingSoon,
  blueyapi,
  cortezcafe,
  scheduler,
  quiz,
  jacob,
  simpPort,
  notetaker,
  passgen,
  pooh,
  witcherssatchel,
  kitties,
  whois,
  burnbook,
  novigradunderground,
  standardPorfolio,
};

const isGif = (src) =>
  typeof src === "string" && src.toLowerCase().endsWith(".gif");

// ── ProjectCard ──────────────────────────────────────────────────────────────
// Static images: native lazy loading, shown immediately.
// GIFs: nothing downloads until hover. On hover a spinner shows while the GIF
// fetches, then the image fades in. Zero GIF bytes on page load.
function ProjectCard({ project, imageSrc, onSelect }) {
  const [hovered, setHovered] = useState(false);
  const [gifLoaded, setGifLoaded] = useState(false);
  const gif = isGif(imageSrc);

  // Reset loaded state when mouse leaves so re-hover re-shows spinner briefly
  // if the browser has evicted it — but usually it stays cached.
  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className={`project-card${hovered ? " is-hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect(project)}
      onKeyDown={(e) =>
        (e.key === "Enter" || e.key === " ") && onSelect(project)
      }
      role="button"
      tabIndex={0}
      aria-label={`Open ${project.title}`}
    >
      {gif ? (
        <>
          {/* Placeholder always rendered; hidden once GIF is loaded + hovered */}
          {(!hovered || !gifLoaded) && (
            <div className="project-card-placeholder">
              <span className="project-card-placeholder-title">
                {project.title}
              </span>
              {hovered && !gifLoaded && (
                <span className="project-card-spinner" />
              )}
            </div>
          )}
          {/* GIF img: only gets a src once hovered — no download until then */}
          {hovered && (
            <img
              src={imageSrc}
              alt={project.title}
              className={`project-card-img${
                gifLoaded ? "" : " project-card-img--loading"
              }`}
              onLoad={() => setGifLoaded(true)}
              draggable={false}
            />
          )}
        </>
      ) : (
        <img
          src={imageSrc}
          alt={project.title}
          className="project-card-img"
          loading="lazy"
          draggable={false}
        />
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

  const handleClose = useCallback(() => setExpandedItem(null), []);

  useEffect(() => {
    const onMouseDown = (e) => {
      if (expandedRef.current && !expandedRef.current.contains(e.target)) {
        handleClose();
      }
    };
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [handleClose]);

  return (
    <>
      <div id="projects-cont">
        <div id="image-list">
          {data.map((project) => (
            <ProjectCard
              key={project.key}
              project={project}
              imageSrc={imageMap[project.image]}
              onSelect={setExpandedItem}
            />
          ))}
        </div>
      </div>

      {expandedItem && (
        <aside id="expanded-project" ref={expandedRef}>
          <div id="expanded-inner">
            <button
              className="expanded-close"
              onClick={handleClose}
              aria-label="close"
            >
              ✕
            </button>

            <img
              src={imageMap[expandedItem.image]}
              alt={expandedItem.title}
              id="expanded-image"
            />

            <h2 className="expanded-title">{expandedItem.title}</h2>

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
              <a
                className="project-a"
                href={expandedItem.code}
                target="_blank"
                rel="noreferrer"
              >
                Code
              </a>
            </div>
          </div>
        </aside>
      )}
    </>
  );
};

export default Projects;
