import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN_KEY } from "src/constants/localStorage";
import { showErrorSnackbar } from "src/features/snackbar/snackbarSlice";
import { login } from "src/features/user";
import { useAppDispatch } from "src/store/hooks";
import getJwtData from "src/utils/getJwtData";
import { loginApi } from "../API";

const useLoginAPI = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { mutateAsync: logUserIn, isPending } = useMutation({
    mutationFn: loginApi,
    onSuccess: (res) => {
      const token = res.authentication;

      localStorage.setItem(ACCESS_TOKEN_KEY, token);

      const payload = getJwtData(token);

      dispatch(login(payload));

      navigate("/me");
      window.location.reload();
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
