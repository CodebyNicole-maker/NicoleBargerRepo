// import ReactDOM from "react-dom/client";
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import "./index.css";
// import "bootstrap/dist/css/bootstrap.css";
// import App from "./App.jsx";
// import Nav from "./components/Nav.jsx";
// import Error from "./Pages/Error.jsx";
// import About from "./Pages/About.jsx";
// import Contact from "./Pages/Contact.jsx";
// import Resume from "./Pages/Resume.jsx";
// import Portfolio from "./Pages/Portfolio.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <Error />,
//     children: [
//       {
//         index: true,
//         element: <About />,
//       },
//       {
//         path: "/Portfolio",
//         element: <Portfolio />,
//       },
//       {
//         path: "/Contact",
//         element: <Contact />,
//       },
//       {
//         path: "/Resume",
//         element: <Resume />,
//       },
//     ],
//   },
// ]);

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App.jsx";
import ErrorPage from "./Pages/Error.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Resume from "./Pages/Resume.jsx";
import Portfolio from "./Pages/Portfolio.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: "Portfolio",
        element: <Portfolio />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
      {
        path: "Resume",
        element: <Resume />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
