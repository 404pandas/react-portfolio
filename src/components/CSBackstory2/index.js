import Typography from "@mui/material/Typography";
import React from "react";

export const CSBackstory2 = ({ backstoryCounter }) => {
  return (
    backstoryCounter > 30 && (
      <>
        <Typography
          variant='body2'
          id=''
          className='cs-text trait-text backstory-text'
        >
          Naturally, upon graduating high school she went to college for Zoology
          and Veterinary Technology. A defining point in her life was when she
          began work as a Veterinary Technician with her childhood hero,
          Veterinarian Dayton Williams. Unforuntately, alcoholism and trauma hit
          hard and fast shortly after.
        </Typography>
      </>
    )
  );
};
