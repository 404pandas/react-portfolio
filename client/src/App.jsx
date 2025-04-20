// external imports
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// local imports
import "./assets/css/normalize.css";
import "./assets/css/style.css";
import "./assets/css/z-index.css";
import Page from "./pages/Page";

function App() {
  const currentPage = useLocation().pathname;

  useEffect(() => {
    document.body.className = ""; // Clear any existing classes
    const className = currentPage.replace("/", ""); // Remove leading '/'
    if (className) {
      document.body.classList.add(className); // Add class specific to the current page if it's not empty
    }
  }, [currentPage]); // Run useEffect whenever currentPage changes

  console.log("app-" + currentPage);

  return (
    <main>
      <Page currentPage={currentPage} />
    </main>
  );
}

export default App;
