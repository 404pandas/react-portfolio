import { useState, useEffect, useRef } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import gsap from "gsap";

import { validateEmail } from "../../utils/helpers";

function Contact() {
  const [formState, setFormState] = useState({
    topic: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const containerRef = useRef();
  const { topic, email, message } = formState;

  // Entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      tl.fromTo(
        "#contact-cont h4, #contact-cont .MuiTypography-h4",
        { opacity: 0, y: -24 },
        { opacity: 1, y: 0, duration: 0.6 }
      ).fromTo(
        ".MuiTextField-root",
        { opacity: 0, x: -32 },
        { opacity: 1, x: 0, stagger: 0.15, duration: 0.5 },
        "-=0.3"
      ).fromTo(
        "#contact-cont .MuiButton-root",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(2)" },
        "-=0.1"
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  // Shake animation when an error appears
  useEffect(() => {
    if (errorMessage) {
      gsap.fromTo(
        ".error-text",
        { x: 0 },
        {
          x: 7,
          yoyo: true,
          repeat: 5,
          duration: 0.055,
          ease: "power2.inOut",
          clearProps: "x",
        }
      );
    }
  }, [errorMessage]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!errorMessage && topic && email && message) {
      try {
        const response = await fetch(
          "https://react-portfolio-iqr5.onrender.com/api/contact",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ topic, email, message }),
          }
        );
        const data = await response.json();
        if (response.ok) {
          // Success pulse on the button before alerting
          gsap.fromTo(
            "#contact-cont .MuiButton-root",
            { scale: 1 },
            {
              scale: 1.12,
              yoyo: true,
              repeat: 1,
              duration: 0.18,
              ease: "power2.inOut",
              onComplete: () => alert("Message sent successfully!"),
            }
          );
          setFormState({ topic: "", email: "", message: "" });
        } else {
          alert(data.error || "Something went wrong.");
        }
      } catch (err) {
        console.error(err);
        alert("Error sending message: " + (err.message || "Please try again later."));
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setErrorMessage(validateEmail(value) ? "" : "Your email is invalid.");
    } else {
      const fieldLabels = { topic: "Name", message: "Message" };
      setErrorMessage(
        !value.length ? `${fieldLabels[name] || name} is required.` : ""
      );
    }
    setFormState({ ...formState, [name]: value });
  };

  return (
    <Container
      ref={containerRef}
      maxWidth="md"
      id="contact-cont"
      sx={{ paddingTop: "5%", paddingBottom: "5%" }}
    >
      <Grid container spacing={4} justifyContent="center" flexDirection="column">
        <Grid item xs={12}>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontFamily: "'Merienda', cursive" }}
          >
            Get in Touch
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <form id="contact-form" onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Name"
                  name="topic"
                  variant="outlined"
                  value={topic}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  variant="outlined"
                  type="email"
                  value={email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  variant="outlined"
                  multiline
                  rows={5}
                  value={message}
                  onChange={handleChange}
                />
              </Grid>

              {errorMessage && (
                <Grid item xs={12}>
                  <Typography
                    variant="body2"
                    className="error-text"
                    sx={{ color: "red" }}
                  >
                    {errorMessage}
                  </Typography>
                </Grid>
              )}

              <Grid item xs={12} textAlign="center">
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: "var(--brown)",
                    "&:hover": { backgroundColor: "var(--dark-tan)" },
                    fontFamily: "'Lora', serif",
                    padding: "0.5rem 2rem",
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;
