import React from "react";
import { Typography } from "@mui/material";

export const RollResponse = () => {
  var headerNumber = localStorage.getItem("headerRoll");

  return (
    headerNumber > 19 && (
      <div>
        {" "}
        <Typography variant='body2'>
          Congrats! A nat20! All information has been revealed.
        </Typography>
      </div>
    ),
    headerNumber < 2 && (
      <div>
        {" "}
        <Typography variant='body2'>
          Oof. Tough luck! The information has disappeared.
        </Typography>
      </div>
    )
  );
};
