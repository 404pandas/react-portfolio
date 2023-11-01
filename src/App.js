import * as React from "react";

// local imports
import "./style.css";
import Landing from "./pages/Landing.js";
import About from "./pages/About.js";
import Technologies from "./pages/Technologies";
import Projects from "./pages/Projects.js";
import D20 from "./pages/D20";
import TechInterview from "./pages/TechInterview";

// external imports
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/about' element={<About />} />
        <Route path='/technologies' element={<Technologies />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/d20' element={<D20 />} />
        <Route path='/interview-practice' element={<TechInterview />} />
      </Routes>
    </>
  );
}

export default App;
