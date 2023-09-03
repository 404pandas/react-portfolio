import React from "react";

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
      <div className='footerContainer'>
        <div className='leftFooter'>
          <div className='location'>
            <AiOutlineHome
              size={20}
              style={{ color: "#d97777", marginRight: "2rem" }}
            />
            <Typography variant='body1' id='footer-body1'>
              United States
            </Typography>
          </div>
          <div className='phone'>
            <AiOutlinePhone
              size={20}
              style={{ color: "#d97777", marginRight: "2rem" }}
            />
            <Typography variant='body1' id='footer-body1'>
              <a href='tel:7728342342'>1 (772) 834 2342</a>
            </Typography>
          </div>
          <div className='email'>
            <AiOutlineMail
              size={20}
              style={{ color: "#d97777", marginRight: "2rem" }}
            />
            <Typography variant='body1' id='footer-body1'>
              <a href='mailto:mary.panda.jackson@gmail.com'>
                {" "}
                mary.panda.jackson@gmail.com
              </a>
            </Typography>
          </div>
        </div>
        <div className='rightFooter'>
          <h4>Adopt Me</h4>
          <Typography variant='body1' id='footer-body1'>
            I am a purebred Overwhelmed Homosapien looking for a place to call
            home. If you are interested in hiring me, please contact me!
          </Typography>
          <div className='socialIcons'>
            <a href='https://www.linkedin.com/in/404pandas'>
              <AiOutlineLinkedin
                size={20}
                style={{ color: "#d97777", marginRight: "2rem" }}
              />
            </a>
            <a href='https://www.github.com/404pandas'>
              <AiOutlineGithub
                size={20}
                style={{ color: "#d97777", marginRight: "2rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
