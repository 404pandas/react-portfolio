import React from "react";
import "./style.css";
import Typewriter from "typewriter-effect";

export const TypingDialog = ({ activeStep, index, description }) => {
  console.log("index", index);
  console.log("activestep", activeStep);
  const onInit = (typewriter) => {
    if (activeStep === index) {
      typewriter.typeString(description).start();
    } else {
      typewriter.stop();
    }
  };
  return (
    <div>
      <Typewriter onInit={onInit} />
    </div>
  );
};
