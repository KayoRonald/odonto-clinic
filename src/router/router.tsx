import { createBrowserRouter } from "react-router-dom";
import { Error404 } from "../pages/404";
import { Home } from "../pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

export { router }