import { useState, useEffect } from "react";

// local imports
import "./style.css";

// external imports
import Typography from "@mui/material/Typography";

import {
  AiOutlineHome,
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className='footer'>
      <ul className='flexbox-turn-on' id='footer-ul'>
        <Typography variant='body1'>Knoxville, TN</Typography>
        <a href='tel:7728342342'>
          {" "}
          <AiOutlinePhone size={20} style={{ marginRight: "2rem" }} />
        </a>
        <a href='mailto:mary.panda.jackson@gmail.com'>
          {" "}
          <AiOutlineMail size={20} style={{ marginRight: "2rem" }} />
        </a>
        <a href='https://www.linkedin.com/in/404pandas'>
          <AiOutlineLinkedin size={20} style={{ marginRight: "2rem" }} />
        </a>
        <a href='https://www.github.com/404pandas'>
          <AiOutlineGithub size={20} style={{ marginRight: "2rem" }} />
        </a>
      </ul>
    </div>
  );
};

export default Footer;
