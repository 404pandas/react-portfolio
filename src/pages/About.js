import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import image from "../assets/images/about-picture.jpg";

import Typography from "@mui/material/Typography";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="content">
        <div className="content-body" id="content-body">
          <img
            alt="Witcher themed maternity shot of Mary"
            src={image}
            id="about-pic"
          />
          <Typography variant="body1" gutterBottom id="about-body1">
            Full Stack Web Developer with a background in Computer Science,
            Veterinary Technology, and Zoology. Possesses a life-long dedication
            to learning and helping animals. Knowledgeable in user interface,
            testing, and debugging processes. Brings forth expertise in design,
            installation, testing and maintenance of web systems. Equipped with
            a diverse and promising skill-set. Proficient in an assortment of
            technologies, including HTML5, CSS3, JavaScript, jQuery, Bootstrap,
            Node.js, MySQL, MongoDB, Express, Handlebars.js, and ReactJS. Able
            to effectively self-manage during independent projects as well as
            collaborate in a team setting. Known among cohort for creativity and
            ingenuity.
          </Typography>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
