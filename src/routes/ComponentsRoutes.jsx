import { lazy } from "react";
import Loadable from "../components/loadable";

const HomePage = Loadable(lazy(() => import("../components/home-page/index")));

const ComponentsRoutes = {
  path: "/",
  children: [
    {
      path: "/",
      element: <HomePage />,
    }
  ],
};
export default ComponentsRoutes;
