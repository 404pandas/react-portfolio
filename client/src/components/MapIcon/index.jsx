import { useEffect, useRef, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import gsap from "gsap";
import { setHovered } from "../../features/iconNearShip/iconNearShipSlice";
import knight from "../../assets/images/knight.svg";
import dragonBuilding from "../../assets/images/dragon-bldg.svg";
import building from "../../assets/images/bldg.svg";
import knights from "../../assets/images/knights.svg";
import phone from "../../assets/images/phone.svg";
import whois from "../../assets/images/who-is.svg";
import pantry from "../../assets/images/pantry.svg";
import "./mapicon.css";
import Grid from "@mui/material/Unstable_Grid2";
import NewReleasesIcon from "@mui/icons-material/NewReleases";

export const icons = [
  { id: "knight", src: knight, text: "About Me", route: "about" },
  { id: "dragon", src: dragonBuilding, text: "Projects", route: "projects" },
  { id: "building", src: building, text: "Technologies", route: "technologies" },
  { id: "contact", src: knights, text: "Contact", route: "contact" },
  { id: "phone", src: phone, text: "Mobile", route: "phone" },
  { id: "who-is", src: whois, text: "Who Is?", route: "whois" },
  { id: "fsf", src: pantry, text: "Feed Sioux Falls", route: "feed-sioux-falls", isNew: true },
];

// Fired by the keyboard-sailed Ship when Enter is pressed over an icon, so
// both mouse clicks and the ship get the same "dig" animation before routing.
export const DIG_EVENT = "map:dig";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const finePointer = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(hover: hover) and (pointer: fine)").matches;

const SPARKS = 10;

/*
 * Animation layers per icon (each its own element so transforms never fight):
 *   .icon-float  idle "bobbing at sea" loop
 *   .icon-art    ink-bleed entrance, 3D tilt + magnetic pull, glow, dig squash
 *   .icon-ripples / .icon-x / .icon-spark  effects around the icon
 */
const MapIcon = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const iconsState = useSelector((state) => state.icons.icons);
  const rootRef = useRef(null);
  const tiltRef = useRef({}); // per-icon quickTo setters
  // Everything starts inactive, so the first pass is a no-op instead of
  // fighting the entrance animation's filter.
  const prevActive = useRef(Object.fromEntries(icons.map((i) => [i.id, false])));
  const digging = useRef(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const q = (sel) => rootRef.current?.querySelector(sel);

  // ── Screen / input detection ──────────────────────────────────────────────
  useEffect(() => {
    const checkScreenSize = () => setIsMediumScreen(window.innerWidth >= 900);
    checkScreenSize();
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // ── Entrance + idle loops ─────────────────────────────────────────────────
  useEffect(() => {
    const reduce = prefersReducedMotion();
    const ctx = gsap.context(() => {
      // Per-icon smoothed setters for tilt + magnetic pull.
      icons.forEach(({ id }) => {
        const art = rootRef.current?.querySelector(`[data-icon="${id}"] .icon-art`);
        if (!art) return;
        gsap.set(art, { transformPerspective: 650 });
        const opts = { duration: 0.5, ease: "power3.out" };
        tiltRef.current[id] = {
          rx: gsap.quickTo(art, "rotationX", opts),
          ry: gsap.quickTo(art, "rotationY", opts),
          x: gsap.quickTo(art, "x", opts),
          y: gsap.quickTo(art, "y", opts),
        };
      });

      if (reduce) {
        gsap.fromTo(".icon-art, .poi, .icon-new", { opacity: 0 }, { opacity: 1, duration: 0.3 });
        return;
      }

      // Ink bleeding onto parchment: a soft circular reveal that sharpens
      // from blurry, rippling out from the centre of the map.
      gsap.fromTo(
        ".icon-art",
        { clipPath: "circle(0% at 50% 65%)", filter: "blur(10px)", y: 26, opacity: 0 },
        {
          clipPath: "circle(75% at 50% 50%)",
          filter: "blur(0px)",
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
          stagger: { each: 0.12, from: "center" },
          delay: 0.3,
          clearProps: "clipPath,filter",
        }
      );

      // Point-of-interest pins drop in like map tacks.
      // (opacity only: the pins' CSS pulse owns their transform)
      gsap.fromTo(".poi", { opacity: 0 }, { opacity: 1, duration: 0.5, stagger: 0.08, delay: 1.0 });

      gsap.fromTo(
        ".icon-new",
        { scale: 0, rotation: -25 },
        { scale: 1, rotation: -8, ease: "back.out(3)", duration: 0.5, delay: 1.6 }
      );

      // Idle: every icon bobs on its own swell, out of sync with its
      // neighbours, so the map feels alive without anything looping in unison.
      gsap.utils.toArray(".icon-float").forEach((el) => {
        gsap.to(el, {
          y: () => gsap.utils.random(-9, -4),
          rotation: () => gsap.utils.random(-2.5, 2.5),
          duration: () => gsap.utils.random(2.2, 3.4),
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: gsap.utils.random(0, 1.5) + 1.2,
        });
      });
    }, rootRef);


    return () => ctx.revert();
  }, []);

  // ── Active state (mouse hover, keyboard focus, or the ship sailing near) ──
  useEffect(() => {
    const reduce = prefersReducedMotion();
    icons.forEach(({ id }) => {
      const active = Boolean(iconsState[id]?.hovered);
      if (prevActive.current[id] === active) return;
      prevActive.current[id] = active;

      const art = q(`[data-icon="${id}"] .icon-art`);
      if (!art) return;
      gsap.killTweensOf(art, "scale,filter");

      if (active) {
        gsap.to(art, {
          scale: 1.14,
          filter: "drop-shadow(0 0 16px rgba(255, 196, 70, 0.95)) drop-shadow(0 6px 4px rgba(40, 25, 10, 0.35))",
          duration: reduce ? 0 : 0.6,
          ease: "elastic.out(1, 0.45)",
        });
      } else {
        gsap.to(art, {
          scale: 1,
          filter: "drop-shadow(0 0 0px rgba(255, 196, 70, 0)) drop-shadow(0 0px 0px rgba(40, 25, 10, 0))",
          duration: reduce ? 0 : 0.35,
          ease: "power2.out",
        });
        const t = tiltRef.current[id];
        if (t) {
          t.rx(0);
          t.ry(0);
          t.x(0);
          t.y(0);
        }
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [iconsState]);

  const setActive = (id, hovered) => dispatch(setHovered({ icon: id, hovered }));

  // 3D tilt toward the cursor plus a small magnetic pull.
  const handlePointerMove = (e, id) => {
    if (!finePointer() || prefersReducedMotion()) return;
    const t = tiltRef.current[id];
    if (!t) return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5; // -0.5 .. 0.5
    const py = (e.clientY - r.top) / r.height - 0.5;
    t.ry(px * 26);
    t.rx(-py * 20);
    t.x(px * 14);
    t.y(py * 10);
  };

  // ── "X marks the spot" dig, then sail to the page ─────────────────────────
  const dig = useCallback(
    (id, route) => {
      if (digging.current) return;
      if (prefersReducedMotion()) {
        navigate(`/${route}`);
        return;
      }
      digging.current = true;
      const scope = rootRef.current?.querySelector(`[data-icon="${id}"]`);
      if (!scope) {
        navigate(`/${route}`);
        return;
      }
      const art = scope.querySelector(".icon-art");
      const strokes = scope.querySelectorAll(".icon-x path");
      const sparks = scope.querySelectorAll(".icon-spark");

      const tl = gsap.timeline({
        onComplete: () => {
          digging.current = false;
          icons.forEach((i) => setActive(i.id, false));
          navigate(`/${route}`);
        },
      });

      tl.set(scope.querySelector(".icon-x"), { autoAlpha: 1 })
        .fromTo(strokes, { strokeDashoffset: 120 }, { strokeDashoffset: 0, duration: 0.18, stagger: 0.12, ease: "power2.in" })
        // shovel strike: squash then spring back
        .to(art, { scaleY: 0.82, scaleX: 1.22, duration: 0.09, ease: "power2.in" }, "-=0.05")
        .to(art, { scaleY: 1.18, scaleX: 1.08, duration: 0.5, ease: "elastic.out(1.2, 0.35)" })
        // treasure burst
        .fromTo(
          sparks,
          { x: 0, y: 0, scale: 0.4, autoAlpha: 1 },
          {
            x: (i) => Math.cos((i / SPARKS) * Math.PI * 2) * gsap.utils.random(70, 120),
            y: (i) => Math.sin((i / SPARKS) * Math.PI * 2) * gsap.utils.random(55, 100) - 20,
            scale: () => gsap.utils.random(0.8, 1.4),
            rotation: () => gsap.utils.random(-180, 180),
            autoAlpha: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "<"
        )
        .to(scope, { autoAlpha: 0.0001, y: -12, duration: 0.25, ease: "power2.in" }, "-=0.3");
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [navigate]
  );

  // The ship asks us to dig when Enter is pressed over an icon.
  useEffect(() => {
    const onDig = (e) => {
      const icon = icons.find((i) => i.route === e.detail);
      if (icon) dig(icon.id, icon.route);
    };
    window.addEventListener(DIG_EVENT, onDig);
    return () => window.removeEventListener(DIG_EVENT, onDig);
  }, [dig]);

  const alwaysShowLabels = !isMediumScreen && isTouchDevice;

  return (
    <div className="icon-container" ref={rootRef}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {icons.map(({ id, src, text, route, isNew }) => {
          const active = Boolean(iconsState[id]?.hovered);
          return (
            <Grid
              key={id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className={`ind-items ind-${route}`}
            >
              <div
                className={`nav-item nav-${route}${active ? " is-active" : ""}`}
                data-icon={id}
              >
                <NewReleasesIcon className="poi" aria-hidden="true" />
                <Link
                  to={`/${route}`}
                  aria-label={text}
                  onClick={(e) => {
                    // Let modified clicks (new tab etc.) behave normally.
                    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
                    e.preventDefault();
                    dig(id, route);
                  }}
                  onMouseEnter={() => setActive(id, true)}
                  onMouseLeave={() => setActive(id, false)}
                  onFocus={() => setActive(id, true)}
                  onBlur={() => setActive(id, false)}
                  onPointerMove={(e) => handlePointerMove(e, id)}
                >
                  <span className="icon-stage">
                    <span className="icon-ripples" aria-hidden="true">
                      <i />
                      <i />
                      <i />
                    </span>
                    <span className="icon-float">
                      <span className="icon-art">
                        <img src={src} alt="" id={id} className={`landing-icon ${id}Icon`} draggable={false} />
                      </span>
                    </span>
                    <svg className="icon-x" viewBox="0 0 100 100" aria-hidden="true">
                      <path d="M22 22 L78 78" pathLength="120" />
                      <path d="M78 22 L22 78" pathLength="120" />
                    </svg>
                    {Array.from({ length: SPARKS }, (_, i) => (
                      <span key={i} className={`icon-spark icon-spark--${i % 3}`} aria-hidden="true" />
                    ))}
                    {isNew && (
                      <span className="icon-new" aria-hidden="true">
                        New!
                      </span>
                    )}
                  </span>
                  <h2 className={`ic-h2${alwaysShowLabels ? " is-always" : ""}`}>{text}</h2>
                </Link>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default MapIcon;
