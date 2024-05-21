import { createBrowserRouter } from "react-router-dom";
import { Error404 } from "../pages/404";
import { Home } from "../pages/home";
import Specialists from "../pages/specialists";
import Services from "../pages/services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    index: true,
  },
  {
    path: "/specialists",
    element: <Specialists />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

export { router };
