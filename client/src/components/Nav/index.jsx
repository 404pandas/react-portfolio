import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import CompassCalibrationIcon from "@mui/icons-material/CompassCalibration";

export default function PirateNav() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 900);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = [
    { name: "Projects", path: "/projects" },
    { name: "Technologies", path: "/technologies" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Mobile", path: "/phone" },
    { name: "Who Is...?", path: "/whois" },
  ];

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#594b39", borderBottom: "2px solid #0d0d0d" }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ textDecoration: "none", color: "#DADAD2", fontWeight: "bold" }}
        >
          Home
        </Typography>

        {isDesktop ? (
          <Box sx={{ display: "flex", gap: 4 }}>
            {links.map((link) => (
              <Typography
                key={link.name}
                component={Link}
                to={link.path}
                sx={{
                  textDecoration: "none",
                  color: "#DADAD2",
                  "&:hover": { color: "#F2C800" },
                }}
              >
                {link.name}
              </Typography>
            ))}
          </Box>
        ) : (
          <div>
            <IconButton color="inherit" onClick={handleMenuOpen}>
              {anchorEl ? <CloseIcon /> : <CompassCalibrationIcon />}
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              {links.map((link) => (
                <MenuItem
                  key={link.name}
                  onClick={handleMenuClose}
                  component={Link}
                  to={link.path}
                  sx={{ color: "#010302", fontWeight: "bold" }}
                >
                  {link.name}
                </MenuItem>
              ))}
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
