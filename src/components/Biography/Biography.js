import React from "react";
import { useTheme } from "@mui/material/styles";
import "./Biography.css";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { CharacterSheet } from "../CharacterSheet/CharacterSheet";
import { CharacterImage } from "../CharacterImage/CharacterImage";
import { D20 } from "../D20/D20";
import { TypingDialog } from "../TypingDialog";

const dialogSteps = [
  {
    label: 0,
    description:
      "Blinking, your eyes adjust on a shockingly empty page. Could this be a mistake? You squint... slowly, your eyes adjust and you see a faint glimmer of light.",
  },
  {
    label: 1,
    description:
      "A familiar item appears; it's a Fifth Edition character sheet from Dungeons & Dragons. ",
  },
  {
    label: 2,
    description:
      "Suddenly, an image appears. It shows a panda. Not much is evident about the panda without further investigation.",
  },
  {
    label: 3,
    description:
      "As you roll to discover facts about the panda, the empty character sheet magically starts to fill in...",
  },
];

export default function Biography() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = dialogSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (dialogSteps) => {
    setActiveStep(dialogSteps);
  };
  console.log("active step-" + activeStep);
  return (
    <>
      <Grid container spacing={2} alignItems={"flex-start"}>
        <Grid item xs={6} id='text-adventure'>
          <div id='adventure-buttons'>
            <Box sx={{ width: "100%" }}>
              <MobileStepper
                steps={maxSteps}
                sx={{ backgroundColor: "transparent" }}
                position='static'
                activeStep={activeStep}
                nextButton={
                  <Button
                    size='small'
                    onClick={handleNext}
                    disabled={activeStep === maxSteps - 1}
                  >
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowLeft />
                    ) : (
                      <KeyboardArrowRight />
                    )}
                  </Button>
                }
                backButton={
                  <Button
                    size='small'
                    onClick={handleBack}
                    disabled={activeStep === 0}
                  >
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowRight />
                    ) : (
                      <KeyboardArrowLeft />
                    )}
                  </Button>
                }
              />
              <SwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
              >
                {dialogSteps.map(
                  (dialogSteps, index) =>
                    activeStep === index && (
                      <div key={dialogSteps.label + index}>
                        <div
                          className={dialogSteps.label}
                          sx={{
                            height: 255,
                            display: "block",
                            maxWidth: 400,
                            overflow: "hidden",
                            width: "100%",
                          }}
                        >
                          <TypingDialog
                            activeStep={activeStep}
                            index={index}
                            description={dialogSteps.description}
                          />
                        </div>
                      </div>
                    )
                )}
              </SwipeableViews>
            </Box>
          </div>
          <D20 />
        </Grid>
        <Grid item xs={6}>
          <CharacterImage />
        </Grid>
        <Grid item xs={12}>
          <CharacterSheet />
        </Grid>
      </Grid>
    </>
  );
}
