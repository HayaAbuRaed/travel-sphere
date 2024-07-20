import { RouteObject } from "react-router-dom";
import Layout from "../containers/Layout";

const protectedRoutes: RouteObject = {
  path: "/me",
  element: <Layout />,
  children: [
    {
      path: "",
      index: true,
      element: <h1>Home</h1>,
    },
  ],
};

export default protectedRoutes;
