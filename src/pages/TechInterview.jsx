import React from "react";

// local imports
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TechInterview = () => {
  return (
    <>
      <Navbar />
      <div className='content' id='test-content'>
        <div id='interview-prep'></div>
      </div>{" "}
      <Footer />
    </>
  );
};

export default TechInterview;
