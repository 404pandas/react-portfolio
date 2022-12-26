Setup steps with my Portfolio

Step 1- Create app
`npx-create-react-app react-portfolio`
Where it goes-
CMD/Bash/Terminal/etc running the directory where I want the app to be made
What it does-
Creates React app boiler code with all the goodies

Step 2- Delete unneccessary files
Deleted files-

react-portfolio/src/App.css
react-portfolio/src/App.test.js
react-portfolio/src/logo.svg
react-portfolio/src/reportWebVitals.js
react-portfolio/src/setupTests.js

Step 3- Delete unnecessary code from src/App.js file
Deleted code-

Logo import
`import logo from './logo.svg';`

Css import
`import './App.css'`

Everything in the return statement on src/App.js except an unclassified div

Ending code on src/App.js file:

`function App() {
    return (
        <div>
        </div>
    )
}`

Step 4- Delete unncessary code from src/index.js file
Deleted code-
Everything associated with reportWebVitals

Ending code on src/index.js:

`
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
`

Step 5- Uninstall reportWebVitals for sanity check
`npm uninstall web-vitals`
Where it goes- CMD/Bash/Terminal/etc running the root directory of the app
What it does- uninstalls Web Vitals and removes it from dependencies

Did it work? Check package.json under "dependencies" to see if it has been added!

Step 6- Install react-router-dom package
`npm install react-router-dom`
Where it goes-
CMD/Bash/Terminal/etc running the root directory of the app
What it does-
Installs react-router-dom package. Package is used for client side routing by updating URL from a link click without making another request for another document. App can immediately redner some new UI and make data frequests with `fetch`

Did it work? Check package.json under "dependencies" to see if it has been added!

Step 7- Import React
`import React from "react";`
Where it goes- Top of src/App.js file and src/index.js
What it does- Imports react into app

Step 8- Import index.css
`import './index.css';`
Where it goes- Top of src/App.js file and src/index.js
What it does- Imports index.css into App.js for app styling

Step 9- Remove StrictMode from src/index.js
Deleted code-
`
<React.StrictMode>
</React.Strict.Mode>
`
Why deleted- Want to use browser router instead

Step 10- Import browser router
`import { BrowserRouter } from "react-router-dom";`
Where it goes- Top of src/index.js
What it does- Imports the BrowserRouter ability

Step 11- Add browser router
`
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
`
Where it goes- src/index.js wrapping the <App /> component
What it does- BrowserRouter stores the current location in the browser's address bar to use clean URLs and navigates using the browser's built-in history stack

Completed code for index.js:

`
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
`

Step 12- Install remaining dependencies
`npm install react-icons`
Where it goes-
CMD/Bash/Terminal/etc running the root directory of the app
What it does- Installs package for icons that will be used for project

Step - Add pages
`cd src`
Where it goes- CMD/Bash/Terminal/etc running the root directory of the app
What it does- Changes current working directory to src
`mkdir pages`
Where it goes- CMD/Bash/Terminal/etc running the root directory of the app
What it does- Makes a new directory in the src directory called "pages"
`cd pages`
Where it goes- CMD/Bash/Terminal/etc running the root directory of the app
What it does- Changes current working directory to pages
`touch About.js Contact.js Donate.js Landing.js Projects.js`
Where it goes- CMD/Bash/Terminal/etc running the root directory of the app
What it does- Creates multiple files in the src/pages directory with the given names

Step - Add functional components to each page
`rafce` + tab
Where it goes-
On each page in src/pages
What it does-
Creates a React Arrow Function Component with ES7 module system on each page

Step - Import pages to app
`
import Landing from "./pages/Landing.js"
import About from "./pages/About.js"
import Contact from "./pages/Contact.js"
import Donate from "./pages/Donate.js"
import Projects from "./pages/Projects.js"
`

Where it goes-
At the top of src/App.js
What it does-
Imports newly created pages into app

Step - Replace <div> tags in app.js with empty fragments
<>
</>
Where it goes- src/App.js
What it does- Groups a list of children without adding extra nodes to the DOM

Completed code:
`
function App() {
  return (
    <>
      Hello, World!
    </>
  );
}
`

Step - Import react-router-dom into app
`import react-router-dom`
Where it goes- At the top of src/App.js
What it does- Imports the react-router-dom module into the app
Routes is a function from react-router-dom

Step - Import pages to app

`
import Landing from "./pages/Landing.js"
import About from "./pages/About.js"
import Contact from "./pages/Contact.js"
import Donate from "./pages/Donate.js"
import Projects from "./pages/Projects.js"
`
Where it goes- Top of src/App.js
What it does- Imports each page into app

Step - Add Routes to app

Route is self closing (`<Route />`)

`
<Routes>
<Route path="/" element={<Landing />} />
<Route path="/About" element={<About />} />
<Route path="/Contact" element={<Contact />} />
<Route path="/Donate" element={<Donate />} />
<Route path="/Projects" element={<Projects />} />
</Routes>
`

Where it goes- src/app.js
What it does- Matches the path against the URL to determine if correct route is matched to the correct URL, link href, or form action. When the path pattern matches the current URL, the element is rendered

Step - Import Route and Routes
`import { Route, Routes } from react-router-dom`

Where it goes- Top of src/app.js
What it does- Route element is an element whose props are read to create a route by `<Routes>`