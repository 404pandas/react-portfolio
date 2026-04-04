import React, { useState, useEffect } from "react";
import eyesOpen from "../../assets/images/pirate-eo-mc.svg";
import eyesClosed from "../../assets/images/pirate-ec-mc.svg";
import "./pirate.css";
const Pirate = () => {
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    let timeoutId;

    const handleBlink = () => {
      setIsBlinking(true);
      timeoutId = setTimeout(() => setIsBlinking(false), 200);
    };

    const blinkInterval = setInterval(handleBlink, Math.random() * 3000 + 2000);

    return () => {
      clearInterval(blinkInterval);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div id="pirate-z" className="pir-sign">
      <img
        className="pirate"
        src={isBlinking ? eyesClosed : eyesOpen}
        alt="Pirate"
      />
    </div>
  );
};

export default Pirate;
