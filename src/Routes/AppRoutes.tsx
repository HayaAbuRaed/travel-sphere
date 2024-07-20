import { useRoutes } from "react-router-dom";
import protectedRoutes from "./ProtectedRoutes";
import publicRoutes from "./PublicRoutes";
import { Suspense } from "react";

const AppRoutes = () => {
  const routes = useRoutes([protectedRoutes, publicRoutes]);
  return <Suspense fallback={<div>Loading...</div>}>{routes}</Suspense>;
};

export default AppRoutes;
