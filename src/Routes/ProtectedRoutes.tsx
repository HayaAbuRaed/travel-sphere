import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import AuthenticationRoute from "./AuthenticationRoute";

const Layout = lazy(() => import("src/containers/Layout"));
const Home = lazy(() => import("src/pages/Home"));
const Hotel = lazy(() => import("src/pages/Hotel"));
const SearchResults = lazy(() => import("src/pages/SearchResults"));
const Cart = lazy(() => import("src/pages/Cart"));

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
        {
          path: "search",
          element: <SearchResults />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
      ],
    },
  ],
};

export default protectedRoutes;
