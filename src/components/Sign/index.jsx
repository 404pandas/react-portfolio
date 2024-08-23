import React, { useState, useEffect } from "react";
import welcome1 from "../../assets/images/welcome-1.svg";
import welcome2 from "../../assets/images/welcome-2.svg";
import welcome3 from "../../assets/images/welcome-3.svg";
import "./style.css";
const images = [welcome1, welcome2, welcome3];

const Sign = () => {
  const [currentImage, setCurrentImage] = useState(welcome1);

  useEffect(() => {
    let intervalId;

    const switchImage = () => {
      const nextImage = images[Math.floor(Math.random() * images.length)];
      setCurrentImage(nextImage);

      const randomInterval = Math.random() * 2000 + 1000; // Random interval between 1 and 3 seconds

      // Clear the previous interval and start a new one
      clearInterval(intervalId);
      intervalId = setInterval(switchImage, randomInterval);
    };

    // Start the initial interval
    const initialInterval = Math.random() * 2000 + 1000;
    intervalId = setInterval(switchImage, initialInterval);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <img className=" sign" src={currentImage} alt="Welcome Sign" />
    </div>
  );
};

export default Sign;
