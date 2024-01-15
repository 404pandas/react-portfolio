import React from "react";

// external imports
import Typography from "@mui/material/Typography";

export const CSTreasure1 = ({ treasureCounter }) => {
  return (
    treasureCounter > 33 && (
      <>
        <Typography
          id='treasures'
          className='cs-text trait-text'
          variant='body2'
        >
          Friends
        </Typography>
        <Typography
          id='treasures'
          className='cs-text trait-text'
          variant='body2'
        >
          Family
        </Typography>
        <Typography
          id='treasures'
          className='cs-text trait-text'
          variant='body2'
        >
          Faith
        </Typography>
        <Typography
          id='treasures'
          className='cs-text trait-text'
          variant='body2'
        >
          Pets
        </Typography>
        <Typography
          id='treasures'
          className='cs-text trait-text'
          variant='body2'
        >
          Video games
        </Typography>
      </>
    )
  );
};
