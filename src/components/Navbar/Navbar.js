import "./NavbarStyles.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxDropdownMenu } from "react-icons/rx";
import { IoMdArrowDropup } from "react-icons/io";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="nav">
      <a href="https://github.com/404pandas">
        <h1>Mary Elenius</h1>
      </a>
      <ul className={click ? "nav-right active" : "nav-right"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Projects">Projects</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/Donate">Donate</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
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
