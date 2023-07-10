import React from "react";
import Biography from "../components/Biography/Biography";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const D20 = () => {
  return (
    <>
      <Navbar />
      <div className='content' id='test-content'>
        <div id='text-adventure'>
          <Biography />
        </div>{" "}
        <Footer />
      </div>
    </>
  );
};

export default D20;
