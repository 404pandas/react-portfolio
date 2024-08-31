import React, { useState, useEffect } from "react";
import eyesOpen from "../../assets/images/pirate-eo-mc.svg";
import eyesClosed from "../../assets/images/pirate-ec-mc.svg";
import "./style.css";
const Pirate = () => {
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    const handleBlink = () => {
      setIsBlinking(true);
      setTimeout(() => {
        setIsBlinking(false);
      }, 200);
    };

    const blinkInterval = setInterval(() => {
      handleBlink();
    }, Math.random() * 3000 + 2000);

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div id="pirate-z">
      <img
        className="pirate"
        src={isBlinking ? eyesClosed : eyesOpen}
        alt="Pirate"
      />
    </div>
  );
};

export default Pirate;
