import { RouteObject } from "react-router-dom";

const protectedRoutes: RouteObject = {
  path: "/me",
  children: [
    {
      path: "",
      index: true,
      element: <h1>Home</h1>,
    },
  ],
};

export default protectedRoutes;
