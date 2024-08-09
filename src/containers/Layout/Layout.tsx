import { Box } from "@mui/material";
import { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import NavigationDrawer from "../NavigationDrawer";
import styles from "./style.module.css";
import { Main } from "./styled";

const Layout: FC = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

  const handleOpenSideBar = () => setOpenSideBar(true);

  const handleCloseSideBar = () => setOpenSideBar(false);

  return (
    <Box className={styles.layoutContainer}>
      <Navbar
        isSideBarOpen={openSideBar}
        handleOpenSideBar={handleOpenSideBar}
      />
      <NavigationDrawer
        open={openSideBar}
        handleDrawerClose={handleCloseSideBar}
      />

      <Main open={openSideBar}>
        <Outlet />
      </Main>

      {/* Footer */}
    </Box>
  );
};

export default Layout;
