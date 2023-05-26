import "./HeroImgStyles.css";
import { Link } from "react-router-dom";
import YenImg from "../../assets/images/yenDrawing.jpg";
import React from "react";
import Typography from "@mui/material/Typography";

const HeroImg = () => {
  return (
    <div className="hero">
      <img className="heroImg" src={YenImg} alt="Drawing of my daughter" />

      <div className="maskImgContent">
        <div className="imgContent">
          <div className="heroImgH1">
            <Typography variant="h1" className="h1">
              DEVELOPER //
            </Typography>
            <Typography variant="h1" className="h1">
              VET TECH //
            </Typography>
            <Typography variant="h1" className="h1">
              MOM //
            </Typography>
          </div>
          <div className="heroBtns">
            <Link to="/projects" className="btn">
              Projects
            </Link>
            <Link to="/technologies" className="btn btn-technologies">
              Technologies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
