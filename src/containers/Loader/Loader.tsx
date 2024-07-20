import { Box } from "@mui/material";
import { FC } from "react";
import { HashLoader } from "react-spinners";
import theme from "src/style/travelSphereTheme";
import styles from "./style.module.css";

const Loader: FC = () => {
  return (
    <Box className={styles.loaderContainer}>
      <HashLoader color={theme.palette.secondary.main} />
    </Box>
  );
};

export default Loader;
