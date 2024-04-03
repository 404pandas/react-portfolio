// external imports
import * as React from "react";
import { Outlet } from "react-router-dom";

// local imports
import "./assets/css/style.css";

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
