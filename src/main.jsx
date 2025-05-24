import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Mission from "./Components/Mission/Mission.jsx";
import ChurchDirectory from "./Components/ChurchDirectory/ChurchDirectory.jsx";
import Newsletter from "./Components/Newsletter/Newsletter.jsx";
import Devo from "./pages/Devo.jsx";
import Events from "./Components/Events/Events.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import England from "./Components/ChurchDirectory/England.jsx";
import Scotland from "./Components/ChurchDirectory/Scotland.jsx";
import Wales from "./Components/ChurchDirectory/Wales.jsx";
import IsleofMan from "./Components/ChurchDirectory/IsleofMan.jsx";
import Ireland from "./Components/ChurchDirectory/Ireland.jsx";
import RegisterChurch from "./Components/RegisterChurch/RegisterChurch.jsx";
import NorthernIreland from "./Components/ChurchDirectory/Northern Ireland.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "churchdirectory",
        element: <ChurchDirectory />,
      },

      {
        path: "newsletter",
        element: <Newsletter />,
      },
      {
        path: "devo",
        element: <Devo />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "mission",
        element: <Mission />,
      },
      {
        path: "contact",
        element: <Contact />,
      },

      {
        path: "england",
        element: <England />,
      },
      {
        path: "scotland",
        element: <Scotland />,
      },
      {
        path: "wales",
        element: <Wales />,
      },
      {
        path: "isle_of_man",
        element: <IsleofMan />,
      },
      {
        path: "Ireland",
        element: <Ireland />,
      },
      {
        path: "northern_ireland",
        element: <NorthernIreland />,
      },
      {
        path: "registerChurch",
        element: <RegisterChurch />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
