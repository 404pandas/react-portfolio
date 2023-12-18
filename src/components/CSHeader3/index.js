import React from "react";

// external imports
import Typography from "@mui/material/Typography";

const CSHeader3 = ({ headerCounter }) => {
  return (
    headerCounter > 50 && (
      <>
        <Typography
          variant='body2'
          id=''
          className='cs-text trait-text right-text'
        >
          31
        </Typography>
        <Typography
          variant='body2'
          id=''
          className='cs-text trait-text right-text'
        >
          Blue
        </Typography>
      </>
    )
  );
};

export default CSHeader3;
