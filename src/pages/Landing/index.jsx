// external imports
import { useEffect, useState } from "react";
// local imports
import MapIcon from "../../components/MapIcon";
import Ship from "../../components/Ship";
import "../../assets/css/landing.css";

// redux imports
import { useDispatch, useSelector } from "react-redux";
import {
  setKnightNearShip,
  setDragonNearShip,
  setBuildingNearShip,
} from "../../features/iconNearShip/iconNearShipSlice";

const Landing = () => {
  const dispatch = useDispatch();
  const knightNearShip = useSelector((state) => state.icons.knightNearShip);
  const dragonNearShip = useSelector((state) => state.icons.dragonNearShip);
  const buildingNearShip = useSelector((state) => state.icons.buildingNearShip);

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
  }, [knightNearShip, dragonNearShip, buildingNearShip]);

  const handleIconProximity = (proximity, icon) => {
    switch (icon) {
      case "knight":
        dispatch(setKnightNearShip(proximity));
        break;
      case "dragon":
        dispatch(setDragonNearShip(proximity));
        break;
      case "building":
        dispatch(setBuildingNearShip(proximity));
        break;
      default:
        break;
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
      <MapIcon handleIconProximity={handleIconProximity} />
      <Ship onIconProximity={handleIconProximity} />
    </>
  );
};

export default Landing;
