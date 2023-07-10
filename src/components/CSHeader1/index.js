import React from "react";
import { Typography } from "@mui/material";

const CSHeader1 = ({ headerCounter }) => {
  return (
    headerCounter > 100 && (
      <>
        <Typography
          variant='body2'
          id='height'
          className='cs-text trait-text right-text'
        >
          5'4"{" "}
        </Typography>
        <Typography
          variant='body2'
          id='skin'
          className='cs-text trait-text right-text'
        >
          Caucasian
        </Typography>
      </>
    )
  );
};

export default CSHeader1;
