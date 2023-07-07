import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Nat1Message from "../components/Dialog/Nat1Message";
import Nat20Message from "../components/Dialog/Nat20Message";
import NormalMessage from "../components/Dialog/NormalMessage";
// import $ from "jquery";

export default function Dialog() {
  const [isNat20, setNat20] = React.useState(false);
  const [isNat1, setNat1] = React.useState(true);
  const [isBetween, setBetween] = React.useState(false);
  const [result, setResult] = useState(-1);

  // Finds current face (functions on D20)
  //   const dieFace = $("div").find(`[data-face='${face}']`);

  // stores current face as a string
  //   let netFace = dieFace[0].dataset.face;

  //   console.log("You rolled " + netFace);
  //   if (netFace > 15) {
  //     console.log("You rolled higher than 15");
  //   } else if (netFace < 7) {
  //     console.log("You rolled less than 7");
  //   } else {
  //     console.log("else");
  //   }

  let content;

  if (isNat20) {
    content = <Nat20Message />;
  } else if (isNat1) {
    content = <Nat1Message />;
  } else if (isBetween) {
    content = <NormalMessage />;
  }

  return (
    <>
      <Navbar />
      <div className='dialogContainer'>
        <div className='dialogTitle'>Roll for Perception</div>
        <>
          <p>rolling area</p>
        </>
        <div>{content}</div>
        <div className='dialogFooter'>Next</div>
      </div>
      <Footer />
    </>
  );
}
