import { useMutation } from "@tanstack/react-query";
import { ACCESS_TOKEN_KEY } from "src/constants/localStorage";
import { login } from "../API";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "src/store/hooks";
import { showErrorSnackbar } from "src/features/snackbar/snackbarSlice";
import { jwtDecode } from "jwt-decode";

const useLoginAPI = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { mutateAsync: logUserIn, isPending } = useMutation({
    mutationFn: login,
    onSuccess: (res) => {
      localStorage.setItem(ACCESS_TOKEN_KEY, res.authentication);
      const payload = jwtDecode(res.authentication);
      console.log(payload);
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
