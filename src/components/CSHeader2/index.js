import React from "react";
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
          Average
        </Typography>
        <Typography
          variant='body2'
          id=''
          className='cs-text trait-text  right-text'
        >
          Blonde
        </Typography>
      </>
    )
  );
};

export default CSHeader2;
