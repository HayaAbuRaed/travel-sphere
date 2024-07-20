import { useRoutes } from "react-router-dom";
import protectedRoutes from "./ProtectedRoutes";
import publicRoutes from "./PublicRoutes";
import { Suspense } from "react";
import Loader from "src/containers/Loader";

const AppRoutes = () => {
  const routes = useRoutes([protectedRoutes, publicRoutes]);
  return <Suspense fallback={<Loader />}>{routes}</Suspense>;
};

export default AppRoutes;
