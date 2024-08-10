import { Box } from "@mui/material";
import { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import NavigationDrawer from "../NavigationDrawer";
import styles from "./style.module.css";

const Layout: FC = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

  const handleOpenSideBar = () => setOpenSideBar(true);

  const handleCloseSideBar = () => setOpenSideBar(false);

  return (
    <Box className={styles.layoutContainer}>
      <Navbar handleOpenSideBar={handleOpenSideBar} />

      <NavigationDrawer
        open={openSideBar}
        handleDrawerClose={handleCloseSideBar}
      />

      <Outlet />

      {/* Footer */}
    </Box>
  );
};

export default Layout;
