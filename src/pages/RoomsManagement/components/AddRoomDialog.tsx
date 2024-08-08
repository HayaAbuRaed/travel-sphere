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
import useAddRoomForm from "../hooks/useAddRoomForm";
import { AddRoomDialogProps } from "../types";
// import styles from "../styles.module.css";

const AddRoomDialog: FC<AddRoomDialogProps> = ({ open, onClose }) => {
  const { formikProps, isAdding } = useAddRoomForm();

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
        Add Room
        <IconButton size="small" sx={{ ml: "auto" }}>
          <CrossIcon onClick={handleClose} fontSize="small" />
        </IconButton>
      </DialogTitle>
      <Divider />

      <FormikProvider value={formikProps}>
        <Form>
          <DialogContent>
            <Stack gap={2}>
              <TextField
                name="roomNumber"
                label="Room Number"
                placeholder="e.g., 328"
              />
              <TextField name="cost" label="Cost ($)" placeholder="e.g., 150" />
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

export default AddRoomDialog;
