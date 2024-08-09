import AddIcon from "@mui/icons-material/Add";
import CrossIcon from "@mui/icons-material/Close";
import LoadingButton from "@mui/lab/LoadingButton";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Stack,
} from "@mui/material";
import { Form, FormikProvider } from "formik";
import { FC } from "react";
import TextField from "src/components/Fields/TextField";
import useAddCityForm from "../hooks/useAddCityForm";
import { AddCityDialogProps } from "../types";
// import styles from "../styles.module.css";

const AddCityDialog: FC<AddCityDialogProps> = ({ open, onClose }) => {
  const { formikProps, isAdding } = useAddCityForm();

  const { dirty, isValid, resetForm, submitForm } = formikProps;

  const handleSubmit = async () => {
    await submitForm();
    resetForm();
    onClose();
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle display="flex">
        Add City
        <IconButton size="small" sx={{ ml: "auto" }} onClick={handleClose}>
          <CrossIcon fontSize="small" />
        </IconButton>
      </DialogTitle>
      <Divider />

      <FormikProvider value={formikProps}>
        <Form>
          <DialogContent>
            <Stack gap={2}>
              <TextField name="name" placeholder="e.g., Nablus" label="Name" />
              <TextField
                name="description"
                label="Description"
                placeholder="e.g., Nablus is the city of Kunafa"
              />
            </Stack>
          </DialogContent>

          <DialogActions sx={{ pr: 3, pb: 2 }}>
            <LoadingButton
              type="submit"
              loading={isAdding}
              disabled={!dirty || !isValid}
              variant="contained"
              disableElevation
              startIcon={<AddIcon />}
              loadingPosition="start"
              onClick={handleSubmit}
            >
              Add
            </LoadingButton>
          </DialogActions>
        </Form>
      </FormikProvider>
    </Dialog>
  );
};

export default AddCityDialog;
