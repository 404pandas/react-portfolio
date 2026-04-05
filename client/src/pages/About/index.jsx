import { useEffect } from "react";
import gsap from "gsap";
import PirateLogBook from "../../components/PirateLogbook";
import "../../assets/css/about.css";

const About = () => {
  useEffect(() => {
    const tween = gsap.fromTo(
      ".book-container",
      { opacity: 0, y: 28, scale: 0.94 },
      { opacity: 1, y: 0, scale: 1, duration: 0.85, ease: "power3.out", delay: 0.1 }
    );
    return () => tween.kill();
  }, []);

  return (
    <div id="about-cont">
      <PirateLogBook />
    </div>
  );
};

export default About;
