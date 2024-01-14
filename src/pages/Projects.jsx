import React from "react";

// external imports
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";

// local imports
import { projectData } from "../components/ProjectCard/data";

import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const theme = useTheme();

  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = projectData.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (projectData) => {
    setActiveStep(projectData);
  };
  console.log("active step-" + activeStep);
  return (
    <div>
      <div className='content' id='project-content'>
        <Box sx={{ width: "100%", marginTop: "25px" }}>
          <MobileStepper
            steps={maxSteps}
            sx={{ backgroundColor: "transparent" }}
            position='static'
            activeStep={activeStep}
            nextButton={
              <Button
                size='medium'
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft className='arrow' />
                ) : (
                  <KeyboardArrowRight className='arrow' />
                )}
              </Button>
            }
            backButton={
              <Button
                size='medium'
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight className='arrow' />
                ) : (
                  <KeyboardArrowLeft className='arrow' />
                )}
              </Button>
            }
          />
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            id='swipe-container'
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {projectData.map(
              (project, index) =>
                activeStep === index && (
                  <div key={project + index}>
                    <div
                      className={project}
                      sx={{
                        height: 255,
                        display: "block",
                        maxWidth: 400,
                        overflow: "hidden",
                        width: "100%",
                      }}
                    >
                      <ProjectCard key={project.id} project={project} />
                    </div>
                  </div>
                )
            )}
          </SwipeableViews>
        </Box>
      </div>
    </div>
  );
};

export default Projects;
