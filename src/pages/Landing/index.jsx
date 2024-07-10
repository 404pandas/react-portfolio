// external imports
import { useEffect, useState } from "react";
// local imports
import MapIcon from "../../components/MapIcon";
import Ship from "../../components/Ship";
import "../../assets/css/landing.css";

const Landing = () => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const icons = document.querySelectorAll(".landing-icons");

    icons.forEach((icon) => {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        icon.classList.add("jump");
        icon.classList.remove("wiggle");
      } else {
        icon.classList.add("wiggle");
        icon.classList.remove("jump");
      }
    });

    return () => {
      icons.forEach((icon) => {
        icon.classList.remove("jump");
        icon.classList.remove("wiggle");
      });
    };
  }, [isHovered]);

  const handleIconProximity = (proximity, icon) => {
    if (proximity) {
      setIsHovered(true);
      console.log("Proximity detected");
      icon.classList.add("jump");
      icon.classList.remove("wiggle");
    } else {
      setIsHovered(false);
      console.log("Proximity not detected");
    }
  };
  return (
    <>
      <div id='name'>
        <h1>Mary Elenius</h1>
        <div id='vr' className='subtitles'></div>
        <div id='subtitle'>
          <h2 className='subtitles'>Developer. Mother.</h2>
          <h2 className='subtitles'>Wildlife Rescuer.</h2>
        </div>
      </div>
      <MapIcon />
      <Ship onIconProximity={handleIconProximity} />
    </>
  );
};

export default Landing;
