import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setHovered,
  setNearShip,
} from "../../features/iconNearShip/iconNearShipSlice";
import knight from "../../assets/images/knight.svg";
import dragonBuilding from "../../assets/images/dragon-bldg.svg";
import building from "../../assets/images/bldg.svg";
import "./style.css";
import Grid from "@mui/material/Unstable_Grid2";

const icons = [
  { id: "knight", src: knight, text: "About Me" },
  { id: "dragon", src: dragonBuilding, text: "Projects" },
  { id: "building", src: building, text: "Technologies" },
];

const MapIcon = () => {
  const dispatch = useDispatch();
  const iconsState = useSelector((state) => state.icons.icons);

  const handleMouseEnter = (e, icon) => {
    dispatch(setHovered({ icon, hovered: true }));
    dispatch(setNearShip({ icon, nearShip: true }));
  };

  const handleMouseLeave = (e, icon) => {
    dispatch(setHovered({ icon, hovered: false }));
    dispatch(setNearShip({ icon, nearShip: false }));
    applyRandomClass(e, icon);
  };

  const applyRandomClass = (e, icon) => {
    const element = e.target;
    const randomClass = Math.random() < 0.5 ? "jump" : "wiggle";
    element.classList.add(randomClass);
    element.classList.remove(randomClass === "jump" ? "wiggle" : "jump");
  };

  return (
    <div className="icon-container">
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {icons.map(({ id, src, text }) => (
          <Grid key={id} xs={12} sm={6} md={4} lg={3} className="ind-items">
            <div className="nav-item">
              <Link to={`/${id}`}>
                <img
                  src={src}
                  alt={`${id} icon`}
                  id={id}
                  className={`landing-icon ${id}Icon`}
                  onMouseEnter={(e) => handleMouseEnter(e, id)}
                  onMouseLeave={(e) => handleMouseLeave(e, id)}
                />
                <h2
                  className={
                    iconsState[id].hovered || iconsState[id].nearShip
                      ? "show"
                      : "hide"
                  }
                >
                  {text}
                </h2>
              </Link>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MapIcon;
