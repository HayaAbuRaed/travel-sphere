import { useRoutes } from "react-router-dom";
import publicRoutes from "./PublicRoutes";
import { Suspense } from "react";
import Loader from "src/containers/Loader";
// import useGetRoutesByRole from "./hooks/useGetProtectedRoutes";
import protectedRoutes from "./ProtectedRoutes";

const AppRoutes = () => {
  // const protectedRoutes = useGetRoutesByRole();
  const routes = useRoutes([protectedRoutes, publicRoutes]);

  return <Suspense fallback={<Loader />}>{routes}</Suspense>;
};

export default AppRoutes;
