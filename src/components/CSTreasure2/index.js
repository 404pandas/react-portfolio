import React from "react";
import { Grid, Typography } from "@mui/material";

export const CSTreasure2 = ({ treasureCounter }) => {
  return (
    treasureCounter > 66 && (
      <div>
        {" "}
        <ul className='cs-treasure'>
          <li>
            <Typography className='cs-text trait-text' variant='body2'>
              Leonard Nimoy autograph
            </Typography>
          </li>
          <li>
            <Typography className='cs-text trait-text' variant='body2'>
              Gaming computer
            </Typography>
          </li>
          <li>
            <Typography className='cs-text trait-text' variant='body2'>
              VR headset
            </Typography>
          </li>
          <li>
            <Typography className='cs-text trait-text' variant='body2'>
              Cricut
            </Typography>
          </li>
          <li>
            <Typography className='cs-text trait-text' variant='body2'>
              3D printer
            </Typography>
          </li>
        </ul>
      </div>
    )
  );
};
