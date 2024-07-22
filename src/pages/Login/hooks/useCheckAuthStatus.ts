import { useEffect } from "react";
import { logout } from "src/features/user";
import { useAppDispatch } from "src/store/hooks";

/**
 * @description make sure the user is logged out if they reach the login page
 */
const useCheckAuthStatus = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(logout());
  });
};

export default useCheckAuthStatus;
