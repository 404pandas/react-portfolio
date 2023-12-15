import React, { useState } from "react";

// local imports
import "./style.css";
import PortfolioLogo from "../../assets/images/react-portfolio-logo.png";

// external imports
import { Link } from "react-router-dom";
import { RxDropdownMenu } from "react-icons/rx";
import { IoMdArrowDropup } from "react-icons/io";
import { FaDiceD20 } from "react-icons/fa";
import Typography from "@mui/material/Typography";

const Navbar = () => {
  const [click, unClick] = useState(false);
  const handleClick = () => unClick(!click);

  const [color, scrollColor] = useState(false);
  const changeScrollColor = () => {
    if (window.scrollY >= 100) {
      scrollColor(true);
    } else {
      scrollColor(false);
    }
  };

  window.addEventListener("scroll", changeScrollColor);

  return (
    <div className={color ? "nav nav-solid" : "nav"}>
      <div className='nameZindex'>
        <a href='/'>
          <h1>Mary Elenius</h1>
        </a>

        <Link to='/d20' className='flexbox-turn-on' id='die'>
          <FaDiceD20 />
          <Typography variant='body1' id='roll'>
            Roll!
          </Typography>
        </Link>
      </div>
      <ul className={click ? "nav-right" : "nav-right active"}>
        <li>
          <img
            className='reactLogo'
            src={PortfolioLogo}
            alt='ME logo with portfolio color palette'
            href='https://github.com/404pandas'
          />
        </li>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/Projects'>Projects</Link>
        </li>
        <li>
          <Link to='/About'>About</Link>
        </li>
        <li>
          <Link to='/Technologies'>Technologies</Link>
        </li>
        <li>
          <Link to='/Interview-practice'>Interview Prep</Link>
        </li>
      </ul>
      <div onClick={handleClick}>
        {click ? (
          <IoMdArrowDropup size={30} style={{ color: "#D97777" }} />
        ) : (
          <RxDropdownMenu size={30} style={{ color: "#D97777" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
