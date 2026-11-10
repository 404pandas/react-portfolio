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
    // "/" -> "", "/privacy-policy" -> "privacy-policy", "/a/b" -> "a-b"
    // (a raw slash in the string would throw from classList.add).
    const className = currentPage.split("/").filter(Boolean).join("-");
    if (className) {
      document.body.classList.add(className);
    }
  }, [currentPage]); // Run useEffect whenever currentPage changes

  return (
    <main>
      <Page currentPage={currentPage} />
    </main>
  );
}

export default App;
