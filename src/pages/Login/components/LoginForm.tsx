import LoginIcon from "@mui/icons-material/Login";
import LoadingButton from "@mui/lab/LoadingButton";
import { Stack } from "@mui/material";
import { Form, FormikProvider } from "formik";
import TextField from "src/components/Fields/TextField";
import useLoginForm from "../hooks/useLoginForm";
import styles from "../style.module.css";
import PasswordField from "src/components/Fields/PasswordField";

const LoginForm = () => {
  const { formikProps, isSubmitting } = useLoginForm();

  const { dirty, isValid } = formikProps;

  return (
    <FormikProvider value={formikProps}>
      <Form className={styles.form}>
        <Stack gap={2}>
          <TextField
            name="userName"
            label="Username"
            placeholder="e.g., user"
            variant="filled"
            color="secondary"
            fullWidth
            autoFocus
          />
          <PasswordField
            name="password"
            label="Password"
            placeholder="e.g., password"
            variant="filled"
            color="secondary"
            fullWidth
          />
        </Stack>

        <LoadingButton
          loading={isSubmitting}
          disabled={!dirty || !isValid}
          type="submit"
          startIcon={<LoginIcon />}
          variant="contained"
          loadingPosition="start"
          aria-label="Log in"
          className={styles.submitButton}
          disableElevation
        >
          Log in
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
};

export default LoginForm;
