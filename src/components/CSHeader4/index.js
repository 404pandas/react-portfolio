import React from "react";
import { Typography } from "@mui/material";

const CSHeader4 = ({ headerCounter }) => {
  const charName = "Mary";
  return (
    headerCounter > 25 && (
      <>
        {" "}
        <Typography
          variant='body2'
          className='cs-text trait-text text'
          key={charName}
          align='center'
          id='char-name'
        >
          Mary
        </Typography>
      </>
    )
  );
};
export default CSHeader4;
