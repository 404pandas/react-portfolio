import React from "react";

// external imports
import Typography from "@mui/material/Typography";

export const CSAlliesName = ({ alliesCounter }) => {
  return (
    alliesCounter > 66 && (
      <>
        {" "}
        <Typography
          variant='body2'
          id='allies-name'
          className='cs-text trait-text '
        >
          2U/edX
        </Typography>
      </>
    )
  );
};
