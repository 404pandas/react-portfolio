// external imports
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

// local imports
import comingSoon from "../../assets/images/coming-soon.jpg";
import image1 from "../../assets/images/1.svg";
import image2 from "../../assets/images/2.svg";
import image3 from "../../assets/images/3.svg";
import image4 from "../../assets/images/4.svg";
import image5 from "../../assets/images/5.svg";
import image6 from "../../assets/images/6.svg";
import image7 from "../../assets/images/7.svg";
import image8 from "../../assets/images/8.svg";
import image9 from "../../assets/images/9.svg";
import image10 from "../../assets/images/10.svg";
import image11 from "../../assets/images/11.svg";
import image12 from "../../assets/images/12.svg";
import image13 from "../../assets/images/13.svg";
import image14 from "../../assets/images/14.svg";
import image15 from "../../assets/images/15.svg";
import image16 from "../../assets/images/16.svg";
import image17 from "../../assets/images/17.svg";
import image18 from "../../assets/images/18.svg";
import image19 from "../../assets/images/19.svg";
import image20 from "../../assets/images/20.svg";

// Project data
const data = [
  {
    title: "Project 1",
    description: "This is a description of project 1",
    code: "https://github.com",
    deployment: "https://maryelenius.com",
    image: comingSoon,
    key: 100,
  },
  {
    title: "Project 2",
    description: "This is a description of project 2",
    code: "https://github.com",
    deployment: "https://maryelenius.com",
    image: comingSoon,
    key: 101,
  },
  {
    title: "Project 3",
    description: "This is a description of project 3",
    code: "https://github.com",
    deployment: "https://maryelenius.com",
    image: comingSoon,
    key: 102,
  },
  {
    title: "Project 4",
    description: "This is a description of project 4",
    code: "https://github.com",
    deployment: "https://maryelenius.com",
    image: comingSoon,
    key: 103,
  },
  {
    title: "Project 5",
    description: "This is a description of project 5",
    code: "https://github.com",
    deployment: "https://maryelenius.com",
    image: comingSoon,
    key: 104,
  },
];
// Image data
const placeholderImages = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
];
const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * placeholderImages.length);
  return placeholderImages[randomIndex];
};
const Projects = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const handleExpand = (project) => {
    setExpandedItem(project);
  };

  const handleClose = () => {
    setExpandedItem(null);
  };

  const handleClickOutside = (event) => {
    if (
      expandedItem &&
      expandedItem.ref &&
      !expandedItem.ref.contains(event.target)
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
            {data.map((project, index) => (
              <ImageListItem key={project.key}>
                <img
                  srcSet={`${project.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${project.image}?w=248&fit=crop&auto=format`}
                  alt={project.title}
                  loading='lazy'
                />
                {expandedItem === project ? (
                  <div
                    ref={(node) => (project.ref = node)}
                    id='expanded-project'
                    onClick={handleClose}
                  >
                    <div id='inner-box'>
                      <img
                        src={getRandomImage()} // Use random image path here
                        alt='pirate themed icon'
                        loading='lazy'
                        id='expanded-image'
                      />{" "}
                      <Typography variant='h6'>{project.title}</Typography>
                      <Typography variant='body1' className='expanded-text'>
                        {project.description}
                      </Typography>
                      <Container id='project-a-cont'>
                        <a class='project-a' href={project.deployment}>
                          Deployment
                        </a>
                        <a class='project-a' href={project.code}>
                          Code
                        </a>
                      </Container>
                    </div>
                  </div>
                ) : (
                  <ImageListItemBar
                    title={project.title}
                    subtitle={project.description}
                    actionIcon={
                      <IconButton
                        onClick={() => handleExpand(project)}
                        style={{ color: "rgba(255, 255, 255, 0.54)" }}
                        aria-label={`info about ${project.title}`}
                      >
                        <ExpandLessIcon id='expand-icon' />
                      </IconButton>
                    }
                  />
                )}
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
      </Container>
    </>
  );
};

export default Projects;
