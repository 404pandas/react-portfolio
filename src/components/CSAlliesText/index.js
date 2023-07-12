import Typography from "@mui/material/Typography";
import React from "react";

export const CSAlliesText = ({ alliesCounter }) => {
  return (
    alliesCounter > 99 && (
      <>
        {" "}
        <Typography
          variant='body2'
          id='allies-text'
          className='cs-text trait-text '
        >
          Mary currently works as a Teacher's Assistant and Central Grader with
          2U/edX. She also provides feedback on training materials for her
          current positions.{" "}
        </Typography>
      </>
    )
  );
};
