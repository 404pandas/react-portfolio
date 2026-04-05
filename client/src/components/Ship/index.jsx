import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import { icons } from "../MapIcon"; // Import the icons array
import { animationClasses } from "../MapIcon";
import {
  setHovered,
  setAnimationClass,
} from "../../features/iconNearShip/iconNearShipSlice";

import WithWind from "./WithWind";
import WithoutWind from "./WithoutWind";
import "./ship.css";
import Modal from "../Modal";
import Phone from "../Phone";

const Ship = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [position, setPosition] = useState({ x: 25, y: 25 });
  const [isMoving, setIsMoving] = useState(false);
  const [showWindSails, setShowWindSails] = useState(false);
  const [stopMovingTimestamp, setStopMovingTimestamp] = useState(null);
  const shipRef = useRef(null);
  const moveStep = 15;

  // Use refs for proximity tracking so the interval always sees fresh values
  // without needing them in the dep array (avoids stale closure + excess re-runs)
  const enteredIconsRef = useRef(new Set());
  const currentNearIconRef = useRef(null);

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

    checkScreenSize();
    checkTouchDevice();

    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Entrance animation — plays once when the ship becomes visible
  useEffect(() => {
    if (isMediumScreen && !isTouchDevice && shipRef.current) {
      const tween = gsap.fromTo(
        shipRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.9, delay: 0.7, ease: "power2.out" }
      );
      return () => tween.kill();
    }
  }, [isMediumScreen, isTouchDevice]);

  useEffect(() => {
    const handleArrowKeys = (event) => {
      const { key } = event;
      let newX = position.x;
      let newY = position.y;

      switch (key) {
        case "w":
        case "W":
        case "ArrowUp":
          newY -= moveStep;
          setIsMoving(true);
          break;
        case "a":
        case "A":
        case "ArrowLeft":
          newX -= moveStep;
          setIsMoving(true);
          break;
        case "s":
        case "S":
        case "ArrowDown":
          newY += moveStep;
          setIsMoving(true);
          break;
        case "d":
        case "D":
        case "ArrowRight":
          event.preventDefault();
          newX += moveStep;
          setIsMoving(true);
          break;
        case "Enter":
          if (currentNearIconRef.current) {
            icons.forEach((icon) => {
              dispatch(setHovered({ icon: icon.id, hovered: false }));
            });
            navigate(`/${currentNearIconRef.current}`);
          }
          break;
        default:
          return;
      }

      setPosition({ x: newX, y: newY });
    };

    const handleKeyUp = () => {
      setIsMoving(false);
    };

    document.addEventListener("keydown", handleArrowKeys);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleArrowKeys);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [position, navigate]);

  useEffect(() => {
    setShowWindSails(isMoving);
  }, [isMoving]);

  useEffect(() => {
    const checkProximity = () => {
      if (!shipRef.current) return;

      const shipRect = shipRef.current.getBoundingClientRect();
      const iconsElements = document.querySelectorAll(".landing-icon");

      iconsElements.forEach((iconElement) => {
        const iconRect = iconElement.getBoundingClientRect();
        const icon = icons.find((i) => i.id === iconElement.id);

        const isEntering =
          shipRect.left < iconRect.right &&
          shipRect.right > iconRect.left &&
          shipRect.top < iconRect.bottom &&
          shipRect.bottom > iconRect.top;

        const isExiting =
          enteredIconsRef.current.has(icon.id) &&
          (shipRect.right < iconRect.left ||
            shipRect.left > iconRect.right ||
            shipRect.bottom < iconRect.top ||
            shipRect.top > iconRect.bottom);

        if (isEntering) {
          if (!enteredIconsRef.current.has(icon.id)) {
            enteredIconsRef.current.add(icon.id);
            dispatch(setHovered({ icon: icon.id, hovered: true }));
            currentNearIconRef.current = icon.route;
            // Start a random animation when the ship enters the icon
            const randomClass =
              animationClasses[
                Math.floor(Math.random() * animationClasses.length)
              ];
            dispatch(
              setAnimationClass({ icon: icon.id, animationClass: randomClass })
            );
          }
        } else if (isExiting) {
          enteredIconsRef.current.delete(icon.id);
          dispatch(setHovered({ icon: icon.id, hovered: false }));
          currentNearIconRef.current = null;
          // Clear animation when ship leaves — icon goes back to still
          dispatch(setAnimationClass({ icon: icon.id, animationClass: "" }));
        }
      });
    };

    const intervalId = setInterval(checkProximity, 250);

    return () => clearInterval(intervalId);
  }, [position, isMoving, stopMovingTimestamp]);

  const shipStyle = {
    width: "100%",
    position: "absolute",
    left: `${position.x}px`,
    top: `${position.y}px`,
    transition: "left 0.2s, top 0.2s",
  };

  return isMediumScreen && !isTouchDevice ? (
    <div ref={shipRef} id="ship-container" style={shipStyle}>
      {showWindSails ? <WithWind /> : <WithoutWind />}
      <div className="modals">
        <Modal />
      </div>
    </div>
  ) : null;
};

export default Ship;
