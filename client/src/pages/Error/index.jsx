import { useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useRouteError } from "react-router-dom";
import gsap from "gsap";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#error-cont h1",
      { scale: 2.2, opacity: 0, rotation: -8 },
      { scale: 1, opacity: 1, rotation: 0, duration: 0.85, ease: "elastic.out(1, 0.45)" }
    ).fromTo(
      "#error-cont p",
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0, stagger: 0.18, duration: 0.4, ease: "power2.out" },
      "-=0.35"
    );
    return () => tl.kill();
  }, []);

  return (
    <Container>
      <Grid container id="error-cont">
        <Grid item>
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred!</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </Grid>
      </Grid>
    </Container>
  );
}
