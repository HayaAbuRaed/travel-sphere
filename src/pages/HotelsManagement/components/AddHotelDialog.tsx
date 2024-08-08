import AddIcon from "@mui/icons-material/Add";
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
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Form, FormikProvider } from "formik";
import * as React from "react";
import { FC, useEffect } from "react";
import TextField from "src/components/Fields/TextField";
import useAddHotelForm from "../hooks/useAddHotelForm";
import { StyledDialog } from "../styled";
import styles from "../styles.module.css";
import { AddHotelDialogProps } from "../types";
import Map from "./Map";

const Transition = React.forwardRef(
  (
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref: React.Ref<unknown>
  ) => {
    return <Slide direction="left" ref={ref} {...props} />;
  }
);

const AddHotelDialog: FC<AddHotelDialogProps> = ({ open, onClose }) => {
  const { formikProps, isAdding, addStatus } = useAddHotelForm();

  const { dirty, isValid, resetForm, values, setValues } = formikProps;

  const { starRating, latitude, longitude } = values;

  const handleClose = () => {
    resetForm();
    onClose();
  };

  useEffect(() => {
    if (!isAdding && addStatus === "success") {
      resetForm();
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAdding]);

  return (
    <StyledDialog
      open={open}
      onClose={handleClose}
      fullWidth
      variant="left"
      TransitionComponent={Transition}
    >
      <DialogTitle display="flex">
        Add Hotel
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
              loading={isAdding}
              disabled={!dirty || !isValid}
              variant="contained"
              disableElevation
              startIcon={<AddIcon />}
              loadingPosition="start"
              // onClick={handleSubmit}
              sx={{ mt: "auto" }}
            >
              Add
            </LoadingButton>
          </DialogActions>
        </Form>
      </FormikProvider>
    </StyledDialog>
  );
};

export default AddHotelDialog;
