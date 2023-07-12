import React from "react";
import Typography from "@mui/material/Typography";
export const CSAppearance2 = ({ appearanceCounter }) => {
  return (
    appearanceCounter > 50 && (
      <>
        <Typography
          variant='body2'
          id=''
          className='cs-text trait-text appearance-text'
        >
          Ordinarilly, she wears whatever is clean and comfy. In school, she was
          mistaken for an "emo" because she only wear black shirts. The truth
          was, in fact, she's lazy and doesn't want to worry about matching
          outfits.
        </Typography>
      </>
    )
  );
};
