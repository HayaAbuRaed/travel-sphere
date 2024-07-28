import { Box } from "@mui/material";
import { FC } from "react";
import styles from "../style.module.css";
import { PropagateLoader } from "react-spinners";
import theme from "src/style/travelSphereTheme";

const PageLoader: FC = () => {
  return (
    <Box className={styles.loaderContainer}>
      <PropagateLoader color={theme.palette.secondary.main} />
    </Box>
  );
};

export default PageLoader;
