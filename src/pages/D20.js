import React from "react";

// local imports
import Biography from "../components/Biography";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
