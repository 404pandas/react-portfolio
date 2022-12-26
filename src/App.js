import * as React from "react";
import "./index.css";
import Landing from "./pages/Landing.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Donate from "./pages/Donate.js";
import Projects from "./pages/Projects.js";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
