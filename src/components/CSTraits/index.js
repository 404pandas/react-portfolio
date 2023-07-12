import React from "react";

// external imports
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export const CSTraits = ({ traitsCounter }) => {
  return (
    traitsCounter > 25 && (
      <>
        <ul id='cs-traits-list'>
          <Grid container>
            <Grid item xs={6} id='traits-left'>
              <li>
                <Typography className='cs-text trait-text' variant='body2'>
                  PADI Divemaster
                </Typography>
              </li>
              <li>
                <Typography className='cs-text trait-text' variant='body2'>
                  Veterinary Technician
                </Typography>
              </li>
              <li>
                <Typography className='cs-text trait-text' variant='body2'>
                  Philanthropist
                </Typography>
              </li>
              <li>
                <Typography className='cs-text trait-text' variant='body2'>
                  Mother
                </Typography>
              </li>
              <li>
                <Typography className='cs-text trait-text' variant='body2'>
                  Wife
                </Typography>
              </li>
            </Grid>

            <Grid item xs={6} id='traits-right'>
              <li>
                <Typography className='cs-text trait-text' variant='body2'>
                  Motorcyclist
                </Typography>
              </li>
              <li>
                <Typography className='cs-text trait-text' variant='body2'>
                  Graphic Designer
                </Typography>
              </li>
              <li>
                <Typography className='cs-text trait-text' variant='body2'>
                  Artist
                </Typography>
              </li>
              <li>
                <Typography className='cs-text trait-text' variant='body2'>
                  Gamer
                </Typography>
              </li>
              <li>
                <Typography className='cs-text trait-text' variant='body2'>
                  TV Binger
                </Typography>
              </li>
            </Grid>
          </Grid>
        </ul>
      </>
    )
  );
};
