import React, { useState } from "react";
import header from "../../assets/images/cs-header.png";
import appearance from "../../assets/images/cs-appearance.png";
import allies from "../../assets/images/cs-allies.png";
import backstory from "../../assets/images/cs-backstory.png";
import traits from "../../assets/images/cs-features-traits.png";
import treasure from "../../assets/images/cs-treasure.png";
import Grid from "@mui/material/Grid";
import { Typography, Button } from "@mui/material";
import { createStore } from "redux";
import { DiceRoller } from "@dice-roller/rpg-dice-roller";

import "./style.css";
export const CharacterSheet = () => {
  const [headerCounter, setHeaderCounter] = useState(0);
  const [appearanceCounter, setAppearanceCounter] = useState(0);
  const [backstoryCounter, setBackstoryCounter] = useState(0);
  const [alliesCounter, setAlliesCounter] = useState(0);
  const [traitsCounter, setTraitsCounter] = useState(0);
  const [treasureCounter, setTreasureCounter] = useState(0);

  const headerIncrement = () => {
    var randomNum = getRandomInt(20);
    if (randomNum > 19) {
      setHeaderCounter((prevCounter) => prevCounter + 100);
    } else if (randomNum < 2) {
      setHeaderCounter((prevCounter) => prevCounter - prevCounter);
    } else {
      setHeaderCounter((prevCounter) => prevCounter + randomNum);
    }
  };
  const appearanceIncrement = () => {
    var randomNum = getRandomInt(20);
    if (randomNum > 19) {
      setAppearanceCounter((prevCounter) => prevCounter + 100);
    } else if (randomNum < 2) {
      setAppearanceCounter((prevCounter) => prevCounter - prevCounter);
    } else {
      setAppearanceCounter((prevCounter) => prevCounter + randomNum);
    }
  };
  const backstoryIncrement = () => {
    var randomNum = getRandomInt(20);
    if (randomNum > 19) {
      setBackstoryCounter((prevCounter) => prevCounter + 100);
    } else if (randomNum < 2) {
      setBackstoryCounter((prevCounter) => prevCounter - prevCounter);
    } else {
      setBackstoryCounter((prevCounter) => prevCounter + randomNum);
    }
  };
  const alliesIncrement = () => {
    var randomNum = getRandomInt(20);
    if (randomNum > 19) {
      setAlliesCounter((prevCounter) => prevCounter + 100);
    } else if (randomNum < 2) {
      setAlliesCounter((prevCounter) => prevCounter - prevCounter);
    } else {
      setAlliesCounter((prevCounter) => prevCounter + randomNum);
    }
  };
  const traitsIncrement = () => {
    var randomNum = getRandomInt(20);
    if (randomNum > 19) {
      setTraitsCounter((prevCounter) => prevCounter + 100);
    } else if (randomNum < 2) {
      setTraitsCounter((prevCounter) => prevCounter - prevCounter);
    } else {
      setTraitsCounter((prevCounter) => prevCounter + randomNum);
    }
  };
  const treasureIncrement = () => {
    var randomNum = getRandomInt(20);
    if (randomNum > 19) {
      setTreasureCounter((prevCounter) => prevCounter + 100);
    } else if (randomNum < 2) {
      setTreasureCounter((prevCounter) => prevCounter - prevCounter);
    } else {
      setTreasureCounter((prevCounter) => prevCounter + randomNum);
    }
  };

  function rollDiceAndStore() {
    const roller = new DiceRoller();

    const roll1 = roller.roll("1d20");
    if (roll1.total > 19) {
      console.log("Congrats! You rolled a Nat20!");
    } else if (roll1.total < "2") {
      console.log("You rolled a Nat20! Loser.");
    } else {
      console.log("You rolled a " + roll1.total);
    }
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {/* HEADER */}
          <img src={header} alt='test' id='cs-header' />
          <Typography id='character-name'>Mary Elenius</Typography>
          <Button
            variant='outlined'
            onClick={headerIncrement}
            className='hexagon-button'
          >
            Value: {headerCounter}
          </Button>
        </Grid>
        <Grid item xs={4}>
          {/* APPEARANCE */}
          <img src={appearance} alt='' id='cs-appearance' />
          <Button
            variant='outlined'
            onClick={appearanceIncrement}
            className='hexagon-button'
          >
            Value: {appearanceCounter}
          </Button>
          {/* BACKSTORY */}
          <img src={backstory} alt='' id='cs-backstory' />
          <Button
            variant='outlined'
            onClick={rollDiceAndStore}
            className='hexagon-button'
          >
            Value: {backstoryCounter}{" "}
          </Button>
        </Grid>
        <Grid item xs={8}>
          {/* ALLIES */}
          <img src={allies} alt='allies dnd character box' id='cs-allies' />
          <Button
            variant='outlined'
            onClick={alliesIncrement}
            className='hexagon-button'
          >
            Value: {alliesCounter}
          </Button>
          {/* TRAITS */}
          <img src={traits} alt='test' id='cs-traits' />
          <Button
            variant='outlined'
            onClick={traitsIncrement}
            className='hexagon-button'
          >
            Value: {traitsCounter}
          </Button>
          {/* TREASURE */}
          <img src={treasure} alt='test' id='cs-treasure' />
          <Button
            variant='outlined'
            onClick={treasureIncrement}
            className='hexagon-button'
          >
            Value: {treasureCounter}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
