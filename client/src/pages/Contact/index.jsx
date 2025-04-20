// external imports
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useState } from "react";

// local imports
import { validateEmail } from "../../utils/helpers";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  return (
    <Container>
      <Grid container id='contact-cont'>
        <Grid item>
          <section>
            <form id='contact-form' onSubmit={handleSubmit}>
              <div>
                <label htmlFor='name'>Name:</label>
                <input
                  type='text'
                  name='name'
                  defaultValue={name}
                  onBlur={handleChange}
                />
              </div>
              <div>
                <label htmlFor='email'>Email address:</label>
                <input
                  type='email'
                  name='email'
                  defaultValue={email}
                  onBlur={handleChange}
                />
              </div>
              <div>
                <label htmlFor='message'>Message:</label>
                <textarea
                  name='message'
                  rows='5'
                  defaultValue={message}
                  onBlur={handleChange}
                />
              </div>
              {errorMessage && (
                <div>
                  <p className='error-text'>{errorMessage}</p>
                </div>
              )}
              <button type='submit'>Submit</button>
            </form>
          </section>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;
