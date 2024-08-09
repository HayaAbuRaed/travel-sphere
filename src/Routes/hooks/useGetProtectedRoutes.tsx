import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import Layout from "src/containers/Layout";
import { selectIsUserAdmin } from "src/features/user";
import { useAppSelector } from "src/store/hooks";
import AuthenticationRoute from "../AuthenticationRoute";

const Home = lazy(() => import("src/pages/Home"));
const Hotel = lazy(() => import("src/pages/Hotel"));
const SearchResults = lazy(() => import("src/pages/SearchResults"));
const Cart = lazy(() => import("src/pages/Cart"));
const Checkout = lazy(() => import("src/pages/Checkout"));
const CitiesManagement = lazy(() => import("src/pages/CitiesManagement"));

const adminRouts: RouteObject[] = [
  {
    path: "",
    index: true,
    // element: <h1>home</h1>,
  },
  {
    path: "cities",
    element: <CitiesManagement />,
  },
];

const userRoutes: RouteObject[] = [
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
    children: [
      {
        path: "",
        element: <Cart />,
      },
      {
        path: "checkout/:roomId",
        element: <Checkout />,
      },
    ],
  },
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
    children: [
      {
        path: "",
        element: <Cart />,
      },
      {
        path: "checkout/:roomId",
        element: <Checkout />,
      },
    ],
  },
];

const useGetRoutesByRole = (): RouteObject => {
  const isAdmin = useAppSelector(selectIsUserAdmin);

  console.log("isAdmin", isAdmin);

  const protectedRoutes: RouteObject = {
    path: "/me",
    element: <Layout />,
    children: [
      {
        element: <AuthenticationRoute />,
        children: isAdmin ? adminRouts : userRoutes,
      },
    ],
  };

  return protectedRoutes;
};

export default useGetRoutesByRole;
