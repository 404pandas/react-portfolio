import React from "react";

// external imports
import Typography from "@mui/material/Typography";

export const CSTreasure3 = ({ treasureCounter }) => {
  return (
    treasureCounter > 99 && (
      <>
        <Typography
          id='treasures'
          className='cs-text trait-text'
          variant='body2'
        >
          Volkswagon Jetta
        </Typography>

        <Typography
          id='treasures'
          className='cs-text trait-text'
          variant='body2'
        >
          Trailer home
        </Typography>

        <Typography
          id='treasures'
          className='cs-text trait-text'
          variant='body2'
        >
          Boba Fett helmet
        </Typography>

        <Typography
          id='treasures'
          className='cs-text trait-text'
          variant='body2'
        >
          Wildlife Rescue
        </Typography>

        <Typography
          id='treasures'
          className='cs-text trait-text'
          variant='body2'
        >
          Lightsabers
        </Typography>
      </>
    )
  );
};
