import { Typography } from "@mui/material";

import React from "react";

export const CSBackstory5 = ({ backstoryCounter }) => {
  return (
    backstoryCounter > 90 && (
      <>
        <Typography
          variant='body2'
          id=''
          className='cs-text trait-text backstory-text'
        >
          In the rollercoaster of carrying a miracle child, Mary became
          physically disabled. Identifying that she could no longer physically
          be a veterinary technician, she went back to school for Computer
          Science. Now, Mary enjoys working remotely in pajamas and watching
          Bluey for the 200th time while being a full time mom.
        </Typography>
      </>
    )
  );
};
