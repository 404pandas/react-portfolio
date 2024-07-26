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

const MapIcon = () => {
  const dispatch = useDispatch();

  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIconId, setHoveredIconId] = useState(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const knightNearShip = useSelector((state) => state.icons.knightNearShip);
  const dragonNearShip = useSelector((state) => state.icons.dragonNearShip);
  const buildingNearShip = useSelector((state) => state.icons.buildingNearShip);

  function applyRandomClass(e, iconId) {
    const icon = e.target;

    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      icon.classList.add("jump");
      icon.classList.remove("wiggle");
    } else {
      icon.classList.add("wiggle");
      icon.classList.remove("jump");
    }
  }

  function removeClasses(e, iconId) {
    const icon = e.target;

    icon.classList.remove("jump");
    icon.classList.remove("wiggle");
  }

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

  const handleMouseEnter = (e) => {
    if (!isTouchDevice) {
      setHoveredIconId(e.target.id);
      removeClasses(e, e.target.id);
      switch (e.target.id) {
        case "knight":
          dispatch(setKnightNearShip(true));
          break;
        case "dragon":
          dispatch(setDragonNearShip(true));
          break;
        case "building":
          dispatch(setBuildingNearShip(true));
          break;
        default:
          break;
      }
    }
  };

  const handleMouseLeave = (e) => {
    if (!isTouchDevice) {
      setHoveredIconId(null);
      applyRandomClass(e, e.target.id);
      switch (e.target.id) {
        case "knight":
          dispatch(setKnightNearShip(false));
          break;
        case "dragon":
          dispatch(setDragonNearShip(false));
          break;
        case "building":
          dispatch(setBuildingNearShip(false));
          break;
        default:
          break;
      }
    }
  };

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
            className="landing-icons"
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
          <h2
            id="knight"
            className={
              isTouchDevice || (isHovered && hoveredIconId === "knight")
                ? "show"
                : "hide"
            }
          >
            About Me
          </h2>
        </Link>{" "}
      </Grid>
      <Grid className="nav-items" item xs={8} sm={6} md={4} lg={4}>
        {" "}
        <Link to="/projects">
          <img
            className="landing-icons"
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
          <h2
            id="dragon"
            className={
              isTouchDevice || (isHovered && hoveredIconId === "dragon")
                ? "show"
                : "hide"
            }
          >
            Projects
          </h2>
        </Link>
      </Grid>
      <Grid className="nav-items" item xs={8} sm={6} md={4} lg={4}>
        {" "}
        <Link to="/technologies">
          <img
            className="landing-icons"
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
          <h2
            id="building"
            className={
              isTouchDevice || (isHovered && hoveredIconId === "building")
                ? "show"
                : "hide"
            }
          >
            Technologies
          </h2>
        </Link>
      </Grid>
    </Grid>
  );
};

export default MapIcon;
