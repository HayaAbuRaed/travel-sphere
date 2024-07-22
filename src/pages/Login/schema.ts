import * as Yub from "yup";

const validationSchema = Yub.object().shape({
  userName: Yub.string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters"),
  password: Yub.string()
    .required("Password is required")
    .min(3, "Password must be at least 3 characters"),
});

export default validationSchema;
