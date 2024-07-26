// external imports
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// local imports
import knight from "../../assets/images/knight.svg";
import dragonBuilding from "../../assets/images/dragon-bldg.svg";
import building from "../../assets/images/bldg.svg";
import "./style.css";

// redux imports
import { useDispatch, useSelector } from "react-redux";
import {
  setBuildingNearShip,
  setDragonNearShip,
  setKnightNearShip,
} from "../../features/iconNearShip/iconNearShipSlice";
import {
  applyRandomClass,
  removeClasses,
} from "../../features/iconClasses/iconClasses";

const MapIcon = ({ handleIconProximity }) => {
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIconId, setHoveredIconId] = useState(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  // redux state
  const knightNearShip = useSelector((state) => state.icons.knightNearShip);
  const dragonNearShip = useSelector((state) => state.icons.dragonNearShip);
  const buildingNearShip = useSelector((state) => state.icons.buildingNearShip);
  const iconClasses = useSelector((state) => state.iconClasses);

  const handleMouseEnter = (e) => {
    if (!isTouchDevice) {
      const iconId = e.target.id;
      dispatch(applyRandomClass({ iconId }));
    }
  };

  const handleMouseLeave = (e) => {
    if (!isTouchDevice) {
      const iconId = e.target.id;
      dispatch(removeClasses({ iconId }));
    }
  };
  const isTouchScreen = () => {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches
    );
  };

  useEffect(() => {
    setIsTouchDevice(isTouchScreen());
  }, []);

  useEffect(() => {
    handleIconProximity(knightNearShip, "knight");
    handleIconProximity(dragonNearShip, "dragon");
    handleIconProximity(buildingNearShip, "building");
  }, [knightNearShip, dragonNearShip, buildingNearShip]);

  return (
    <Grid container spacing={2} className="flexbox-turn-on" id="icons">
      <Grid className="nav-items" item xs={8} sm={6} md={4} lg={4}>
        {" "}
        <Link to="/about">
          {" "}
          <img
            src={knight}
            alt="knight icon"
            id="knight"
            className={`landing-icons ${iconClasses.knight || ""}`}
            onMouseEnter={(e) => {
              if (!isTouchDevice) {
                setIsHovered(true);
                handleMouseEnter(e);
              }
            }}
            onMouseLeave={(e) => {
              if (!isTouchDevice) {
                setIsHovered(false);
                handleMouseLeave(e);
              }
            }}
          ></img>
          <h2 id="knight" className={iconClasses.knight ? "show" : "hide"}>
            About Me
          </h2>
        </Link>{" "}
      </Grid>
      <Grid className="nav-items" item xs={8} sm={6} md={4} lg={4}>
        {" "}
        <Link to="/projects">
          <img
            className={`landing-icons ${iconClasses.dragon || ""}`}
            onMouseEnter={(e) => {
              if (!isTouchDevice) {
                setIsHovered(true);
                handleMouseEnter(e);
              }
            }}
            onMouseLeave={(e) => {
              if (!isTouchDevice) {
                setIsHovered(false);
                handleMouseLeave(e);
              }
            }}
            src={dragonBuilding}
            alt="dragon building icon"
            id="dragon"
          ></img>
          <h2 id="dragon" className={iconClasses.dragon ? "show" : "hide"}>
            Projects
          </h2>
        </Link>
      </Grid>
      <Grid className="nav-items" item xs={8} sm={6} md={4} lg={4}>
        {" "}
        <Link to="/technologies">
          <img
            className={`landing-icons ${iconClasses.building || ""}`}
            onMouseEnter={(e) => {
              if (!isTouchDevice) {
                setIsHovered(true);
                handleMouseEnter(e);
              }
            }}
            onMouseLeave={(e) => {
              if (!isTouchDevice) {
                setIsHovered(false);
                handleMouseLeave(e);
              }
            }}
            src={building}
            alt="building icon"
            id="building"
          ></img>
          <h2 id="building" className={iconClasses.building ? "show" : "hide"}>
            Technologies
          </h2>
        </Link>
      </Grid>
    </Grid>
  );
};

export default MapIcon;
