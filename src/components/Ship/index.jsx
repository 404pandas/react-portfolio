import WithWind from "./WithWind";
import WithoutWind from "./WithoutWind";
import React, { useEffect, useState, useRef } from "react";
const Ship = ({ onIconProximity }) => {
  const [position, setPosition] = useState({ x: 25, y: 25 });
  const [isMoving, setIsMoving] = useState(false);
  const [showWindSails, setShowWindSails] = useState(false);
  const shipRef = useRef(null);

  // Arrow key handling for movement
  const moveStep = 15; // Adjust this value to control movement speed

  useEffect(() => {
    const handleArrowKeys = (event) => {
      const keyCode = event.keyCode;

      let newX = position.x;
      let newY = position.y;

      switch (keyCode) {
        case 87: // W key
          newY -= moveStep;
          setIsMoving(true);
          break;
        case 65: // A key
          newX -= moveStep;
          setIsMoving(true);
          break;
        case 83: // S key
          newY += moveStep;
          setIsMoving(true);
          break;
        case 68: // D key
          event.preventDefault();
          newX += moveStep;
          setIsMoving(true);
          break;
        default:
          return; // do not handle other keys
      }

      // Update ship position
      setPosition({ x: newX, y: newY });
    };

    const handleKeyUp = (event) => {
      setIsMoving(false);
    };

    document.addEventListener("keydown", handleArrowKeys);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleArrowKeys);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [position]); // Only re-run the effect if position changes

  useEffect(() => {
    // Toggle wind sails based on isMoving state
    setShowWindSails(isMoving);
  }, [isMoving]);

  // Check proximity to icons with classes .jump or .wiggle
  useEffect(() => {
    const checkProximity = () => {
      const icons = document.querySelectorAll(".landing-icons");
      const shipRect = shipRef.current.getBoundingClientRect();

      icons.forEach((icon) => {
        const iconRect = icon.getBoundingClientRect();
        const shipCenterX = shipRect.left + shipRect.width / 2;
        const shipCenterY = shipRect.top + shipRect.height / 2;

        if (
          shipCenterX >= iconRect.left &&
          shipCenterX <= iconRect.right &&
          shipCenterY >= iconRect.top &&
          shipCenterY <= iconRect.bottom
        ) {
          onIconProximity(true, icon.id);
          console.log(`Proximity detected near ${icon.id}`);
          return;
        }
      });

      onIconProximity(false, null);
    };

    const intervalId = setInterval(checkProximity, 100);

    return () => clearInterval(intervalId);
  }, [position]);

  const shipStyle = {
    width: "100",
    position: "absolute",
    left: `${position.x}px`,
    top: `${position.y}px`,
    transition: "left 0.2s, top 0.2s", // Example transition for smooth movement
  };

  return (
    <div ref={shipRef} id="ship-container" style={shipStyle}>
      {showWindSails ? <WithWind /> : <WithoutWind />}
    </div>
  );
};

export default Ship;
