import UpdateIcon from "@mui/icons-material/TaskAlt";
import CrossIcon from "@mui/icons-material/Close";
import LoadingButton from "@mui/lab/LoadingButton";
import {
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { Form, FormikProvider } from "formik";
import { FC, useEffect } from "react";
import TextField from "src/components/Fields/TextField";
import { Dialog } from "src/containers/Dialogs";
import { LeftTransition } from "src/containers/Dialogs/Transitions";
import useUpdateHotelForm from "../hooks/useUpdateHotelForm";
import styles from "../styles.module.css";
import { UpdateHotelDialogProps } from "../types";
import Map from "./Map";

const UpdateHotelDialog: FC<UpdateHotelDialogProps> = ({
  hotel,
  open,
  onClose,
}) => {
  const { formikProps, isUpdating } = useUpdateHotelForm(hotel);

  const { dirty, isValid, resetForm, values, setValues } = formikProps;

  const { starRating, latitude, longitude } = values;

  const handleClose = () => {
    resetForm();
    onClose();
  };

  useEffect(() => {
    if (!isUpdating) {
      resetForm();
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUpdating]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      variant="left"
      TransitionComponent={LeftTransition}
    >
      <DialogTitle display="flex">
        Update Hotel
        <IconButton size="small" sx={{ ml: "auto" }} onClick={handleClose}>
          <CrossIcon fontSize="small" />
        </IconButton>
      </DialogTitle>

      <FormikProvider value={formikProps}>
        <Form className={styles.form}>
          <DialogContent dividers className={styles.dialogContent}>
            <TextField name="name" label="Name" placeholder="e.g., Red Rose" />

            <TextField
              name="description"
              label="Description"
              placeholder="e.g., Red Rose is a 5-star hotel"
            />

            <TextField
              name="hotelType"
              label="Hotel Type"
              placeholder="e.g., Resort"
            />

            <Stack gap={0.25} pb={1.5}>
              <Typography variant="caption" color="GrayText" pl={0.5}>
                Star Ratting
              </Typography>
              <Rating
                size="large"
                name="starRating"
                value={starRating}
                onChange={(_event, newValue) => {
                  setValues({ ...values, starRating: newValue ?? 0 });
                }}
              />
            </Stack>

            <Stack flexDirection="row" gap={2}>
              <TextField
                name="latitude"
                label="Latitude"
                placeholder="e.g., 31.9"
                type="number"
                fullWidth
              />
              <TextField
                name="longitude"
                label="Longitude"
                placeholder="e.g., 35.2"
                type="number"
                fullWidth
              />
            </Stack>
            <Map position={[latitude, longitude]} />
          </DialogContent>

          <DialogActions sx={{ pr: 3, mt: "auto" }}>
            <LoadingButton
              type="submit"
              loading={isUpdating}
              disabled={!dirty || !isValid}
              variant="contained"
              disableElevation
              startIcon={<UpdateIcon />}
              loadingPosition="start"
              // onClick={handleSubmit}
              sx={{ mt: "auto" }}
            >
              Update
            </LoadingButton>
          </DialogActions>
        </Form>
      </FormikProvider>
    </Dialog>
  );
};

export default UpdateHotelDialog;
