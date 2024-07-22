import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const Layout = lazy(() => import("src/containers/Layout"));
const Home = lazy(() => import("src/pages/Home"));

const protectedRoutes: RouteObject = {
  path: "/me",
  element: <Layout />,
  children: [
    {
      path: "",
      index: true,
      element: <Home />,
    },
  ],
};

export default protectedRoutes;
