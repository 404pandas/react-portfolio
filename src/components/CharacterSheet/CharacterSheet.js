import React from "react";
import header from "../../assets/images/cs-header.png";
import appearance from "../../assets/images/cs-appearance.png";
import allies from "../../assets/images/cs-allies.png";
import backstory from "../../assets/images/cs-backstory.png";
import traits from "../../assets/images/cs-features-traits.png";
import treasure from "../../assets/images/cs-treasure.png";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

import "./style.css";
export const CharacterSheet = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <img src={header} alt='test' id='cs-header' />
          <Typography id='character-name'>Mary Elenius</Typography>

          {/* <Box component='img' src={{ header }}></Box> */}
        </Grid>
        <Grid item xs={4}>
          <img src={appearance} alt='' id='cs-appearance' />
          <img src={backstory} alt='' id='cs-backstory' />
        </Grid>
        <Grid item xs={8}>
          <img src={allies} alt='allies dnd character box' id='cs-allies' />
          <img src={traits} alt='test' id='cs-traits' />
          <img src={treasure} alt='test' id='cs-treasure' />
        </Grid>
      </Grid>
    </div>
  );
};
