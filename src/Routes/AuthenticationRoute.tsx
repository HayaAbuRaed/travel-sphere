import { Navigate, Outlet, useLocation } from "react-router-dom";
import Loader from "src/containers/Loader";
import selectUser from "src/features/user/selectors";
import useVerifyAccessToken from "src/hooks/useVerifyAccessToken";
import { useAppSelector } from "src/store/hooks";

const AuthenticationRoute = () => {
  const location = useLocation();

  const { isAuthenticating } = useVerifyAccessToken();

  const { isAuthenticated } = useAppSelector(selectUser);

  if (isAuthenticating) return <Loader />;

  if (!isAuthenticated)
    return (
      <Navigate
        to="/unauthenticated"
        replace
        state={{ from: location.pathname }}
      />
    );

  return <Outlet />;
};

export default AuthenticationRoute;
