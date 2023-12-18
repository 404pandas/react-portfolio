import React from "react";

// external imports
import Typography from "@mui/material/Typography";

const CSHeader2 = ({ headerCounter }) => {
  return (
    headerCounter > 75 && (
      <>
        <Typography
          variant='body2'
          id=''
          className='cs-text trait-text  right-text'
        >
          5'4"
        </Typography>
        <Typography
          variant='body2'
          id=''
          className='cs-text trait-text  right-text'
        >
          Caucasian
        </Typography>
      </>
    )
  );
};

export default CSHeader2;
