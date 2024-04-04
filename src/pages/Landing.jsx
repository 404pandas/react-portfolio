// external imports
import { useEffect, useState } from "react";
// local imports
import MapIcon from "../components/MapIcon";

const Landing = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [shouldApplyRandomClass, setShouldApplyRandomClass] = useState(true);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isHovered && shouldApplyRandomClass) {
        applyRandomClass();
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [isHovered, shouldApplyRandomClass]);

  function applyRandomClass() {
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
  }

  setInterval(applyRandomClass, 5000);
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
    </>
  );
};

export default Landing;
