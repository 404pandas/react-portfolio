import "./FooterStyles.css";

import React from "react";

import { AiOutlineHome, AiOutlinePhone, AiOutlineMail, AiOutlineLinkedin, AiOutlineShareAlt, AiOutlineGithub} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="leftFooter">
          <div className="location">
            <AiOutlineHome
              size={20}
              style={{ color: "#d97777", marginRight: "2rem" }}
            />
            <p>United States</p>
          </div>
          <div className="phone">
            <AiOutlinePhone
              size={20}
              style={{ color: "#d97777", marginRight: "2rem" }}
            />
            <p>1 (772) 834 2341</p>
          </div>
          <div className="email">
            <AiOutlineMail
              size={20}
              style={{ color: "#d97777", marginRight: "2rem" }}
            />
            <p>mary.panda.jackson@gmail.com</p>
          </div>
        </div>
        <div className="rightFooter">
            <h4>Adopt Me</h4>
            <p>I am a purebred Overwhelmed Homosapien looking for a place to call home. If you are interested in hiring me, please contact me!</p>
            <div className="socialIcons">
            <AiOutlineLinkedin 
            size={20}
              style={{ color: "#d97777", marginRight: "2rem" }}
              /> 
              <AiOutlineShareAlt
            size={20}
              style={{ color: "#d97777", marginRight: "2rem" }}
              />
              <AiOutlineGithub
            size={20}
              style={{ color: "#d97777", marginRight: "2rem" }}
              />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
