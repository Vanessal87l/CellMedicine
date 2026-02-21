import { createBrowserRouter, Navigate } from "react-router-dom";
import Navbar from "./Layout/Navbar/Navbar";

import Home from "./pages/Home/Home";
import Texnologiy from "./pages/Texnologiy/Texnologiy";

import KletocniyeTexnologiy from "@/pages/Texnologiy/pages/KletocniyeTexnologiy";
// import RegenerativnayaTerapiya from "./pages/Texnologiy/RegenerativnayaTerapiya";
// import Biomateriali from "./pages/Texnologiy/Biomateriali";
// import PersonalizirovannayaMeditsina from "./pages/Texnologiy/PersonalizirovannayaMeditsina";
// import Infografika from "./pages/Texnologiy/Infografika";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />, // Navbar тут
    children: [
      { index: true, element: <Home /> },

      {
        path: "texnologiy",
        element: <Texnologiy />,
        children: [
          { index: true, element: <KletocniyeTexnologiy /> },
          { path: "kletocniyeTexnologiy", element: <KletocniyeTexnologiy /> },
          // { path: "regenerativnayaTerapiya", element: <RegenerativnayaTerapiya /> },
          // { path: "biomateriyali", element: <Biomateriali /> },
          // { path: "personalizirovannayaMeditsina", element: <PersonalizirovannayaMeditsina /> },
          // { path: "infografikaSxemiyAnimatsiy", element: <Infografika /> },
        ],
      },
    ],
  },
  {
    path: "/home",
    element: <Navigate to="/" replace />,
  },
]);

export default router;
