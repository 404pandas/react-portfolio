// external imports
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Link } from "react-router-dom";
// local imports
import "./style.css";

const Nav = () => {
  return (
    <>
      {" "}
      <div id='nav'>
        <Link to='/' id='home-nav'>
          <h1 id='home'>Home</h1>
        </Link>
        <div id='vr' className='subtitles'></div>
        <List id='subtitle'>
          <ListItem className='subtitles'>
            <Link to='/projects'>
              <h2>Projects</h2>
            </Link>
          </ListItem>
          <ListItem className='subtitles'>
            <Link to='/technologies'>
              <h2>Technologies</h2>
            </Link>
          </ListItem>
          <ListItem className='subtitles'>
            <Link to='/about'>
              {" "}
              <h2>About</h2>
            </Link>
          </ListItem>
        </List>
      </div>
    </>
  );
};

export default Nav;
