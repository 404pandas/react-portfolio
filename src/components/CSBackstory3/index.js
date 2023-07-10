import { Typography } from "@mui/material";

import React from "react";

export const CSBackstory3 = ({ backstoryCounter }) => {
  return (
    backstoryCounter > 50 && (
      <>
        <Typography
          variant='body2'
          id=''
          className='cs-text trait-text backstory-text'
        >
          Upon identifying that she is an alcoholic, Mary entered a 30 day
          rehabilitation center. With alcohol no longer holding her back she
          decided to accomplish her life-long dream of living near a beach and
          moved to Port St Lucie, Florida.
        </Typography>
      </>
    )
  );
};
