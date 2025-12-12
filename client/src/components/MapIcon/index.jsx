import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setHovered,
  setNearShip,
  setAnimationClass,
} from "../../features/iconNearShip/iconNearShipSlice";
import knight from "../../assets/images/knight.svg";
import dragonBuilding from "../../assets/images/dragon-bldg.svg";
import building from "../../assets/images/bldg.svg";
import knights from "../../assets/images/knights.svg";
import phone from "../../assets/images/phone.svg";
import "./mapicon.css";
import Grid from "@mui/material/Unstable_Grid2";
import NewReleasesIcon from "@mui/icons-material/NewReleases";

export const icons = [
  { id: "knight", src: knight, text: "About Me", route: "about" },
  { id: "dragon", src: dragonBuilding, text: "Projects", route: "projects" },
  {
    id: "building",
    src: building,
    text: "Technologies",
    route: "technologies",
  },
  { id: "contact", src: knights, text: "Contact", route: "contact" },
  { id: "phone", src: phone, text: "Mobile", route: "phone" },
];

export const animationClasses = [
  "jump",
  "wiggle",
  "spin",
  "pulse",
  "fade",
  "swing",
  "bounce",
  "flip",
  "shrink-grow",
  "blink",
  "wobble",
  "grow-shrink",
  "grow",
];
const MapIcon = () => {
  const dispatch = useDispatch();
  const iconsState = useSelector((state) => state.icons.icons);
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMediumScreen(window.innerWidth >= 900);
    };

    const checkTouchDevice = () => {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      );
    };

    // Run these checks once on component mount
    checkScreenSize();
    checkTouchDevice();
    icons.forEach(({ id }) => {
      console.log("------------");
      console.log(id);
      applyRandomClass(id);
    });
  }, []);

  const handleMouseEnter = (e, icon) => {
    dispatch(setHovered({ icon, hovered: true }));
    dispatch(setNearShip({ icon, nearShip: true }));
  };

  const handleMouseLeave = (e, icon) => {
    dispatch(setHovered({ icon, hovered: false }));
    dispatch(setNearShip({ icon, nearShip: false }));
    applyRandomClass(icon);
  };

  const applyRandomClass = (icon) => {
    console.log(icon);
    const randomClass =
      animationClasses[Math.floor(Math.random() * animationClasses.length)];
    dispatch(setAnimationClass({ icon, animationClass: randomClass }));
  };

  const shouldShowText = (id) => {
    return (
      iconsState[id].hovered ||
      iconsState[id].nearShip ||
      (isLargeScreen && !isTouchDevice)
    );
  };

  return (
    <div className="icon-container">
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {icons.map(({ id, src, text, route }) => (
          <Grid
            key={id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className={`ind-items ind-${route}`}
          >
            <div className={`nav-item nav-${route}`}>
              <NewReleasesIcon className="poi" />
              <Link to={`/${route}`}>
                <img
                  src={src}
                  alt={`${id} icon`}
                  id={id}
                  className={`landing-icon ${id}Icon ${
                    iconsState[id]?.animationClass || ""
                  }`}
                  onMouseEnter={(e) => handleMouseEnter(e, id)}
                  onMouseLeave={(e) => handleMouseLeave(e, id)}
                />
                <h2
                  className={
                    iconsState[id].hovered ||
                    iconsState[id].nearShip ||
                    (!isMediumScreen && isTouchDevice)
                      ? "show ic-h2"
                      : "hide ic-h2"
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
