import React from "react";

// external imports
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

// local imports
import wizardPanda from "../../assets/images/panda-wizard.png";

export const CharacterImage = () => {
  return (
    <div>
      <Card
        id='panda-character'
        style={{ backgroundColor: "transparent", height: "80% !important" }}
      >
        <CardMedia
          component='img'
          image={wizardPanda}
          height='300'
          alt='wizard panda'
          id='panda-img'
        />
      </Card>
    </div>
  );
};
