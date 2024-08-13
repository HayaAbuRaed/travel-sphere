import { Stack } from "@mui/material";
import { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";
import NavigationDrawer from "../NavigationDrawer";
import styles from "./style.module.css";

const Layout: FC = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

  const handleOpenSideBar = () => setOpenSideBar(true);

  const handleCloseSideBar = () => setOpenSideBar(false);

  return (
    <Stack className={styles.layoutContainer}>
      <Navbar handleOpenSideBar={handleOpenSideBar} />

      <NavigationDrawer
        open={openSideBar}
        handleDrawerClose={handleCloseSideBar}
      />

      <Outlet />

      <Footer />
    </Stack>
  );
};

export default Layout;
