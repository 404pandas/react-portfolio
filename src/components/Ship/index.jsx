import WithWind from "./WithWind";
import WithoutWind from "./WithoutWind";
import React, { useEffect, useState, useRef } from "react";

// redux imports
import { useDispatch, useSelector } from "react-redux";
import {
  applyRandomClass,
  removeClasses,
} from "../../features/iconClasses/iconClasses";

const Ship = ({ onIconProximity }) => {
  const [position, setPosition] = useState({ x: 25, y: 25 });
  const [isMoving, setIsMoving] = useState(false);
  const [showWindSails, setShowWindSails] = useState(false);
  const [previousProximity, setPreviousProximity] = useState({
    knight: false,
    dragon: false,
    building: false,
  });
  const shipRef = useRef(null);
  const dispatch = useDispatch();
  const iconClasses = useSelector((state) => state.iconClasses);

  const addRandomClass = (e, iconId) => {
    dispatch(applyRandomClass({ iconId }));
  };

  const removeClasses = (e, iconId) => {
    dispatch(removeClasses({ iconId }));
  };

  const moveStep = 15;

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
        default:
          return;
      }

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
  }, [position]);

  useEffect(() => {
    setShowWindSails(isMoving);
  }, [isMoving]);

  useEffect(() => {
    const checkProximity = () => {
      const icons = document.querySelectorAll(".landing-icons");
      const shipRect = shipRef.current.getBoundingClientRect();

      let currentProximity = { knight: false, dragon: false, building: false };

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
          currentProximity[icon.id] = true;

          if (!previousProximity[icon.id]) {
            addRandomClass({ target: icon }, icon.id);
          }
        } else {
          currentProximity[icon.id] = false;

          if (previousProximity[icon.id]) {
            removeClasses({ target: icon }, icon.id);
          }
        }
      });

      console.log(onIconProximity);
      console.log(previousProximity);

      Object.keys(currentProximity).forEach((icon) => {
        if (currentProximity[icon] !== previousProximity[icon]) {
          onIconProximity(currentProximity[icon], icon);
        }
      });

      setPreviousProximity(currentProximity);
    };

    const intervalId = setInterval(checkProximity, 500);

    return () => clearInterval(intervalId);
  }, [position, onIconProximity, previousProximity]);

  const shipStyle = {
    width: "100",
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
