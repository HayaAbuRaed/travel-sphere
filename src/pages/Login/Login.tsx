import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import logo from "src/assets/logo.png";
import LoginForm from "./components/LoginForm";
import useCheckAuthStatus from "./hooks/useCheckAuthStatus";
import styles from "./style.module.css";

const Login: FC = () => {
  useCheckAuthStatus();

  return (
    <Stack className={styles.mainContainer}>
      <Stack className={styles.formContainer}>
        <img src={logo} alt="logo" />

        <Stack gap={5} width="100%">
          <LoginForm />

          <Typography color="GrayText" variant="body2" textAlign="center">
            ✨ A piece of paradise just for you ✨
          </Typography>
        </Stack>
      </Stack>

      <Typography variant="body2" textAlign="center" sx={{ color: "#fafafa" }}>
        © 2024 TravelSphere.
      </Typography>
    </Stack>
  );
};

export default Login;
