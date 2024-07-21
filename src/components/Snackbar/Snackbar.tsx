import { Alert, AlertTitle } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import { FC } from "react";
import selectSnackbar from "src/features/snackbar/selecrtors";
import { hideSnackbar } from "src/features/snackbar/snackbarSlice";
import { useAppDispatch, useAppSelector } from "src/store/hooks";

const TravelSphereSnackbar: FC = () => {
  const dispatch = useAppDispatch();

  const {
    isOpen,
    message,
    title,
    severity,
    variant,
    autoHideDuration,
    icon,
    anchorOrigin,
    alertAction,
  } = useAppSelector(selectSnackbar);

  const handleHideSnackbar = () => {
    dispatch(hideSnackbar());
  };
  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={autoHideDuration}
      onClose={handleHideSnackbar}
      anchorOrigin={anchorOrigin}
    >
      <Alert
        severity={severity}
        variant={variant}
        icon={icon}
        action={alertAction}
        onClose={handleHideSnackbar}
        sx={{ width: "100%" }}
      >
        {title && <AlertTitle>{title}</AlertTitle>}
        {message}
      </Alert>
    </Snackbar>
  );
};

export default TravelSphereSnackbar;
