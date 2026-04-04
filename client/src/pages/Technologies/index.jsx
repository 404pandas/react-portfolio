import { useEffect } from "react";
import gsap from "gsap";
import "../../assets/css/technologies.css";
import Compass from "../../components/Compass";
import Container from "@mui/material/Container";

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
    <>
      <Container>
        <h1 className="compass-title">
          Hover or swipe the direction on the compass you would like to
          navigate!
        </h1>
        <Compass />
      </Container>
    </>
  );
};

export default Technologies;
