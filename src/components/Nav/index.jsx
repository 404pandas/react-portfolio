// external modules
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

// local modules
import "./style.css";

const Nav = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMediumScreen(window.innerWidth >= 900);
    };

    const checkTouchDevice = () => {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      );
    };

    // Run these checks once on component mount
    checkScreenSize();
    checkTouchDevice();
  }, []);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {" "}
      <div id="nav">
        <Link to="/" id="home-nav">
          <h1 id="home">Home</h1>
        </Link>
        <div id="vr" className="subtitles"></div>
        {isTouchDevice && isMediumScreen ? (
          <>
            <List className="reg-nav">
              <ListItem className="subtitles" onClick={handleClose}>
                <Link to="/projects" className="drp-a">
                  <h2>Projects</h2>
                </Link>
              </ListItem>
              <ListItem className="subtitles" onClick={handleClose}>
                <Link to="/technologies" className="drp-a">
                  <h2>Technologies</h2>
                </Link>
              </ListItem>
              <ListItem className="subtitles" onClick={handleClose}>
                <Link to="/about" className="drp-a">
                  <h2>About</h2>
                </Link>
              </ListItem>
            </List>
          </>
        ) : (
          <>
            <Button
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              className="nav-trig"
            >
              Menu
            </Button>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem className="subtitles" onClick={handleClose}>
                <Link to="/projects" className="drp-a">
                  <h2>Projects</h2>
                </Link>
              </MenuItem>
              <MenuItem className="subtitles" onClick={handleClose}>
                <Link to="/technologies" className="drp-a">
                  <h2>Technologies</h2>
                </Link>
              </MenuItem>
              <MenuItem className="subtitles" onClick={handleClose}>
                <Link to="/about" className="drp-a">
                  <h2>About</h2>
                </Link>
              </MenuItem>
            </Menu>
          </>
        )}
      </div>
    </>
  );
};

export default Nav;
