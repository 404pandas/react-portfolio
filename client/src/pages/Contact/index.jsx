// external imports
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// local imports
import ContactForm from "../../components/ContactForm/ContactForm";

function Contact() {
  return (
    <Container>
      <Grid container id='contact-cont'>
        <ContactForm />
      </Grid>
    </Container>
  );
}

export default Contact;
