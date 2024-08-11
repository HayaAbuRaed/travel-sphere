import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const Login = lazy(() => import("src/pages/Login"));
const NotFound = lazy(() => import("src/pages/NotFound"));
const Unauthenticated = lazy(() => import("src/pages/Unauthenticated"));
const Landing = lazy(() => import("src/pages/Landing"));

const publicRoutes: RouteObject = {
  path: "",
  children: [
    {
      path: "",
      index: true,
      element: <Landing />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "unauthenticated",
      element: <Unauthenticated />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
};

export default publicRoutes;
