import { useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import gsap from "gsap";
import PirateLogBook from "../../components/PirateLogbook";

const About = () => {
  // Book entrance — scales and fades in from slightly below
  useEffect(() => {
    const tween = gsap.fromTo(
      ".book-container",
      { opacity: 0, y: 28, scale: 0.94 },
      { opacity: 1, y: 0, scale: 1, duration: 0.85, ease: "power3.out", delay: 0.1 }
    );
    return () => tween.kill();
  }, []);

  return (
    <Container>
      <Grid container id="about-cont" justifyContent="center" marginTop={5}>
        <PirateLogBook />
      </Grid>
    </Container>
  );
};

export default About;
