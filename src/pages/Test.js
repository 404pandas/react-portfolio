import React from "react";
import Biography from "../components/Biography/Biography";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Test = () => {
  return (
    <>
      <Navbar />
      <div className='content' id='test-content'>
        <div id='text-adventure'>
          <Biography />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Test;
