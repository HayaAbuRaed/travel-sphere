export interface ConfirmDialogProps {
  open: boolean;
  title: string;
  msg: string;
  onConfirm: () => void;
  onClose: () => void;
  onCancel?: () => void;
}
