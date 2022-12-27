import "./NavbarStyles.css";
import React from "react";
import { Link } from "react-router-dom";
import { RxDropdownMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="nav">
      <a href="https://github.com/404pandas">
        <h1>Mary Elenius</h1>
      </a>
      <ul className="nav-right">
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
		<div className="hamburger">
			<RxDropdownMenu size={30} style={{ color: "#D97777" }} />
		</div>
    </div>
  );
};

export default Navbar;
