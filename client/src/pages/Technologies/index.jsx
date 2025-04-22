// local imports
import "../../assets/css/technologies.css";
import Compass from "../../components/Compass";

// external imports
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const Technologies = () => {
  return (
    <>
      <Container>
        <h1 className='compass-title'>
          Hover or swipe the direction on the compass you would like to
          navigate!
        </h1>
        <Compass />
      </Container>
    </>
  );
};

export default Technologies;
