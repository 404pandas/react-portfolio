// local imports
import Nav from "../components/Nav";
// external imports
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
const Technologies = () => {
  return (
    <>
      {" "}
      <Nav />
      <Container>
        <Grid container id='about-cont'>
          <Grid item>
            <h1>Technologies grid will go here</h1>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Technologies;
