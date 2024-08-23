import React, { useState, useEffect } from "react";
import welcome1 from "../../assets/images/welcome-1.svg";
import welcome2 from "../../assets/images/welcome-2.svg";
import welcome3 from "../../assets/images/welcome-3.svg";
import "./style.css";
const images = [welcome1, welcome2, welcome3];

const Sign = () => {
  const [currentImage, setCurrentImage] = useState(welcome1);

  useEffect(() => {
    const switchImage = () => {
      const nextImage = images[Math.floor(Math.random() * images.length)];
      setCurrentImage(nextImage);
    };

    const interval = setInterval(() => {
      switchImage();
    }, Math.random() * 1000 + 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <img className=" sign" src={currentImage} alt="Welcome Sign" />
    </div>
  );
};

export default Sign;
