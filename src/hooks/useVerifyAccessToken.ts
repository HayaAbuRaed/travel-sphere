import { useState, useEffect } from "react";
import { login, logout } from "src/features/user";
import { useAppDispatch } from "src/store/hooks";
import checkTokenExpiration from "src/utils/checkTokenExpiration";
import getJwtData from "src/utils/getJwtData";

const useVerifyAccessToken = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const verifyToken = async () => {
      const accessToken = localStorage.getItem("accessToken");

      if (!accessToken) {
        dispatch(logout());
        setIsAuthenticating(false);
        return;
      }

      const tokenPayload = getJwtData(accessToken);

      if (checkTokenExpiration(tokenPayload.expirationDate)) {
        dispatch(logout());
        setIsAuthenticating(false);
        return;
      }

      dispatch(login(tokenPayload));
      setIsAuthenticating(false);
    };

    verifyToken();
  }, [dispatch]);

  return { isAuthenticating };
};

export default useVerifyAccessToken;
