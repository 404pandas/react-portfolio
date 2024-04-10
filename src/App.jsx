// external imports
import * as React from "react";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

// local imports
import "./assets/css/normalize.css";
import "./assets/css/style.css";

function App() {
  const currentPage = useLocation().pathname;

  useEffect(() => {
    document.body.className = ""; // Clear any existing classes
    document.body.classList.add(currentPage.replace("/", "")); // Add class specific to the About page (remove leading '/')
    // You can add more classes as needed
  }, [currentPage]); // Run useEffect whenever currentPage changes
  console.log("app-" + currentPage);

  return (
    <>
      <Outlet currentPage={currentPage} />
    </>
  );
}

export default App;
