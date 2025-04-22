import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Paper } from "@mui/material";
import blank from "../../assets/images/compass-blank.png";
import compassshadow from "../../assets/images/compass-shadow.png";
import "./compass.css";

const Compass = () => {
  const [direction, setDirection] = useState(null);
  const compassRef = useRef(null);
  const touchStartRef = useRef({ x: 0, y: 0 });

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

  const getCompassDirection = (dx, dy) => {
    if (Math.abs(dx) > Math.abs(dy)) {
      return dx > 0 ? "east" : "west";
    } else {
      return dy > 0 ? "south" : "north";
    }
  };

  const handleMouseMove = (e) => {
    if (compassRef.current) {
      const rect = compassRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const newDirection = getCompassDirection(deltaX, deltaY);
      setDirection(newDirection);
    }
  };

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (e) => {
    const touch = e.changedTouches[0];
    const dx = touch.clientX - touchStartRef.current.x;
    const dy = touch.clientY - touchStartRef.current.y;

    // Ignore tiny swipes
    if (Math.abs(dx) < 30 && Math.abs(dy) < 30) return;

    const newDirection = getCompassDirection(dx, dy);
    setDirection(newDirection);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    const ref = compassRef.current;
    if (ref) {
      ref.addEventListener("touchstart", handleTouchStart, { passive: true });
      ref.addEventListener("touchend", handleTouchEnd, { passive: true });
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (ref) {
        ref.removeEventListener("touchstart", handleTouchStart);
        ref.removeEventListener("touchend", handleTouchEnd);
      }
    };
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
        sx={{ position: "absolute", zIndex: 0 }}
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
          touchAction: "none", // Prevent default gestures from interfering
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
