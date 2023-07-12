import React from "react";

// external imports
import Typography from "@mui/material/Typography";

export const CSTreasure1 = ({ treasureCounter }) => {
  return (
    treasureCounter > 33 && (
      <div>
        {" "}
        <ul className='cs-treasure'>
          <li>
            <Typography className='cs-text trait-text' variant='body2'>
              Friends
            </Typography>
          </li>
          <li>
            <Typography className='cs-text trait-text' variant='body2'>
              Family
            </Typography>
          </li>
          <li>
            <Typography className='cs-text trait-text' variant='body2'>
              Faith
            </Typography>
          </li>
          <li>
            <Typography className='cs-text trait-text' variant='body2'>
              Pets
            </Typography>
          </li>
          <li>
            <Typography className='cs-text trait-text' variant='body2'>
              Video games
            </Typography>
          </li>
        </ul>
      </div>
    )
  );
};
