// local imports
import "./style.css";
// external imports
import { Link, useLocation } from "react-router-dom";

import { FaDiceD20 } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const isOnAboutPage = location.pathname === "/d20"; // Check if the user is on the About page
  const isOnProjectsPage = location.pathname === "/Projects"; // Check if the user is on the Projects page
  const isOnTechnologiesPage = location.pathname === "/Technologies"; // Check if the user is on the Technologies page
  const isOnHomePage = location.pathname === "/"; // Check if the user is on the Home page

  return (
    <div className='nav'>
      <ul className='flexbox-turn-on' id='nav-content'>
        <div id='left-nav'>
          <li className='nav-items'>
            {isOnHomePage && <FaDiceD20 className='die' />}{" "}
            {/* Conditionally render the icon */}
            <Link to='/' id='name'>
              Mary Elenius
            </Link>
          </li>
        </div>
        <div id='right-nav'>
          <li className='nav-items'>
            {isOnProjectsPage && <FaDiceD20 className='die' />}{" "}
            {/* Conditionally render the icon */}
            <Link to='/Projects'>Projects</Link>
          </li>
          <li className='nav-items'>
            {isOnAboutPage && <FaDiceD20 className='die' />}{" "}
            {/* Conditionally render the icon */}
            <Link to='/d20'>About</Link>
          </li>
          <li className='nav-items'>
            {isOnTechnologiesPage && <FaDiceD20 className='die' />}{" "}
            {/* Conditionally render the icon */}
            <Link to='/Technologies'>Technologies</Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
