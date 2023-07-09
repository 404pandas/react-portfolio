import React from "react";
import wizardPanda from "../../assets/images/panda-wizard.png";
import { Card, CardMedia } from "@mui/material";

export const CharacterImage = () => {
  return (
    <div>
      <Card>
        <CardMedia
          component='img'
          image={wizardPanda}
          height='300'
          alt='wizard panda'
        />
      </Card>
    </div>
  );
};
