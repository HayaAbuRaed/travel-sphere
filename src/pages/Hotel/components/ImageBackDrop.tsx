import { Backdrop } from "@mui/material";
import { FC } from "react";
import { ImageBackDropProps } from "../types";
import styles from "../style.module.css";

const ImageBackDrop: FC<ImageBackDropProps> = ({
  onClose,
  open,
  photo: { url, id },
}) => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
      onClick={onClose}
    >
      <img
        src={url}
        alt={`Hotel Photo${id}`}
        className={styles.backdropImage}
      />
    </Backdrop>
  );
};

export default ImageBackDrop;
