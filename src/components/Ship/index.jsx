import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { icons } from "../MapIcon"; // Import the icons array

import {
  setNearShip,
  setHovered,
} from "../../features/iconNearShip/iconNearShipSlice";

import WithWind from "./WithWind";
import WithoutWind from "./WithoutWind";
import "./style.css";

const Ship = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [position, setPosition] = useState({ x: 25, y: 25 });
  const [isMoving, setIsMoving] = useState(false);
  const [showWindSails, setShowWindSails] = useState(false);
  const [stopMovingTimestamp, setStopMovingTimestamp] = useState(null);
  const shipRef = useRef(null);
  const moveStep = 15;
  const [enteredIcons, setEnteredIcons] = useState(new Set()); // Track entered icons
  const [currentNearIcon, setCurrentNearIcon] = useState(null);

  useEffect(() => {
    const handleArrowKeys = (event) => {
      const keyCode = event.keyCode;
      let newX = position.x;
      let newY = position.y;

      switch (keyCode) {
        case 87:
          newY -= moveStep;
          setIsMoving(true);
          break;
        case 65:
          newX -= moveStep;
          setIsMoving(true);
          break;
        case 83:
          newY += moveStep;
          setIsMoving(true);
          break;
        case 68:
          event.preventDefault();
          newX += moveStep;
          setIsMoving(true);
          break;
        case 13: // Enter key
          if (currentNearIcon) {
            icons.forEach((icon) => {
              dispatch(setHovered({ icon: icon.id, hovered: false }));
            });

            navigate(`/${currentNearIcon}`);
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
  }, [position, currentNearIcon, navigate]);


  useEffect(() => {
    setShowWindSails(isMoving);
  }, [isMoving]);

  useEffect(() => {
    const checkProximity = () => {
      if (!shipRef.current) return;

      // Calculate ship's bounding rect
      const shipRect = shipRef.current.getBoundingClientRect();

      // Check if the ship has stopped moving and the delay has passed
      const iconsElements = document.querySelectorAll(".landing-icon");

      iconsElements.forEach((iconElement) => {
        const iconRect = iconElement.getBoundingClientRect();

        // Find the icon object that corresponds to this element's id
        const icon = icons.find((i) => i.id === iconElement.id);

        // Check if the shipRect has entered or exited the iconRect
        const isEntering =
          shipRect.left < iconRect.right &&
          shipRect.right > iconRect.left &&
          shipRect.top < iconRect.bottom &&
          shipRect.bottom > iconRect.top;

        const isExiting =
          enteredIcons.has(icon.id) &&
          (shipRect.right < iconRect.left ||
            shipRect.left > iconRect.right ||
            shipRect.bottom < iconRect.top ||
            shipRect.top > iconRect.bottom);

        if (isEntering) {
          if (!enteredIcons.has(icon.id)) {
            console.log(`Ship has entered ${icon.id}`);
            setEnteredIcons((prev) => new Set(prev).add(icon.id));
            dispatch(setHovered({ icon: icon.id, hovered: true })); // Dispatch setHovered for entering
            setCurrentNearIcon(icon.route); // Use icon.route here
          }
        } else if (isExiting) {
          console.log(`Ship has exited ${icon.id}`);
          setEnteredIcons((prev) => {
            const newSet = new Set(prev);
            newSet.delete(icon.id);
            return newSet;
          });
          dispatch(setHovered({ icon: icon.id, hovered: false })); // Dispatch setHovered for exiting
          setCurrentNearIcon(null); // Reset the currently near icon
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

  return (
    <div ref={shipRef} id="ship-container" style={shipStyle}>
      {showWindSails ? <WithWind /> : <WithoutWind />}
    </div>
  );
};

export default Ship;
