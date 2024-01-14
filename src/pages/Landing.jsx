import React from "react";

// local imports
import logo from "../assets/images/logo.png";
// external imports
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Landing = () => {
  return (
    <>
      {" "}
      <div className='background'>
        <div className='content' id='landing-content'>
          <Box id='landing-box'>
            <img src={logo} alt='logo' id='logo' />

            <div id='landing-text'>
              <Typography variant='body1' id='landing-body1'>
                Welcome to my React portfolio! I developed this project to show
                potential employers how a website doesn't need to be boring.
              </Typography>
              <Typography variant='body1' id='landing-body1'>
                I appreciate you swinging by! I'm a full-stack developer in
                search of a new job since relocating to Tennessee. I specialize
                in front-end work and quickly developing a prototype website
                based on wireframes. If you are looking to hire, please contact
                me using the information on my footer.
              </Typography>
            </div>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Landing;
