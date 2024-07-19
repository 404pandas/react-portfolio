// external imports
import { useEffect, useState } from "react";
// local imports
import MapIcon from "../../components/MapIcon";
import Ship from "../../components/Ship";
import "../../assets/css/landing.css";

const Landing = () => {
  const [landingisHovered, setLandingIsHovered] = useState(false);
  const [knightNearShip, setKnightNearShip] = useState(false);
  const [dragonNearShip, setDragonNearShip] = useState(false);
  const [buildingNearShip, setBuildingNearShip] = useState(false);

  useEffect(() => {
    const icons = document.querySelectorAll(".landing-icons");

    icons.forEach((icon) => {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        icon.classList.add("jump");
        icon.classList.remove("wiggle");
      } else {
        icon.classList.add("wiggle");
        icon.classList.remove("jump");
      }
    });

    return () => {
      icons.forEach((icon) => {
        icon.classList.remove("jump");
        icon.classList.remove("wiggle");
      });
    };
  }, [landingisHovered]);

  const handleIconProximity = (proximity, icon) => {
    if (proximity) {
      switch (icon.id) {
        case "knight":
          setKnightNearShip(proximity);
          setLandingIsHovered(true);
          break;
        case "dragon":
          setDragonNearShip(proximity);
          setLandingIsHovered(true);
          break;
        case "building":
          setBuildingNearShip(proximity);
          setLandingIsHovered(true);
          break;
        default:
          break;
      }
    }
  };
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
      <MapIcon
        setLandingIsHovered={setLandingIsHovered}
        handleIconProximity={handleIconProximity}
      />
      <Ship onIconProximity={handleIconProximity} />
    </>
  );
};

export default Landing;
