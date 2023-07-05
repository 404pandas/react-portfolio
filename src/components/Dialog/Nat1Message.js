// Message.js
import React from "react";
import Typewriter from "typewriter-effect";

export default function Nat1Message() {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .typeString("This will be the Nat 1 message!")
          .callFunction(() => {
            console.log("String typed out!");
          })
          .pauseFor(300)

          .callFunction(() => {
            console.log("Pause completed");
          })
          .start();
      }}
    />
  );
}
