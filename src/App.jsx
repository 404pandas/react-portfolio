// external imports
import * as React from "react";
import { Outlet } from "react-router-dom";

// local imports

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./assets/css/style.css";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />

      <Footer />
    </>
  );
}

export default App;
