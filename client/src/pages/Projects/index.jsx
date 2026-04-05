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
import CloseIcon from "@mui/icons-material/Close";
import gsap from "gsap";
import data from "./data.json";
import "../../assets/css/projects.css";

import comingSoon from "../../assets/images/coming-soon.jpg";
import blueyapi from "../../assets/images/blueyapi.png";
import cortezcafe from "../../assets/images/cortezcafe.png";
import scheduler from "../../assets/images/scheduler.png";
import quiz from "../../assets/images/quiz.png";
import jacob from "../../assets/images/jacob.png";
import simpPort from "../../assets/images/simp-portfolio.png";
import notetaker from "../../assets/images/jaskiersjournal.gif";
import passgen from "../../assets/images/passgen.png";
import pooh from "../../assets/images/pooh-walkthrough.gif";
import witcherssatchel from "../../assets/images/witcherssatchel.png";
import kitties from "../../assets/images/kitties.png";
import whois from "../../assets/screenshots/whois.jpg";
import burnbook from "../../assets/images/burnbook.gif";

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
import image20 from "../../assets/images/20.svg";

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
  image20,
];

const imageMap = {
  comingSoon,
  blueyapi,
  cortezcafe,
  scheduler,
  quiz,
  jacob,
  simpPort,
  notetaker,
  passgen,
  pooh,
  witcherssatchel,
  kitties,
  whois,
  burnbook,
};

const getRandomImage = () =>
  placeholderImages[Math.floor(Math.random() * placeholderImages.length)];

const Projects = () => {
  const [expandedItem, setExpandedItem] = useState(null);
  const expandedRef = useRef(null);
  const [itemsToShow, setItemsToShow] = useState(0);

  // Stagger cards in one at a time
  useEffect(() => {
    const timer = setTimeout(() => {
      setItemsToShow((prev) => Math.min(prev + 1, data.length));
    }, 300);
    return () => clearTimeout(timer);
  }, [itemsToShow]);

  // GSAP entrance for each card as it's added
  useEffect(() => {
    const items = document.querySelectorAll(".image-item");
    if (items.length > 0) {
      const last = items[items.length - 1];
      gsap.fromTo(
        last,
        { opacity: 0, y: -36, scale: 0.92 },
        { opacity: 1, y: 0, scale: 1, duration: 0.48, ease: "back.out(1.5)" }
      );
    }
  }, [itemsToShow]);

  // GSAP slide-in when panel mounts (expandedItem just became non-null)
  useEffect(() => {
    if (expandedItem) {
      gsap.fromTo(
        "#expanded-project",
        { xPercent: 100 },
        { xPercent: 0, duration: 0.42, ease: "power3.out" }
      );
      gsap.fromTo(
        "#inner-box > *",
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, stagger: 0.07, ease: "power2.out", delay: 0.2 }
      );
    }
  }, [expandedItem]);

  const handleExpand = (project) => setExpandedItem(project);
  const handleClose = () => setExpandedItem(null);

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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <Container>
        <Grid container id="projects-cont">
          <ImageList variant="masonry" id="image-list">
            {data.slice(0, itemsToShow).map((project, index) => (
              <ImageListItem
                key={project.key}
                className={`image-item ${index % 2 === 0 ? "even" : "odd"}`}
              >
                <div className="image-inner">
                  <div
                    className="image-front"
                    style={{
                      backgroundImage: `url(${imageMap[project.image]})`,
                    }}
                  ></div>
                  <div className="image-back">
                    <Typography variant="h6">{project.title}</Typography>
                    <Typography variant="body1">
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

      {/* Panel is conditionally rendered — GSAP animates it in on mount */}
      {expandedItem && (
        <div id="expanded-project" ref={expandedRef}>
          <div id="inner-box">
            <IconButton
              onClick={handleClose}
              size="small"
              sx={{ alignSelf: "flex-end", mb: 1 }}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <img
              src={getRandomImage()}
              alt="pirate themed icon"
              loading="lazy"
              id="expanded-image"
            />
            <Typography variant="h6">{expandedItem.title}</Typography>
            <Typography variant="body1" className="expanded-text">
              {expandedItem.description}
            </Typography>
            <Container id="project-a-cont">
              <a className="project-a" href={expandedItem.deployment}>
                Deployment
              </a>
              <a className="project-a" href={expandedItem.code}>
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
