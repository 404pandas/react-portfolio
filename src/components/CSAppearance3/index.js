import React from "react";

// external imports
import Typography from "@mui/material/Typography";

export const CSAppearance3 = ({ appearanceCounter }) => {
  return (
    appearanceCounter > 75 && (
      <>
        <Typography
          variant='body2'
          id=''
          className='cs-text trait-text appearance-text'
        >
          On closer evaluation, one will see Mary's clothes are covered in
          animal hair. Impervious to lint rollers, the fur is a mix of dog, cat,
          human, and wild animal. It's evident she frequently handles animals of
          all species.
        </Typography>
      </>
    )
  );
};
