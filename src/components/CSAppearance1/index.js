import { Typography } from "@mui/material";
import React from "react";

export const CSAppearance1 = ({ appearanceCounter }) => {
  return (
    appearanceCounter > 25 && (
      <>
        <Typography
          variant='body2'
          id=''
          className='cs-text trait-text appearance-text'
        >
          Mary appears to the naked eye a typical developer. She has blonde
          hair, which is dyed to the color that matches her mood at the time of
          coloring. Blue eyes adorn her face, occasionally with glasses. Her
          pale skin looks as if she's never tanned a day in her life. This is
          due to her fantastic ability to burn regardless of the strength of
          sunscreen.
        </Typography>
      </>
    )
  );
};
