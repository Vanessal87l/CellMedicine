import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";

const route = createBrowserRouter([
  {
    element: <Home />,
    path: "/",
  },
]);

export default route;
