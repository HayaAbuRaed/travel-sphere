import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { FC } from "react";
import { ConfirmDialogProps } from "./types";

const ConfirmDialog: FC<ConfirmDialogProps> = ({
  open,
  title,
  msg,
  onConfirm,
  onCancel,
  onClose,
}) => {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  const handleCancel = () => {
    onCancel && onCancel();
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="confirm-dialog-title"
      aria-describedby="confirm-dialog-description"
    >
      <DialogTitle id="confirm-dialog-title" textTransform="capitalize">
        {title}
      </DialogTitle>

      <DialogContent>{msg}</DialogContent>

      <DialogActions>
        <Button color="error" onClick={handleConfirm}>
          confirm
        </Button>
        <Button color="info" onClick={handleCancel} autoFocus>
          cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
