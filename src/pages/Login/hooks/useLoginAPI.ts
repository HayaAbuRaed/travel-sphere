import { useMutation } from "@tanstack/react-query";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN_KEY } from "src/constants/localStorage";
import { showErrorSnackbar } from "src/features/snackbar/snackbarSlice";
import { useAppDispatch } from "src/store/hooks";
import { loginApi } from "../API";
import { login } from "src/features/user";
import { JwtPayload } from "src/types/authentication";

const useLoginAPI = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { mutateAsync: logUserIn, isPending } = useMutation({
    mutationFn: loginApi,
    onSuccess: (res) => {
      localStorage.setItem(ACCESS_TOKEN_KEY, res.authentication);

      const payload = jwtDecode<JwtPayload>(res.authentication);

      const { user_id, given_name, family_name, user_type, exp } = payload;

      dispatch(
        login({
          userId: user_id,
          givenName: given_name,
          familyName: family_name,
          userType: user_type,
          expirationDate: new Date(exp * 1000),
        })
      );

      navigate("/me");
    },
    onError: () => {
      dispatch(
        showErrorSnackbar({
          message: "One or more credentials are invalid!",
        })
      );
    },
  });
  return { logUserIn, isPending };
};

export default useLoginAPI;
