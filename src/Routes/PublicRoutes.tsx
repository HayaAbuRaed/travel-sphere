import { RouteObject } from "react-router-dom";

const publicRoutes: RouteObject = {
  path: "",
  children: [
    {
      path: "",
      element: <h1>Landing Page</h1>,
    },
    {
      path: "/login",
      element: <h1>Login Page</h1>,
    },
    {
      path: "*",
      element: <h1>404 Page</h1>,
    },
  ],
};

export default publicRoutes;
