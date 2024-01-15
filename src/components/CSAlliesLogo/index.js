import React from "react";

// local imports
import edx from "../../assets/images/edx.png";
import twoU from "../../assets/images/2U.png";

export const CSAlliesLogo = ({ alliesCounter }) => {
  return (
    alliesCounter > 33 && (
      <>
        <div id='allies-logos'>
          <img src={edx} id='edx' alt='edx logo' className='allies-logo' />
          <img src={twoU} id='twou' alt='2u logo' className='allies-logo' />
        </div>{" "}
      </>
    )
  );
};
