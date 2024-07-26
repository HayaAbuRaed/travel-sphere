import { Typography } from "@mui/material";
import { FC } from "react";
import useHotelCardContext from "../context/useHotelCardContext";
import styles from "../style.module.css";

const Description: FC = () => {
  const { description } = useHotelCardContext();

  return (
    <Typography
      variant="body2"
      color="text.secondary"
      className={styles.showTwoLines}
      gutterBottom
    >
      {description}
    </Typography>
  );
};

export default Description;
