import React from "react";
import MapIcon from "../../components/MapIcon";
import Ship from "../../components/Ship";
import "../../assets/css/landing.css";
import RandomMapIcons from "../../components/RandomMapIcon";

// landing page
const Landing = () => {
  return (
    <>
      <div id="name">
        <h1>Mary Elenius</h1>
        <div id="vr" className="subtitles"></div>
        <div id="subtitle">
          <h2 className="subtitles">Developer. Mother.</h2>
          <h2 className="subtitles">Wildlife Rescuer.</h2>
        </div>
      </div>
      <MapIcon />
      <RandomMapIcons />
      <Ship />
    </>
  );
};

export default Landing;
