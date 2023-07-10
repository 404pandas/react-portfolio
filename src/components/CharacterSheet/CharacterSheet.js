import React, { useState } from "react";
import header from "../../assets/images/cs-header.png";
import appearance from "../../assets/images/cs-appearance.png";
import allies from "../../assets/images/cs-allies.png";
import backstory from "../../assets/images/cs-backstory.png";
import traits from "../../assets/images/cs-features-traits.png";
import treasure from "../../assets/images/cs-treasure.png";
import Grid from "@mui/material/Grid";
import { Typography, Button } from "@mui/material";
import "./style.css";
import CSHeader1 from "../CSHeader1";
import CSHeader2 from "../CSHeader2";
import CSHeader3 from "../CSHeader3";
import CSHeader4 from "../CSHeader4";
import { RollResponse } from "../RollResponse";
import { CSAppearance1 } from "../CSAppearance1";
import { CSAppearance2 } from "../CSAppearance2";
import { CSAppearance3 } from "../CSAppearance3";
import { CSBackstory1 } from "../CSBackstory1";
import { CSBackstory2 } from "../CSBackstory2";
import { CSBackstory3 } from "../CSBackstory3";
import { CSBackstory4 } from "../CSBackstory4";
import { CSBackstory5 } from "../CSBackstory5";

