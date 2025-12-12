// external imports
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./features/store.js";

// local imports
import App from "./App.jsx";
import Landing from "./pages/Landing";
import Projects from "./pages/Projects";
import Technologies from "./pages/Technologies";
import About from "./pages/About";
import Error from "./pages/Error";
import Contact from "./pages/Contact";
import PhoneScreen from "./pages/PhoneScreen";

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
