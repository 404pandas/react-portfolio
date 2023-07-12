import React from "react";

// local imports
import "./style.css";
import YenImg from "../../assets/images/yenDrawing.jpg";

// external imports
import Typography from "@mui/material/Typography";

const HeroImg = () => {
  return (
    <div className='hero'>
      <img className='heroImg' src={YenImg} alt='Drawing of my daughter' />

      <div className='maskImgContent'>
        <div className='imgContent'>
          <div className='heroImgH1'>
            <Typography variant='h1' className='h1'>
              DEVELOPER //
            </Typography>
            <Typography variant='h1' className='h1'>
              VET TECH //
            </Typography>
            <Typography variant='h1' className='h1'>
              MOM //
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
