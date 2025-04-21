import { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// Local helper
import { validateEmail } from "../../utils/helpers";

function Contact() {
  const [formState, setFormState] = useState({
    topic: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { topic, email, message } = formState;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!errorMessage && topic && email && message) {
      try {
        const response = await fetch(
          "http://react-portfolio-iqr5.onrender.com:5001/api/contact",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              topic: topic, // or add a separate topic input
              email,
              message,
            }),
          }
        );

        const data = await response.json();

        if (response.ok) {
          alert("Message sent successfully!");
          setFormState({ topic: "", email: "", message: "" });
        } else {
          alert(data.error || "Something went wrong.");
        }
      } catch (err) {
        console.error(err);
        alert("Error sending message.");
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      const isValid = validateEmail(value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!value.length) {
        setErrorMessage(`${name} is required.`);
      } else {
        setErrorMessage("");
      }
    }

    setFormState({ ...formState, [name]: value });
  };

  return (
    <Container
      maxWidth='md'
      id='contact-cont'
      sx={{ paddingTop: "5%", paddingBottom: "5%" }}
    >
      <Grid
        container
        spacing={4}
        justifyContent='center'
        flexDirection='column'
      >
        <Grid item xs={12}>
          <Typography
            variant='h4'
            align='center'
            gutterBottom
            sx={{ fontFamily: "'Merienda', cursive" }}
          >
            Get in Touch
          </Typography>
          <Typography
            variant='h5'
            align='center'
            gutterBottom
            sx={{ fontFamily: "'Merienda', cursive" }}
          >
            Under development
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <form id='contact-form' onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label='Name'
                  name='topic'
                  variant='outlined'
                  value={topic}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label='Email Address'
                  name='email'
                  variant='outlined'
                  type='email'
                  value={email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label='Message'
                  name='message'
                  variant='outlined'
                  multiline
                  rows={5}
                  value={message}
                  onChange={handleChange}
                />
              </Grid>

              {errorMessage && (
                <Grid item xs={12}>
                  <Typography
                    variant='body2'
                    className='error-text'
                    sx={{ color: "red" }}
                  >
                    {errorMessage}
                  </Typography>
                </Grid>
              )}

              <Grid item xs={12} textAlign='center'>
                <Button
                  type='submit'
                  variant='contained'
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
