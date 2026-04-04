import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setHovered,
  setNearShip,
  setAnimationClass,
} from "../../features/iconNearShip/iconNearShipSlice";
import gsap from "gsap";
import knight from "../../assets/images/knight.svg";
import dragonBuilding from "../../assets/images/dragon-bldg.svg";
import building from "../../assets/images/bldg.svg";
import knights from "../../assets/images/knights.svg";
import phone from "../../assets/images/phone.svg";
import whois from "../../assets/images/who-is.svg";
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
  { id: "who-is", src: whois, text: "Who Is?", route: "whois" },
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
    const checkScreenSize = () => setIsMediumScreen(window.innerWidth >= 900);
    const checkTouchDevice = () =>
      setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);

    checkScreenSize();
    checkTouchDevice();

    // Staggered entrance: icons drop in from below with elastic bounce
    gsap.fromTo(
      ".landing-icon",
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        stagger: {
          each: 0.1,
          from: "start",
          // Clear the y translate after each icon lands so CSS animations take over cleanly
          onComplete: function () {
            gsap.set(this.targets()[0], { clearProps: "y" });
          },
        },
        ease: "back.out(1.6)",
        duration: 0.55,
        delay: 0.35,
      }
    );

    // POI pins fade in after icons
    gsap.fromTo(
      ".poi",
      { opacity: 0 },
      { opacity: 1, stagger: 0.1, duration: 0.4, delay: 0.85 }
    );

    // Icon labels fade in last
    gsap.fromTo(
      ".ic-h2.show",
      { opacity: 0 },
      { opacity: 1, stagger: 0.1, duration: 0.35, delay: 1.0 }
    );
  }, []);

  const handleMouseEnter = (e, icon) => {
    dispatch(setHovered({ icon, hovered: true }));
    dispatch(setNearShip({ icon, nearShip: true }));
  };

  const handleMouseLeave = (e, icon) => {
    dispatch(setHovered({ icon, hovered: false }));
    dispatch(setNearShip({ icon, nearShip: false }));
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
