import CrossIcon from "@mui/icons-material/Close";
import UpdateIcon from "@mui/icons-material/TaskAlt";
import LoadingButton from "@mui/lab/LoadingButton";
import {
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { Form, FormikProvider } from "formik";
import { FC, useEffect } from "react";
import TextField from "src/components/Fields/TextField";
import { Dialog } from "src/containers/Dialogs";
import useUpdateCityForm from "../hooks/useUpdateCityForm";
import styles from "../styles.module.css";
import { UpdateCityDialogProps } from "../types";

const UpdateCityDialog: FC<UpdateCityDialogProps> = ({
  city,
  open,
  onClose,
}) => {
  const { formikProps, isUpdating, updateStatus } = useUpdateCityForm(city);

  useEffect(() => {
    if (!isUpdating && updateStatus === "success") {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUpdating]);

  const { dirty, isValid, resetForm } = formikProps;

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth variant="left">
      <DialogTitle display="flex">
        Update City
        <IconButton size="small" sx={{ ml: "auto" }} onClick={handleClose}>
          <CrossIcon fontSize="small" />
        </IconButton>
      </DialogTitle>

      <FormikProvider value={formikProps}>
        <Form className={styles.form}>
          <DialogContent dividers className={styles.dialogContent}>
            <TextField name="name" placeholder="e.g., Nablus" label="Name" />
            <TextField
              name="description"
              label="Description"
              placeholder="e.g., Nablus is the city of Kunafa"
              multiline
            />
          </DialogContent>

          <DialogActions sx={{ pr: 3, py: 2, mt: "auto" }}>
            <LoadingButton
              type="submit"
              loading={isUpdating}
              disabled={!dirty || !isValid}
              variant="contained"
              disableElevation
              startIcon={<UpdateIcon />}
              loadingPosition="start"
            >
              Update
            </LoadingButton>
          </DialogActions>
        </Form>
      </FormikProvider>
    </Dialog>
  );
};

export default UpdateCityDialog;
