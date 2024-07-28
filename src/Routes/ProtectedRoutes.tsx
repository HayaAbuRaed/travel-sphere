import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import AuthenticationRoute from "./AuthenticationRoute";
import Hotel from "src/pages/Hotel";

const Layout = lazy(() => import("src/containers/Layout"));
const Home = lazy(() => import("src/pages/Home"));

const protectedRoutes: RouteObject = {
  path: "/me",
  element: <Layout />,
  children: [
    {
      element: <AuthenticationRoute />,
      children: [
        {
          path: "",
          index: true,
          element: <Home />,
        },
        {
          path: "hotels/:id",
          element: <Hotel />,
        },
      ],
    },
  ],
};

export default protectedRoutes;
