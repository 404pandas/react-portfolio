// external imports
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./features/store.js";

// local imports
import App from "./App.jsx";
import gsap from "gsap";

// Respect "reduce motion": GSAP's entrance/page animations complete almost
// instantly instead of flying things around. Components that loop forever
// (map icons, the welcome sign) also check this and skip their loops.
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const applyMotionPref = () =>
  gsap.globalTimeline.timeScale(reduceMotion.matches ? 50 : 1);
applyMotionPref();
reduceMotion.addEventListener?.("change", applyMotionPref);
import Landing from "./pages/Landing";
import Projects from "./pages/Projects";
import Technologies from "./pages/Technologies";
import About from "./pages/About";
import Error from "./pages/Error";
import Contact from "./pages/Contact";
import PhoneScreen from "./pages/PhoneScreen";
import WhoIs from "./pages/WhoIs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import FeedSiouxFalls from "./pages/FeedSiouxFalls";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Landing /> },
      { path: "projects", element: <Projects /> },
      { path: "technologies", element: <Technologies /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "phone", element: <PhoneScreen /> },
      { path: "whois", element: <WhoIs /> },
      { path: "privacy-policy", element: <PrivacyPolicy /> },
      { path: "feed-sioux-falls", element: <FeedSiouxFalls /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
