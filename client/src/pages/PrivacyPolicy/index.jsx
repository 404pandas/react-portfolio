import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { EnglishPolicy, PiratePolicy } from "../../components/PolicyContent";
import "../../assets/css/privacypolicy.css";

export default function PrivacyPolicy() {
  const [pirateMode, setPirateMode] = useState(
    localStorage.getItem("pirateTalk") === "true"
  );
  const pageRef = useRef();

  // Scroll unfurls on mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        ".policy-scroll",
        { scaleY: 0, opacity: 0, transformOrigin: "top center" },
        { scaleY: 1, opacity: 1, duration: 0.55 }
      )
        .fromTo(
          ".policy-seal",
          { scale: 0, rotation: -20 },
          { scale: 1, rotation: 0, duration: 0.45, ease: "back.out(2)" },
          "-=0.2"
        )
        .fromTo(
          ".policy-header",
          { opacity: 0, y: -16 },
          { opacity: 1, y: 0, duration: 0.4 },
          "-=0.25"
        )
        .fromTo(
          ".policy-toggle",
          { opacity: 0, scale: 0.92 },
          { opacity: 1, scale: 1, duration: 0.35, ease: "back.out(1.7)" },
          "-=0.15"
        )
        .fromTo(
          ".policy-body",
          { opacity: 0 },
          { opacity: 1, duration: 0.35 },
          "-=0.1"
        );
    }, pageRef);
    return () => ctx.revert();
  }, []);

  // Swap content with a quick fade when mode changes
  useEffect(() => {
    gsap.fromTo(
      ".policy-body",
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }
    );
  }, [pirateMode]);

  const handleToggle = (pirate) => {
    setPirateMode(pirate);
    localStorage.setItem("pirateTalk", pirate);
  };

  return (
    <div className="policy-page" ref={pageRef}>
      <div className="policy-back">
        <Link to="/whois">← Back to Who Is...?</Link>
      </div>

      <div className="policy-scroll">

        {/* Wax seal */}
        <div className="policy-seal">
          <div className={`seal-disc ${pirateMode ? "seal-pirate" : ""}`}>
            ME
          </div>
        </div>

        {/* Title */}
        <div className="policy-header">
          <h1 className="policy-title">
            {pirateMode
              ? "The Captain's Charter of Privacy"
              : "Privacy Policy"}
          </h1>
          {pirateMode && (
            <p className="policy-subtitle">~ As sworn upon the Jolly Roger ~</p>
          )}
        </div>

        {/* Mode toggle */}
        <div className="policy-toggle">
          <button
            className={`toggle-btn ${!pirateMode ? "active" : ""}`}
            onClick={() => handleToggle(false)}
            disabled={!pirateMode}
          >
            Legal Text
          </button>
          <span className="toggle-anchor">|</span>
          <button
            className={`toggle-btn pirate-btn ${pirateMode ? "active" : ""}`}
            onClick={() => handleToggle(true)}
            disabled={pirateMode}
          >
            Pirate Charter
          </button>
        </div>

        {/* Rope divider */}
        <div className="policy-rope" />

        {/* Policy content */}
        <div className="policy-body">
          {pirateMode ? <PiratePolicy /> : <EnglishPolicy />}
        </div>

        {/* Bottom stamp */}
        <div className="policy-stamp">
          <div className="stamp-circle">
            {pirateMode ? "SEALED\nWITH\nBLOOD" : "LEGALLY\nBINDING"}
          </div>
        </div>

      </div>
    </div>
  );
}
