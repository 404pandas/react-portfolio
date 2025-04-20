// external imports
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <Container>
      <Grid container id='error-cont'>
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
