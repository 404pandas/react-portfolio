import React from "react";

// external imports
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

// local imports
import wizardPanda from "../../assets/images/panda-wizard.png";

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
