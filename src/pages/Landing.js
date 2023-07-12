import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroImg from "../components/HeroImg/HeroImg";
import Footer from "../components/Footer/Footer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import panda from "../assets/images/bigsmilepanda.png";

const Landing = () => {
  return (
    <div id='whole-page'>
      <Navbar />
      <HeroImg />
      <div className='content' id='landing-content'>
        <Box id='landing-box'>
          <img alt='Panda drawing' src={panda} id='panda-drawing'></img>
          <div id='landing-text'>
            <Typography variant='h4' id='landing-h4'>
              Welcome!
            </Typography>
            <Typography variant='body1' id='landing-body1'>
              Welcome to my React portfolio! I developed this project as an
              example page to show potential employers how a react site doesn't
              need to be boring.
            </Typography>
            <Typography variant='body1' id='landing-body1'>
              I appreciate you swinging by! I'm a full stack stack developer in
              search of a new job since relocating to Tennessee. I specialize in
              front end work and quickly developing a prototype website based on
              wireframes. If you are looking to hire, please contact me using
              the information on my footer.
            </Typography>
          </div>
        </Box>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
