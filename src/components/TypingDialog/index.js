import React from "react";

// local imports
import "./style.css";

// external imports
import Typewriter from "typewriter-effect";

export const TypingDialog = ({ activeStep, index, description }) => {
  const onInit = (typewriter) => {
    if (activeStep === index) {
      typewriter.typeString(description).start();
    } else {
      typewriter.stop();
    }
  };
  return (
    <div>
      <Typewriter onInit={onInit} options={{ cursor: "" }} />
    </div>
  );
};
