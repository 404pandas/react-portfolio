// external imports
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
// local imports
import knight from "../../assets/images/knight.svg";
import dragonBuilding from "../../assets/images/dragon-bldg.svg";
import building from "../../assets/images/bldg.svg";
import "./style.css";

const MapIcon = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIconId, setHoveredIconId] = useState(null);

  function applyRandomClass(e, iconId) {
    console.log("Applying random class function run");
    const icon = e.target;
    console.log("icons", icon);
    console.log("hovered icon id", iconId);

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
    console.log("Removing classes function run");
    const icon = e.target;
    console.log("icons", icon);
    console.log("hovered icon id", iconId);

    icon.classList.remove("jump");
    icon.classList.remove("wiggle");
  }

  return (
    <Grid container spacing={2} className='flexbox-turn-on' id='icons'>
      <Grid className='nav-items' item xs={8} sm={6} md={4} lg={4}>
        {" "}
        <img
          src={knight}
          alt='knight icon'
          id='knight'
          className='landing-icons'
          onMouseEnter={(e) => {
            setIsHovered(true);
            setHoveredIconId(e.target.id);
            removeClasses(e, e.target.id);
          }}
          onMouseLeave={(e) => {
            setIsHovered(false);
            applyRandomClass(e, e.target.id);
          }}
        ></img>
        <h2
          id='knight'
          className={isHovered && hoveredIconId === "knight" ? "show" : "hide"}
        >
          About Me
        </h2>
      </Grid>
      <Grid className='nav-items' item xs={8} sm={6} md={4} lg={4}>
        {" "}
        <img
          className='landing-icons'
          onMouseEnter={(e) => {
            setIsHovered(true);
            setHoveredIconId(e.target.id);
            removeClasses(e, e.target.id);
          }}
          onMouseLeave={(e) => {
            setIsHovered(false);
            applyRandomClass(e, e.target.id);
          }}
          src={dragonBuilding}
          alt='dragon building icon'
          id='dragon'
        ></img>
        <h2
          id='dragon'
          className={isHovered && hoveredIconId === "dragon" ? "show" : "hide"}
        >
          Projects
        </h2>
      </Grid>
      <Grid className='nav-items' item xs={8} sm={6} md={4} lg={4}>
        {" "}
        <img
          className='landing-icons'
          onMouseEnter={(e) => {
            setIsHovered(true);
            setHoveredIconId(e.target.id);
            removeClasses(e, e.target.id);
          }}
          onMouseLeave={(e) => {
            setIsHovered(false);
            applyRandomClass(e, e.target.id);
          }}
          src={building}
          alt='building icon'
          id='building'
        ></img>
        <h2
          id='building'
          className={
            isHovered && hoveredIconId === "building" ? "show" : "hide"
          }
        >
          Technologies
        </h2>
      </Grid>
    </Grid>
  );
};

export default MapIcon;
