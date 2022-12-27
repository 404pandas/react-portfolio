Component steps with my Portfolio

Components

`cd src`
Where it goes- CMD/Bash/Terminal/etc running the root directory of the app
What it does- Changes current working directory to src
`mkdir components`
Where it goes- CMD/Bash/Terminal/etc running the src directory of the app
What it does- Makes a new directory in the src directory called "components"
`cd components`
Where it goes- CMD/Bash/Terminal/etc running the src directory of the app
What it does- Changes current working directory to components

Navbar

Step 1- Make directory
`mkdir Navbar`
Where it goes- CMD/Bash/Terminal/etc running the components directory of the app
What it does- Makes a new directory in the components directory called "Navbar"

Step 2- Change directory
`cd Navbar`
Where it goes- CMD/Bash/Terminal/etc running the components directory of the app
What it does- Changes current working directory to Navbar

Step 3- Create files
`touch Navbar.js NavbarStyles.css`
Where it goes- CMD/Bash/Terminal/etc running the components directory of the app
What it does- Creates multiple files in the src/components/Navbar directory with the given names

Step 4- Import CSS

`
import "./NavbarStyles.css"
`
Where it goes- Top of src/components/Navbar.js
What it does- Imports the Navbar css styles from the file NavbarStyles.css

Step 5- Add functional component
`rafce` + tab
Where it goes-
On src/components/Navbar/Navbar.js
What it does-
Creates a React Arrow Function Component with ES7 module system

Step 6- Add classname

`
const Navbar = () => {
	return (
		<div className="nav">
		Navbar
		</div>
	)
}
`

Where it goes- On the div in the functional component in src/components/Navbar/Navbar.js
What it does- 

Step 6- Add className

`
const Navbar = () => {
	return (
		<div className="nav">
		Navbar
		</div>
	)
}
`

Where it goes- On the div in the functional component in src/components/Navbar/Navbar.js
What it does- Adds the className "Nav" to the entire Navbar to use for css styling

Step 7- Import link

`import { Link } from "react-router-dom"`

Where it goes- Top of page in src/component/Navbar/Navbar.js
What it does- Imports an element that lets user navigtae to another page by clicking or tapping on it.

Step 8- Add an `<a href>` for Name

`
const Navbar = () => {
	return (
	  <div className="nav">
		<a href="https://github.com/404pandas">
		  <h1>Mary Elenius</h1>
		</a>
	  </div>
	);
  };
`
Where it goes- In the div with the className "nav", replacing the placeholder "Navbar"
What it does- Renders an accessible `<a>` element with a real `href` that points to the resource it's linked to
The link will be an <h1> element with Mary Elenius in it that redirects people to my github

Step 9- Add unordered list for Icons

`
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
`
Where it goes- Below the <a> tag on Navbar.js, before the closing div
What it does- Renders an accessible `<a>` element with a real `href` that points to the resource it's linked to
The links will be <h1> elements with page names that redirect people to
the different "pages" on my portfolio

Step 9- Call component in pages

`
import React from 'react'
import Navbar from '../components/Navbar/Navbar'

const Landing = () => {
  return (
    <div>
      <Navbar/>
    </div>
  )
}

export default Landing
`

Where it goes- On src/pages/Landing.js, /About.js, Contact.js, Donate.js, and Projects.js
Replaced the placeholder words "Landing", "About", "Contact", "Donate", and Projects
What it does- Imports Navbar component onto the listed pages
note- I only have to type <Navbar/> between the divs on these pages and
my IDE auto imports it up top. If it isn't auto importing and you're following these notes,
please remember to add the `import Navbar from '../components/Navbar/Navbar' at the top of the page.

Step 10- Add ClassName

`
const Navbar = () => {
	return (
	  <div className="nav">
		<a href="https://github.com/404pandas" className="nav-left">
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
	  </div>
	);
};
`
  
Where it goes- On the <a> tag and <ul> tag on src/components/Navbar/Navbar.js
What it does- Adds the class names "nav-left" and "nav-right" to the Navbar to use for css styling

Step 11- Import hamburger icon

`
import { RxDropdownMenu } from "react-icons/rx";
`

Where it goes- Top of src/components/Navbar/Navbar.js
What it does- Imports to RxDropdownMenu icon from react-icons/rx

Step 12- Add hamburger icon

`
<div>
	<RxDropdownMenu size={30} style={{ color: "#D97777" }} />
</div>
`

Where it goes- After the unordered list inside the "nav" div in src/components/Navbar/Navbar.js
What it does- Adds the RxDropdownMenu icon to the navbar with in-line
styling that sets its size to 30 and color to the salmon variable

Step 13- Add className

`
<div className="hamburger">
	<RxDropdownMenu size={30} style={{ color: "#D97777" }} />
</div>
`

Where it goes- In the div that holds the hamburger icon in src/components/Navbar/Navbar.js
What it does- Adds the class name "hamburger" to the icon for css styling
