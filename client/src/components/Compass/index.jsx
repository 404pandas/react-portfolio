import React, { useState, useEffect, useRef } from "react";
import blank from "../../assets/images/compass-blank.png";
import compassshadow from "../../assets/images/compass-shadow.png";
import "./compass.css"; // You can adjust or add CSS for animations here

const Compass = () => {
  const [direction, setDirection] = useState(null);
  const compassRef = useRef(null);

  const getCompassDirection = (mouseX, mouseY, centerX, centerY) => {
    const deltaX = mouseX - centerX;
    const deltaY = mouseY - centerY;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      return deltaX > 0 ? "east" : "west";
    } else {
      return deltaY > 0 ? "south" : "north";
    }
  };

  const handleMouseMove = (e) => {
    if (compassRef.current) {
      const compassRect = compassRef.current.getBoundingClientRect();
      const centerX = compassRect.left + compassRect.width / 2;
      const centerY = compassRect.top + compassRect.height / 2;

      const newDirection = getCompassDirection(
        e.clientX,
        e.clientY,
        centerX,
        centerY
      );
      setDirection(newDirection);
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="compass-container">
      <img
        src={compassshadow}
        alt="compass shadow"
        className="compass-shadow"
      />
      <img
        src={blank}
        alt="compass blank"
        ref={compassRef}
        className="compass-blank"
      />
      {direction && <div className={`triangle ${direction}`}></div>}
    </div>
  );
};

export default Compass;
