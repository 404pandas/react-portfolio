import React from "react";
import MapIcon from "../../components/MapIcon";
import Ship from "../../components/Ship";
import Modal from "../../components/Modal";
import "../../assets/css/landing.css";

// landing page
const Landing = () => {
  return (
    <>
      <Modal />
      <div id="name">
        <h1>Mary Elenius</h1>
        <div id="vr" className="subtitles"></div>
        <div id="subtitle">
          <h2 className="subtitles">Developer. Mother.</h2>
          <h2 className="subtitles">Wildlife Rescuer.</h2>
        </div>
      </div>
      <MapIcon />
      <Ship />
    </>
  );
};

export default Landing;
