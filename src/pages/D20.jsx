import React from "react";

// local imports
import Biography from "../components/Biography";

const D20 = () => {
  return (
    <>
      <div
        className='content'
        id='test-content about'
        style={{
          backgroundSize: "cover",
          padding: "10px",
          marginTop: "4%",
        }}
      >
        <div id='text-adventure'>
          <Biography />
        </div>{" "}
      </div>
    </>
  );
};

export default D20;
