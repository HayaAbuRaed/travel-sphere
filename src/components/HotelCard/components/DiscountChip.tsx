import { Chip } from "@mui/material";
import { FC } from "react";
import useHotelCardContext from "../context/useHotelCardContext";
import styles from "../style.module.css";

const DiscountChip: FC = () => {
  const { discount } = useHotelCardContext();

  return (
    <Chip
      label={`${(discount ?? 0) * 100}% off`}
      color="secondary"
      className={styles.discountChip}
    />
  );
};

export default DiscountChip;
