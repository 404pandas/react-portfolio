import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// local imports
import App from "./App.jsx";
import About from "./pages/About";
import D20 from "./pages/D20";
import Landing from "./pages/Landing";
import Projects from "./pages/Projects";
import Technologies from "./pages/Technologies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Landing /> },
      { path: "/about", element: <About /> },
      { path: "/projects", element: <Projects /> },
      { path: "/technologies", element: <Technologies /> },
      { path: "/d20", element: <D20 /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
