import React from "react";

// external imports
import Typography from "@mui/material/Typography";

export const CSTreasure3 = ({ treasureCounter }) => {
  return (
    treasureCounter > 99 && (
      <div>
        {" "}
        <ul className='cs-treasure'>
          <li>
            <Typography className='cs-text trait-text' variant='body2'>
              Volkswagon Jetta
            </Typography>
          </li>
          <li>
            <Typography className='cs-text trait-text' variant='body2'>
              Trailer home
            </Typography>
          </li>
          <li>
            <Typography className='cs-text trait-text' variant='body2'>
              Boba Fett helmet
            </Typography>
          </li>
          <li>
            <Typography className='cs-text trait-text' variant='body2'>
              Wildlife Rescue
            </Typography>
          </li>
          <li>
            <Typography className='cs-text trait-text' variant='body2'>
              Lightsabers
            </Typography>
          </li>
        </ul>
      </div>
    )
  );
};
