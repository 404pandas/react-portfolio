import React, { useState, useEffect, useRef } from "react";
import blank from "../../assets/images/compass-blank.png";
import compassshadow from "../../assets/images/compass-shadow.png";
import "./compass.css"; // You can adjust or add CSS for animations here

const Compass = () => {
  const [direction, setDirection] = useState(null);
  const compassRef = useRef(null);

  const skillCategories = {
    north: {
      title: "Programming Languages",
      skills: [
        "JavaScript",
        "TypeScript",
        "Python",
        "Shell Scripting",
        "CSS3",
        "HTML5",
      ],
    },
    east: {
      title: "Front-End Technologies",
      skills: [
        "React",
        "Redux",
        "Tailwind CSS",
        "Bootstrap",
        "Material-UI",
        "Foundation",
      ],
    },
    south: {
      title: "Back-End Technologies",
      skills: [
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "MongoDB",
        "MySQL",
        "GraphQL",
        "Apollo",
        "Sequelize",
        "Mongoose",
      ],
    },
    west: {
      title: "DevOps & Tools",
      skills: [
        "GitHub",
        "GitLab",
        "Bitbucket",
        "Docker",
        "AWS",
        "CircleCI",
        "Jest",
        "GitHub Actions",
        "Webpack",
        "Vite",
      ],
    },
  };

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
    <div className='compass-container'>
      <img
        src={compassshadow}
        alt='compass shadow'
        className='compass-shadow'
      />
      <img
        src={blank}
        alt='compass blank'
        ref={compassRef}
        className='compass-blank'
      />
      {direction && <div className={`triangle ${direction}`}></div>}
      {direction && (
        <div className={`skill-text-container ${direction}`}>
          <h3>{skillCategories[direction].title}</h3>
          <ul>
            {skillCategories[direction].skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Compass;