export const CharacterSheet = () => {
  const [headerCounter, setHeaderCounter] = useState(0);
  const [appearanceCounter, setAppearanceCounter] = useState(0);
  const [backstoryCounter, setBackstoryCounter] = useState(0);
  const [alliesCounter, setAlliesCounter] = useState(0);
  const [traitsCounter, setTraitsCounter] = useState(0);
  const [treasureCounter, setTreasureCounter] = useState(0);

  const headerIncrement = () => {
    var randomNumHeader = getRandomInt(20);
    if (randomNumHeader > 19) {
      setHeaderCounter((prevCounter) => prevCounter + 100);
    } else if (randomNumHeader < 2) {
      setHeaderCounter((prevCounter) => prevCounter - prevCounter);
    } else {
      setHeaderCounter((prevCounter) => prevCounter + randomNumHeader);
    }
    localStorage.setItem("headerRoll", randomNumHeader);
  };

  var headerNumber = localStorage.getItem("headerRoll");

  const appearanceIncrement = () => {
    var randomNumAppearance = getRandomInt(20);
    if (randomNumAppearance > 19) {
      setAppearanceCounter((prevCounter) => prevCounter + 100);
    } else if (randomNumAppearance < 2) {
      setAppearanceCounter((prevCounter) => prevCounter - prevCounter);
    } else {
      setAppearanceCounter((prevCounter) => prevCounter + randomNumAppearance);
    }
    localStorage.setItem("appearanceRoll", randomNumAppearance);
  };

  var appearanceNumber = localStorage.getItem("appearanceRoll");

  const backstoryIncrement = () => {
    var randomNumBackstory = getRandomInt(20);
    if (randomNumBackstory > 19) {
      setBackstoryCounter((prevCounter) => prevCounter + 100);
    } else if (randomNumBackstory < 2) {
      setBackstoryCounter((prevCounter) => prevCounter - prevCounter);
    } else {
      setBackstoryCounter((prevCounter) => prevCounter + randomNumBackstory);
    }
    localStorage.setItem("backstoryRoll", randomNumBackstory);
  };

  var backstoryNumber = localStorage.getItem("backstoryRoll");

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

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  return (
    <div className='trait-containers'>
      <Grid container spacing={2}>
        <Grid item xs={12} id='full-header-container'>
          {/* HEADER */}
          <img src={header} alt='test' id='cs-header' />
          {/* Left grid */}
          <Grid container id='header-container'>
            <Grid item xs={5} className='flexbox-turn-on'>
              <Grid container class='text-container'>
                <CSHeader4 headerCounter={headerCounter} />
              </Grid>
            </Grid>
            <Grid item xs={7} className='flexbox-turn-on'>
              {/* Right grid */}
              <Grid container spacing={4} id='right-header'>
                <Grid item xs={4} className='trait-items flexbox-turn-on '>
                  <CSHeader3 headerCounter={headerCounter} />
                </Grid>
                <Grid item xs={4} className='trait-items flexbox-turn-on '>
                  <CSHeader2 headerCounter={headerCounter} />
                </Grid>{" "}
                <Grid item xs={4} className='trait-items flexbox-turn-on '>
                  <CSHeader1 headerCounter={headerCounter} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <div className='individual-rolls'>
            <Button
              variant='outlined'
              onClick={headerIncrement}
              className='hexagon-button'
            >
              Roll!
            </Button>
            <Button
              variant='outlined'
              onClick={() => setHeaderCounter(200)}
              className='hexagon-button'
              headerCounter={headerCounter}
            >
              Crit Success
            </Button>
            <Button
              variant='outlined'
              onClick={() => setHeaderCounter(0)}
              className='hexagon-button'
              headerCounter={headerCounter}
            >
              Crit Failure
            </Button>
            <Typography variant='body2'>
              You rolled a: {headerNumber}
            </Typography>
            <RollResponse />
          </div>
        </Grid>
        {/* END OF HEADER */}
        <Grid item xs={4} className='trait-items'>
          {/* APPEARANCE */}
          <div className='trait-containers' id='appearance-container'>
            <img src={appearance} alt='' id='cs-appearance' />
            <div id='appearance-trait'>
              <CSAppearance1 appearanceCounter={appearanceCounter} />

              <CSAppearance2 appearanceCounter={appearanceCounter} />

              <CSAppearance3 appearanceCounter={appearanceCounter} />
            </div>
            <div className='individual-rolls'>
              <Button
                variant='outlined'
                onClick={appearanceIncrement}
                className='hexagon-button'
              >
                ROLL!
              </Button>
              <Button
                variant='outlined'
                onClick={() => setAppearanceCounter(200)}
                className='hexagon-button'
                appearanceCounter={appearanceCounter}
              >
                Succ
              </Button>
              <Button
                variant='outlined'
                onClick={() => setAppearanceCounter(0)}
                className='hexagon-button'
                appearanceCounter={appearanceCounter}
              >
                Fail
              </Button>

              <Typography variant='body2'>Roll: {appearanceNumber}</Typography>
            </div>
          </div>{" "}
          {/* END OF APPEARANCE */}
          {/* BACKSTORY */}
          <div className='trait-containers' id='backstory-container'>
            <img src={backstory} alt='' id='cs-backstory' />
            <div id='backstory-trait'>
              <CSBackstory1 backstoryCounter={backstoryCounter} />
              <CSBackstory2 backstoryCounter={backstoryCounter} />
              <CSBackstory3 backstoryCounter={backstoryCounter} />
              <CSBackstory4 backstoryCounter={backstoryCounter} />
              <CSBackstory5 backstoryCounter={backstoryCounter} />
            </div>
            <div className='individual-rolls'>
              <Button
                variant='outlined'
                onClick={backstoryIncrement}
                className='hexagon-button'
              >
                {backstoryCounter}{" "}
              </Button>
              <Button
                variant='outlined'
                onClick={() => setBackstoryCounter(200)}
                className='hexagon-button'
                backstoryCounter={backstoryCounter}
              >
                Succ
              </Button>
              <Button
                variant='outlined'
                onClick={() => setBackstoryCounter(0)}
                className='hexagon-button'
                backstoryCounter={backstoryCounter}
              >
                Fail
              </Button>
              <Typography variant='body2'>Roll: {backstoryNumber}</Typography>
            </div>
          </div>
        </Grid>
        {/* END OF BACKSTORY */}

        <Grid item xs={7}>
          {/* ALLIES */}
          <div className='trait-containers'>
            <img src={allies} alt='allies dnd character box' id='cs-allies' />
            <Button
              variant='outlined'
              onClick={alliesIncrement}
              className='hexagon-button'
            >
              {alliesCounter}
            </Button>
          </div>
          {/* END OF ALLIES */}

          {/* TRAITS */}
          <div className='trait-containers'>
            <img src={traits} alt='test' id='cs-traits' />
            <Button
              variant='outlined'
              onClick={traitsIncrement}
              className='hexagon-button'
            >
              {traitsCounter}
            </Button>
          </div>
          {/* END OF TRAITS */}

          {/* TREASURE */}
          <div className='trait-containers'>
            <img src={treasure} alt='test' id='cs-treasure' />
            <Button
              variant='outlined'
              onClick={treasureIncrement}
              className='hexagon-button'
            >
              {treasureCounter}
            </Button>
          </div>
          {/* END OF TREASURE */}
        </Grid>
      </Grid>
    </div>
  );
};
