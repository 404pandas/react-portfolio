import React from "react";

// external imports
import Typography from "@mui/material/Typography";

export const CSTreasure1 = ({ treasureCounter }) => {
  return (
    treasureCounter > 33 && (
      <>
        <Typography className='cs-text trait-text' variant='body2'>
          Friends
        </Typography>
        <Typography className='cs-text trait-text' variant='body2'>
          Family
        </Typography>
        <Typography className='cs-text trait-text' variant='body2'>
          Faith
        </Typography>
        <Typography className='cs-text trait-text' variant='body2'>
          Pets
        </Typography>
        <Typography className='cs-text trait-text' variant='body2'>
          Video games
        </Typography>
      </>
    )
  );
};
