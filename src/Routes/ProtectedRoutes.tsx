import { RouteObject } from "react-router-dom";
import Layout from "../containers/Layout";
import Home from "src/pages/Home";

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
