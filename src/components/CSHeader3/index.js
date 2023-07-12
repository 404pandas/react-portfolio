import React from "react";
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
          5'4"
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
