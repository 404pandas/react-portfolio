import React, { useState } from "react";

// external imports
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// local imports
import header from "../../assets/images/cs-header.png";
import appearance from "../../assets/images/cs-appearance.png";
import allies from "../../assets/images/cs-allies.png";
import backstory from "../../assets/images/cs-backstory.png";
import traits from "../../assets/images/cs-features-traits.png";
import treasure from "../../assets/images/cs-treasure.png";

import "./style.css";

// components
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
import { CSAlliesLogo } from "../CSAlliesLogo";
import { CSAlliesName } from "../CSAlliesName";
import { CSAlliesText } from "../CSAlliesText";
import { CSTraits } from "../CSTraits";
import { CSTreasure3 } from "../CSTreasure3";
import { CSTreasure1 } from "../CSTreasure1";
import { CSTreasure2 } from "../CSTreasure2";

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
    var randomNumAllies = getRandomInt(20);
    if (randomNumAllies > 19) {
      setAlliesCounter((prevCounter) => prevCounter + 100);
    } else if (randomNumAllies < 2) {
      setAlliesCounter((prevCounter) => prevCounter - prevCounter);
    } else {
      setAlliesCounter((prevCounter) => prevCounter + randomNumAllies);
    }
    localStorage.setItem("alliesRoll", randomNumAllies);
  };

  var alliesNumber = localStorage.getItem("alliesRoll");

  const traitsIncrement = () => {
    var randomNumTraits = getRandomInt(20);
    if (randomNumTraits > 19) {
      setTraitsCounter((prevCounter) => prevCounter + 100);
    } else if (randomNumTraits < 2) {
      setTraitsCounter((prevCounter) => prevCounter - prevCounter);
    } else {
      setTraitsCounter((prevCounter) => prevCounter + randomNumTraits);
    }
    localStorage.setItem("traitsRoll", randomNumTraits);
  };

  var traitsNumber = localStorage.getItem("traitsRoll");

  const treasureIncrement = () => {
    var randomNumTreasure = getRandomInt(20);
    if (randomNumTreasure > 19) {
      setTreasureCounter((prevCounter) => prevCounter + 100);
    } else if (randomNumTreasure < 2) {
      setTreasureCounter((prevCounter) => prevCounter - prevCounter);
    } else {
      setTreasureCounter((prevCounter) => prevCounter + randomNumTreasure);
    }
    localStorage.setItem("treasureRoll", randomNumTreasure);
  };
  var treasureNumber = localStorage.getItem("treasureRoll");

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  return (
    <div className='trait-containers'>
      <Grid container spacing={2}>
        <Grid item xs={12} id='full-header-container'>
          {/* HEADER */}
          <img
            className='img-containers'
            src={header}
            alt='test'
            id='cs-header'
          />
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

          <div className='individual-rolls' id='header-rolls'>
            <Button
              variant='outlined'
              onClick={headerIncrement}
              className='hexagon-button header-buttons'
            >
              Roll!
            </Button>
            <Button
              variant='outlined'
              onClick={() => setHeaderCounter(200)}
              className='hexagon-button header-buttons'
              headerCounter={headerCounter}
            >
              Crit Success
            </Button>
            <Button
              variant='outlined'
              onClick={() => setHeaderCounter(0)}
              className='hexagon-button header-buttons'
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
        <Grid item xs={12} md={4} id='flex-fix' className='trait-items'>
          {/* APPEARANCE */}
          <div className='trait-containers' id='appearance-container'>
            <img
              className='img-containers'
              src={appearance}
              alt=''
              id='cs-appearance'
            />
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
                ROLL
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
            <img
              className='img-containers'
              src={backstory}
              alt=''
              id='cs-backstory'
            />
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
                Roll
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

        <Grid item xs={12} md={7} id='right-container'>
          {/* ALLIES */}
          <Grid container spacing={1} id='allies-container'>
            <img
              className='img-containers'
              src={allies}
              alt='allies dnd character box'
              id='cs-allies'
            />{" "}
            <Grid item xs={6} id='innert-left'>
              <CSAlliesText alliesCounter={alliesCounter} />
            </Grid>
            <Grid item xs={5} id='inner-right'>
              {" "}
              <CSAlliesName alliesCounter={alliesCounter} />
              <CSAlliesLogo alliesCounter={alliesCounter} />
            </Grid>
            <div className='individual-rolls' id='allies-rolls'>
              <Button
                variant='outlined'
                onClick={alliesIncrement}
                className='hexagon-button'
              >
                Roll
              </Button>
              <Button
                variant='outlined'
                onClick={() => setAlliesCounter(200)}
                className='hexagon-button'
                alliesCounter={alliesCounter}
              >
                Succ
              </Button>
              <Button
                variant='outlined'
                onClick={() => setAlliesCounter(0)}
                className='hexagon-button'
                alliesCounter={alliesCounter}
              >
                Fail
              </Button>
              <Typography variant='body2'>Roll: {alliesNumber}</Typography>
            </div>
          </Grid>
          {/* END OF ALLIES */}
          {/* TRAITS */}
          <div id='trait-fix'>
            <img
              className='img-containers'
              src={traits}
              alt='test'
              id='cs-traits'
            />
            <CSTraits traitsCounter={traitsCounter} />
            <div className='individual-rolls' id='traits-rolls'>
              <Button
                variant='outlined'
                onClick={traitsIncrement}
                className='hexagon-button'
              >
                Roll
              </Button>
              <Button
                variant='outlined'
                onClick={() => setTraitsCounter(200)}
                className='hexagon-button'
                traitsCounter={traitsCounter}
              >
                Succ
              </Button>
              <Button
                variant='outlined'
                onClick={() => setTraitsCounter(0)}
                className='hexagon-button'
                traitsCounter={traitsCounter}
              >
                Fail
              </Button>
              <Typography variant='body2'>Roll: {traitsNumber}</Typography>
            </div>
          </div>
          {/* END OF TRAITS */}
          {/* TREASURE */}
          <div className='trait-containers' id='treasure-container'>
            <img
              className='img-containers'
              src={treasure}
              alt='test'
              id='cs-treasure'
            />

            <Grid container id='treasure-uls'>
              <Grid item sx={3}>
                <CSTreasure1 treasureCounter={treasureCounter} />
              </Grid>
              <Grid item sx={3}>
                <CSTreasure2 treasureCounter={treasureCounter} />
              </Grid>
              <Grid item sx={3}>
                <CSTreasure3 treasureCounter={treasureCounter} />
              </Grid>
            </Grid>

            <div className='individual-rolls' id='treasure-rolls'>
              <Button
                variant='outlined'
                onClick={treasureIncrement}
                className='hexagon-button'
              >
                Roll
              </Button>
              <Button
                variant='outlined'
                onClick={() => setTreasureCounter(200)}
                className='hexagon-button'
                treasureCounter={treasureCounter}
              >
                Succ
              </Button>
              <Button
                variant='outlined'
                onClick={() => setTreasureCounter(0)}
                className='hexagon-button'
                treasureCounter={treasureCounter}
              >
                Fail
              </Button>
              <Typography variant='body2'>Roll: {treasureNumber}</Typography>
            </div>
          </div>
          {/* END OF TREASURE */}
        </Grid>
      </Grid>
    </div>
  );
};
