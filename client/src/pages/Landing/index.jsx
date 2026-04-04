import { useEffect, useRef } from "react";
import gsap from "gsap";
import MapIcon from "../../components/MapIcon";
import Ship from "../../components/Ship";
import "../../assets/css/landing.css";

const Landing = () => {
  const nameRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Name box slides in from the left
      tl.fromTo(
        "#name",
        { x: -90, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.75 }
      )
        // "Mary Elenius" heading rises up inside the box
        .fromTo(
          "#name h1",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.45 },
          "-=0.45"
        )
        // Vertical rule expands downward
        .fromTo(
          "#vr",
          { scaleY: 0, opacity: 0, transformOrigin: "top center" },
          { scaleY: 1, opacity: 1, duration: 0.4 },
          "-=0.25"
        )
        // Subtitle lines drift in from the right
        .fromTo(
          "#subtitle h2",
          { x: 24, opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.14, duration: 0.4 },
          "-=0.2"
        );
    }, nameRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={nameRef}>
      <div id="name">
        <h1>Mary Elenius</h1>
        <div id="vr" className="subtitles"></div>
        <div id="subtitle">
          <h2 className="subtitles">Developer. Mother.</h2>
          <h2 className="subtitles">Wildlife Rescuer.</h2>
        </div>
      </div>
      <MapIcon />
      <Ship />
    </div>
  );
};

export default Landing;
