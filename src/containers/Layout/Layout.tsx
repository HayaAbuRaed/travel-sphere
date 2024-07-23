import { Box } from "@mui/material";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import styles from "./style.module.css";
import Navbar from "../Navbar";

const Layout: FC = () => {
  return (
    <Box className={styles.layoutContainer}>
      <Navbar />

      <Outlet />

      {/* Footer */}
    </Box>
  );
};

export default Layout;