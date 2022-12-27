import "./NavbarStyles.css";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header">
      <a href="https://github.com/404pandas">
        <h1>Mary Elenius</h1>
      </a>
      <ul>
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
    </div>
  );
};

export default Navbar;
