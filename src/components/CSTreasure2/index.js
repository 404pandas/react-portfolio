import React from "react";

// external imports
import Typography from "@mui/material/Typography";

export const CSTreasure2 = ({ treasureCounter }) => {
  return (
    treasureCounter > 66 && (
      <>
        <Typography className='cs-text trait-text' variant='body2'>
          Leonard Nimoy autograph
        </Typography>

        <Typography className='cs-text trait-text' variant='body2'>
          Gaming computer
        </Typography>

        <Typography className='cs-text trait-text' variant='body2'>
          VR headset
        </Typography>

        <Typography className='cs-text trait-text' variant='body2'>
          Cricut
        </Typography>

        <Typography className='cs-text trait-text' variant='body2'>
          3D printer
        </Typography>
      </>
    )
  );
};
