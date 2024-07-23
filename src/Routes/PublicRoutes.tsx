import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import Unauthorized from "src/pages/Unauthorized";

const Login = lazy(() => import("src/pages/Login"));

const publicRoutes: RouteObject = {
  path: "",
  children: [
    {
      path: "",
      index: true,
      element: <h1>Landing Page</h1>,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "unauthenticated",
      element: <Unauthorized />,
    },
    {
      path: "*",
      element: <h1>404 Page</h1>,
    },
  ],
};

export default publicRoutes;