import React, { useState, useEffect, useRef } from "react";
import {
  ImageList,
  ImageListItem,
  IconButton,
  Typography,
  Container,
  Grid,
} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import data from "./data.json";
import "../../assets/css/projects.css";

import comingSoon from "../../assets/images/coming-soon.jpg";
import blueyapi from "../../assets/images/blueyapi.png";
import cortezcafe from "../../assets/images/cortezcafe.png";

const imageMap = {
  comingSoon,
  blueyapi,
  cortezcafe,
  // image1,
  // image2,
  // image3,
  // image4,
  // image5,
  // image6,
  // image7,
  // image8,
  // image9,
  // image10,
  // image11,
  // image12,
  // image13,
  // image14,
  // image15,
  // image16,
  // image17,
  // image18,
  // image19,
  // image20,
};

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * placeholderImages.length);
  return placeholderImages[randomIndex];
};

const Projects = () => {
  const [expandedItem, setExpandedItem] = useState(null);
  const expandedRef = useRef(null);
  const [itemsToShow, setItemsToShow] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setItemsToShow((prevItems) => Math.min(prevItems + 1, data.length));
    }, 300); // Adjust timing between each item's appearance

    return () => clearTimeout(timer);
  }, [itemsToShow]);

  const handleExpand = (project) => {
    setExpandedItem(project);
  };

  const handleClose = () => {
    setExpandedItem(null);
  };

  const handleClickOutside = (event) => {
    if (
      expandedRef.current &&
      !expandedRef.current.contains(event.target) &&
      event.target.closest("#expanded-project") === null
    ) {
      handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <>
      <Container>
        <Grid container id='projects-cont'>
          <ImageList variant='masonry' id='image-list'>
            {data.slice(0, itemsToShow).map((project, index) => (
              <ImageListItem
                key={project.key}
                className={`image-item ${index % 2 === 0 ? "even" : "odd"}`}
              >
                <div className='image-inner'>
                  <div
                    className='image-front'
                    style={{
                      backgroundImage: `url(${imageMap[project.image]})`,
                    }}
                  ></div>
                  <div className='image-back'>
                    <Typography variant='h6'>{project.title}</Typography>
                    <Typography variant='body1'>
                      {project.description}
                    </Typography>
                    <IconButton
                      onClick={() => handleExpand(project)}
                      style={{ color: "rgba(0, 0, 0, 0.54)" }}
                      aria-label={`info about ${project.title}`}
                    >
                      <ExpandLessIcon />
                    </IconButton>
                  </div>
                </div>
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
      </Container>
      {expandedItem && (
        <div
          id='expanded-project'
          className={expandedItem ? "show" : ""}
          ref={expandedRef}
          onClick={handleClose}
        >
          <div id='inner-box' onClick={(e) => e.stopPropagation()}>
            <img
              src={getRandomImage()}
              alt='pirate themed icon'
              loading='lazy'
              id='expanded-image'
            />
            <Typography variant='h6'>{expandedItem.title}</Typography>
            <Typography variant='body1' className='expanded-text'>
              {expandedItem.description}
            </Typography>
            <Container id='project-a-cont'>
              <a className='project-a' href={expandedItem.deployment}>
                Deployment
              </a>
              <a className='project-a' href={expandedItem.code}>
                Code
              </a>
            </Container>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
