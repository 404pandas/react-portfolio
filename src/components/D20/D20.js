import React from "react";
import "./style.css";
import { Button, Typography } from "@mui/material";
import { DiceRoller } from "@dice-roller/rpg-dice-roller";

export const D20 = () => {
  var resultText = document.getElementById("roll-result");
  function rollDice() {
    const roller = new DiceRoller();
    const roll1 = roller.roll("1d20");
    if (roll1.total > 19) {
      resultText.innerHTML = "Congrats! You rolled a Nat20!";
    } else if (roll1.total < "2") {
      resultText.innerHTML = "You rolled a Nat20! Loser.";
    } else {
      resultText.innerHTML = roll1.total;
    }
  }

  return (
    <div>
      <div id='roll-container'>
        <Button variant='outlined' onClick={rollDice} id='roll-button'>
          D20
        </Button>
        <Typography variant='body2'>You rolled a: </Typography>
        <Typography variant='body2' id='roll-result'></Typography>
      </div>
    </div>
  );
};
