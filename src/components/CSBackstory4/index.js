import { Typography } from "@mui/material";

import React from "react";

export const CSBackstory4 = ({ backstoryCounter }) => {
  return (
    backstoryCounter > 70 && (
      <>
        <Typography
          variant='body2'
          id=''
          className='cs-text trait-text backstory-text'
        >
          Love soon struck Mary like a lightning bolt. In Florida, she grew
          close to her future husband. Early in life Mary was diagnosed with
          medical issues that would make conceiving, carrying, and delivering a
          child near impossible. Despite all this, she and her significant other
          found out they were expecting a little girl. On February 12, 2021,
          Yennefer entered her and her now husband's life.
        </Typography>
      </>
    )
  );
};
