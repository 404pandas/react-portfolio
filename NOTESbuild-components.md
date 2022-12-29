# Component ### steps with my Portfolio

# Table of Contents

1. [Components](#Components)
2. [Navbar](#Navbar)
3. [Hero Image](#Hero-Image)

## Components

<details>
	<summary>Step 1</summary>

```
cd src
```

**Where it goes**

_CMD/Bash/Terminal/etc running the root directory of the app_

**What it does**

_Changes current working directory to src__

</details>


<details>
	<summary>Step 2</summary>

```
mkdir components
```

**Where it goes**

_CMD/Bash/Terminal/etc running the src directory of the app_

**What it does**

_Makes a new directory in the src directory called "components"__

</details>


<details>
	<summary>Step 3</summary>

```
cd components
```

**Where it goes**

_CMD/Bash/Terminal/etc running the src directory of the app_

**What it does**

_Changes current working directory to components__

</details>


## Navbar

<details>
	<summary>Step 1</summary>

Make directory

`mkdir Navbar`

**Where it goes**

_CMD/Bash/Terminal/etc running the components directory of the app_

**What it does**

_Makes a new directory in the components directory called "Navbar"_

</details>

<details>
	<summary>Step 2</summary>

Change directory

`cd Navbar`

**Where it goes**

_CMD/Bash/Terminal/etc running the components directory of the app_

**What it does**

_Changes current working directory to Navbar_

</details>

<details>
	<summary>Step 3</summary>

Create files

`touch Navbar.js NavbarStyles.css`

**Where it goes**

_CMD/Bash/Terminal/etc running the components directory of the app_

**What it does**

_Creates multiple files in the src/components/Navbar directory with the given names_

</details>

<details>
	<summary>Step 4</summary>

Import CSS


`import "./NavbarStyles.css"`

**Where it goes**

_Top of src/components/Navbar.js_

**What it does**

_Imports the Navbar css styles from the file NavbarStyles.css_

</details>

<details>
	<summary>Step 5</summary>

Add functional component

`rafce` + tab

**Where it goes**
O_n src/components/Navbar/Navbar.js_

**What it does**
Creates a React Arrow Function Component with ES7 _module system_

</details>

<details>
	<summary>Step 6</summary>

Add Class Name

```
const Navbar = () => {
	return (
		<div className="nav">
		Navbar
		</div>
	)
}
```

**Where it goes**

_On the div in the functional component in src/components/Navbar/Navbar.js_

**What it does**

</details>

<details>
	<summary>Step 7</summary>

Import link

`import { Link } from "react-router-dom"`


**Where it goes**

_Top of page in src/component/Navbar/Navbar.js_

**What it does**

_Imports an element that lets user navigate to another page by clicking or tapping on it._

</details>

<details>
	<summary>Step 8</summary>

Add an `<a href>` for Name

```
const Navbar = () => {
	return (
	  <div className="nav">
		<a href="https://github.com/404pandas">
		  <h1>Mary Elenius</h1>
		</a>
	  </div>
	);
};
```

**Where it goes**

_In the div with the class name "nav", replacing the placeholder "Navbar"_

**What it does**

_Renders an accessible `<a>` element with a real `href` that points to the resource it's linked to
The link will be an `<h1>` element with Mary Elenius in it that redirects people to my github_

</details>


<details>
	<summary>Step 9</summary>

Add unordered list for Icons

```
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
```

**Where it goes**

_Below the `<a>` tag on Navbar.js, before the closing div_

**What it does**

_Renders an accessible `<a>` element with a real `href` that points to the resource it's linked to
The links will be `<h1>` elements with page names that redirect people to
the different "pages" on my portfolio_

</details>


<details>
	<summary>Step 10</summary>

Call component in pages

```
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
```

**Where it goes**

_On src/pages/Landing.js, /About.js, Contact.js, Donate.js, and Projects.js
Replaced the placeholder words "Landing", "About", "Contact", "Donate", and Projects_

**What it does**

_Imports Navbar component onto the listed pages_

**Note**

_I only have to type `<Navbar />` between the divs on these pages and my IDE auto imports it up top. If it isn't auto importing and you're following these notes,
please remember to add_

```
import Navbar from '../components/Navbar/Navbar'
```

_at the top of the page._

</details>

<details>
	<summary>Step 11</summary>

Add Class Name

```
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
```

**Where it goes**

_On the `<a>` tag and `<ul>` tag on src/components/Navbar/Navbar.js_

**What it does**

_Adds the class names "nav-left" and "nav-right" to the Navbar to use for css styling_

</details>

<details>
	<summary>Step 12</summary>

Import hamburger icons

```
import { RxDropdownMenu } from "react-icons/rx";
import { IoMdArrowDropup } from "react-icons/io";
```

**Where it goes**

_Top of src/components/Navbar/Navbar.js_

**What it does**

_Imports hamburger icons from react-icons/rx and react-icons/io_

</details>

<details>
	<summary>Step 13</summary>

Add hamburger icons

```
<div>
	<RxDropdownMenu size={30} style={{ color: "#D97777" }} />
	<IoMdArrowDropup size={30} style={{ color: "#D97777" }} />
</div>
```

**Where it goes**

_After the unordered list inside the "nav" div in src/components/Navbar/Navbar.js_

**What it does**

_Adds the RxDropdownMenu icon to the navbar with in-line styling that sets its size to 30 and color to the salmon variable_

</details>

<details>
	<summary>Step 14</summary>

Add Class Name

```
<div className="hamburger">
	<IoMdArrowDropup size={30} style={{ color: "#D97777" }} />
	<RxDropdownMenu size={30} style={{ color: "#D97777" }} />
</div>
```

**Where it goes**

_In the div that holds the hamburger icon in src/components/Navbar/Navbar.js_

**What it does**

_Adds the class name "hamburger" to the icon for css styling_

</details>

<details>
	<summary>Step 15</summary>

Add click event state logic to icons

```
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
```

**Where it goes**

_Before the return statement in the Navbar functional component_

**What it does**
Utilizes useState and setClick hooks for click _event and handleClick arrow function_

</details>

<details>
	<summary>Step 16</summary>

Add click event if/else logic to icons

```
<div className="hamburger">
	{click ? (
		<IoMdArrowDropup size={30} style={{ color: "#D97777" }} />
	) : (
		<RxDropdownMenu size={30} style={{ color: "#D97777" }} />
	)}
</div>
```

**Where it goes**

_In the <div> containing the hamburger class name_

**What it does**

_Logic that says if the div is clicked, render the first icon. Else, render the second icon._

</details>

<details>
	<summary>Step 17</summary>

Add event handler to icons

```
<div className="hamburger" onClick={handleClick}>
```

**Where it goes**

_In the <div> tag containing the hamburger class name_

**What it does**

_Calls the arrow function handleClick when the hamburger icon is clicked_

</details>

<details>
	<summary>Step 18</summary>

Add click event if/else logic to menu

```
<ul className={click ? "nav-right active" : "nav-right"}>
	...
</ul>
```

**Where it goes**

_In the <ul> tag containing the list items menu_

**What it does**

_Logic that says if nav-right is active, render the list items. Else, return to regular men_u
</details>


## Hero Image

_(Yennefer Drawing)_

</details>

<details>
	<summary>Step 1</summary>

Make directory

```
mkdir HeroImg
```

**Where it goes**

_CMD/Bash/Terminal/etc running the components directory of the app_

**What it does**

_Makes a new directory in the components directory called "HeroImg"_

</details>

<details>
	<summary>Step 2</summary>

Change directory

```
cd HeroImg
```

**Where it goes**

_CMD/Bash/Terminal/etc running the components directory of the app_

**What it does**

_Changes current working directory to HeroImg_

</details>

<details>
	<summary>Step 3</summary>

Create files

```

touch HeroImg.js HeroImgStyles.css

```

**Where it goes**

_CMD/Bash/Terminal/etc running the components directory of the app_

**What it does**

_Creates multiple files in the src/components/HeroImg directory with the given names_

</details>

<details>
	<summary>Step 4</summary>

Import CSS

```

import "./HeroImgStyles.css"

```

**Where it goes**

_Top of src/components/HeroImg.js_

**What it does**

_Imports the HeroImg css styles from the file HeroImgStyles.css_

</details>

<details>
	<summary>Step 5</summary>

Add functional component

```
`rafce` + tab
```

**Where it goes**

_On src/components/HeroImg/HeroImg.js_

**What it does**

_Creates a React Arrow Function Component with ES7 module system_

</details>

<details>
	<summary>Step 6</summary>

Add Class Name

```
const HeroImg = () => {
	return (
		<div className="mask">
		HeroImg
		</div>
	);
};
```

**Where it goes**

_On the div in the functional component in src/components/HeroImg/HeroImg.js_

**What it does**

_Adds the class name "mask" to the Hero image div to use for css styling_

</details>

<details>
	<summary>Step 6</summary>

Import image

```
import YenImg from "../../assets/images/yenDrawing.jpg";
```

**Where it goes**

_Top of page in src/component/HeroImg/HeroImg.js_

**What it does**

_Imports path location of image_

</details>
<details>
	<summary>Step 7</summary>

Add image

```
const HeroImg = () => {
	return (
		<div className="mask">
        	<img className="heroImg" src={YenImg} alt="Drawing of my daughter" />
		</div>
	);
};
```

**Where it goes**

_Replaces HeroImg placeholder on src/components/HeroImg/HeroImg.js_

**What it does**
_Specifies internal source path for image as the src/assets/images directory and adds heroImg class to the image to use for css styling. Gives alt attribute for accessibility_

</details>

<details>
	<summary>Step 8</summary>

Add div for content on top of image

```
const HeroImg = () => {
	return (
		<div className="mask">
        	<img className="heroImg" src={YenImg} alt="Drawing of my daughter" />
		</div>
		<div className="imgContent">
		</div>
	);
};
```

**Where it goes**

_Below the `<div>` containing the image_

**What it does**

_Adds a div to hold the content that will go on top of the hero image. Adds imgContent class to the image to use for css styling._

</details>

<details>
	<summary>Step 9</summary>

Add words

```
const HeroImg = () => {
	return (
		<div className="mask">
        	<img className="heroImg" src={YenImg} alt="Drawing of my daughter" />
		</div>
		<div className="imgContent">
			<div className="heroImgH1">
		    	<h1>DEVELOPER.&nbsp;</h1>
          		<h1>VET TECH.&nbsp;</h1>
          		<h1>MOM.&nbsp;</h1>
			</div>
		</div>
	);
};
```

**Where it goes**

_In the imgContent `<div>` tag on HeroImg.js_

**What it does**

_Renders `<h1>` elements with the given strings_

**Note**
 _&nbsp; is an HTML entity used to represent the reserved and invisible ' ' space character in HTML. This will add a space after each word in the `<h1>` tags

</details>

<details>
	<summary>Step 10</summary>

Import link

```
import { Link } from "react-router-dom"
```


**Where it goes**

_Top of page in src/components/HeroImg/HeroImg.js_

**What it does**

_Imports an element that lets user navigate to another page by clicking or tapping on it._

</details>

<details>
	<summary>Step 11</summary>

Add buttons

```
const HeroImg = () => {
	return (
		<div className="mask">
        	<img className="heroImg" src={YenImg} alt="Drawing of my daughter" />
		</div>
		<div className="imgContent">
			<div className="heroImgH1">
		    	<h1>DEVELOPER.&nbsp;</h1>
          		<h1>VET TECH.&nbsp;</h1>
          		<h1>MOM.&nbsp;</h1>
			</div>
			<Link to="/projects" className="btn">
          		Projects
        	</Link>
        	<Link to="/contact" className="btn btn-contact">
          		Contact
        	</Link>
		</div>
	);
};

export default Landing
```

**Where it goes**

_In the imgContent `<div>` after the heroImgH1 `<div>`_

**What it does**

_Renders an accessible `<a>` element with a real `href` that points to the resource it's linked to.
The links will be `<btn>` elements with the strings "Projects" and "Contact" that redirect people to
the associated "Pages" on my portfolio_

</details>

<details>
	<summary>Step 12</summary>


Wrap component in div and add className

```
const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="heroImg" src={YenImg} alt="Drawing of my daughter" />
      </div>
      <div className="imgContent">
        <div className="heroImgH1">
          <h1>DEVELOPER.&nbsp;</h1>
          <h1>VET TECH.&nbsp;</h1>
          <h1>MOM.&nbsp;</h1>
        </div>
        <Link to="/projects" className="btn">
          Projects
        </Link>
        <Link to="/contact" className="btn btn-contact">
          Contact
        </Link>
      </div>
    </div>
  );
};
```

**Where it goes**

_Around the entire functional component_

**What it does**

_Adds a div to hold the entire component. Adds "hero" class to the image to use for css styling._

</details>

<details>
	<summary>Step 13</summary>

Call component in landing page

```
import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import HeroImg from '../components/HeroImg/HeroImg'

const Landing = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <h1>Landing Page Placeholder</h1>
    </div>
  )
}

export default Landing
```

**Where it goes**

_On src/pages/Landing.js_

**What it does**

_Imports HeroImg component onto the landing page_

**Note**

_I only have to type `<HeroImg />` after `<Navbar />` and my IDE auto imports it up top. If it isn't auto importing and you're following these notes,
please remember to add:

```
import Navbar from '../components/Navbar/Navbar'
```

at the top of the page._

</details>