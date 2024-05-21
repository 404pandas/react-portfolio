import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// local imports
import App from "./App.jsx";

import Landing from "./pages/Landing";
import Projects from "./pages/Projects";
import Technologies from "./pages/Technologies";
import About from "./pages/About";
import Error from "./pages/Error";

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
