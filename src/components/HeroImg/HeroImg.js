import "./HeroImgStyles.css";
import { Link } from "react-router-dom";
import YenImg from "../../assets/images/yenDrawing.jpg";
import React from "react";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="heroImg" src={YenImg} alt="Drawing of my daughter" />
      </div>
      <div className="maskImgContent">
        <div className="imgContent">
          <div className="heroImgH1">
            <h1>DEVELOPER.&nbsp;</h1>
            <h1>VET TECH.&nbsp;</h1>
            <h1>MOM.&nbsp;</h1>
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
