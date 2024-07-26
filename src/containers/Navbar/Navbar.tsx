import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  AppBar,
  Avatar,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";
import icon from "src/assets/icon.png";
import MobileNavMenu from "./components/MobileNavMenu";
import UserSegment from "./components/UserSegment";
import styles from "./style.module.css";
import { StyledBadge } from "./styled";

const Navbar: FC = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  return (
    <AppBar position="static" elevation={0} color="transparent">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MobileNavMenu
            anchorElNav={anchorElNav}
            handleCloseNavMenu={handleCloseNavMenu}
            handleOpenNavMenu={handleOpenNavMenu}
          />

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/me"
            className={styles.logo}
          >
            <Avatar src={icon} alt="TravelSphere" />
            TravelSphere
          </Typography>

          {/* <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
            {PAGES.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box> */}

          <Stack ml="auto" flexDirection="row" alignItems="center" gap={1.5}>
            <IconButton sx={{ color: "text.secondary" }}>
              <StyledBadge badgeContent={4} color="error">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
            <UserSegment />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
