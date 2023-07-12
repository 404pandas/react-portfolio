import React from "react";

// External imports
import Typography from "@mui/material/Typography";

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
