import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Paper } from "@mui/material";
import blank from "../../assets/images/compass-blank.png";
import compassshadow from "../../assets/images/compass-shadow.png";
import "./compass.css"; // Still applies your original animations/styles

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
    return Math.abs(deltaX) > Math.abs(deltaY)
      ? deltaX > 0
        ? "east"
        : "west"
      : deltaY > 0
      ? "south"
      : "north";
  };

  const handleMouseMove = (e) => {
    if (compassRef.current) {
      const rect = compassRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
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
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const getPositionStyle = (dir) => {
    const base = {
      position: "absolute",
      p: 2,
      borderRadius: 2,
      boxShadow: 3,
      backgroundColor: "#ffffffee",
      zIndex: 2,
    };
    switch (dir) {
      case "north":
        return {
          ...base,
          top: "5%",
          left: "50%",
          transform: "translateX(-50%)",
        };
      case "east":
        return {
          ...base,
          right: "5%",
          top: "50%",
          transform: "translateY(-50%)",
        };
      case "south":
        return {
          ...base,
          bottom: "5%",
          left: "50%",
          transform: "translateX(-50%)",
        };
      case "west":
        return {
          ...base,
          left: "5%",
          top: "50%",
          transform: "translateY(-50%)",
        };
      default:
        return base;
    }
  };

  return (
    <Box
      className='compass-container'
      sx={{
        position: "relative",
        width: 400,
        height: 400,
        margin: "auto",
        mt: 4,
      }}
    >
      <Box
        component='img'
        src={compassshadow}
        alt='compass shadow'
        className='compass-shadow'
        sx={{
          position: "absolute",
          zIndex: 0,
        }}
      />
      <Box
        component='img'
        src={blank}
        alt='compass blank'
        ref={compassRef}
        className='compass-blank'
        sx={{
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      />
      {direction && (
        <Paper
          className={`skill-text-container ${direction}`}
          sx={getPositionStyle(direction)}
          elevation={4}
        >
          <Typography variant='h7' gutterBottom className='tech-title'>
            {skillCategories[direction].title}
          </Typography>
          <ul style={{ margin: 0, paddingLeft: 20 }}>
            {skillCategories[direction].skills.map((skill, i) => (
              <li key={i}>
                <Typography variant='body2'>{skill}</Typography>
              </li>
            ))}
          </ul>
        </Paper>
      )}
    </Box>
  );
};

export default Compass;
