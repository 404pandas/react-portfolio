import { useEffect } from "react";
import gsap from "gsap";
import "../../assets/css/technologies.css";
import Compass from "../../components/Compass";

const Technologies = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".compass-title",
      { opacity: 0 },
      { opacity: 1, duration: 0.65, ease: "power2.out" }
    );
    return () => tl.kill();
  }, []);

  return (
    <div id="tech-cont">
      <p className="compass-title">
        Hover or swipe the direction on the compass you would like to navigate!
      </p>
      <Compass />
    </div>
  );
};

export default Technologies;
