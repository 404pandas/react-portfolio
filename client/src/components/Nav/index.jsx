import React, { useState, useEffect, useRef } from "react";
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
import CloseIcon from "@mui/icons-material/Close";
import CompassCalibrationIcon from "@mui/icons-material/CompassCalibration";
import gsap from "gsap";

export default function PirateNav() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 900);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Entrance animation — runs once on mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(
        navRef.current,
        { y: -70, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.55, ease: "power3.out" }
      ).fromTo(
        ".nav-link-item",
        { opacity: 0, y: -12 },
        { opacity: 1, y: 0, stagger: 0.07, duration: 0.35, ease: "power2.out" },
        "-=0.2"
      );
    }, navRef);
    return () => ctx.revert();
  }, []);

  const links = [
    { name: "Projects", path: "/projects" },
    { name: "Technologies", path: "/technologies" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Mobile", path: "/phone" },
    { name: "Who Is...?", path: "/whois" },
  ];

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <div ref={navRef}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "var(--brown)", borderBottom: "2px solid var(--black)" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            className="nav-link-item"
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
                  className="nav-link-item"
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
    </div>
  );
}
