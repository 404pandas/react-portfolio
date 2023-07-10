import { Typography } from "@mui/material";

import React from "react";

export const CSBackstory1 = ({ backstoryCounter }) => {
  return (
    backstoryCounter > 10 && (
      <>
        <Typography
          variant='body2'
          id=''
          className='cs-text trait-text backstory-text'
        >
          Born in Sioux Falls, SD, Mary was born with the innate desire and
          passion to help animals. Growing up, she was constantly trying to
          rescue every animal she could find. Her childhood family consists of
          her mother, father, and brother.
        </Typography>
      </>
    )
  );
};
