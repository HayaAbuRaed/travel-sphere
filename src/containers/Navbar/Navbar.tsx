import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Avatar,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import icon from "src/assets/icon.png";
import { selectCartTotalItems } from "src/features/cart/selectors";
import { selectIsUserAdmin } from "src/features/user";
import { useAppSelector } from "src/store/hooks";
import UserSegment from "./components/UserSegment";
import styles from "./style.module.css";
import { AppBar, StyledBadge } from "./styled";
import { NavbarProps } from "./types";

const Navbar: FC<NavbarProps> = ({ isSideBarOpen, handleOpenSideBar }) => {
  const navigate = useNavigate();

  const cartItemsCount = useAppSelector(selectCartTotalItems);
  const isAdmin = useAppSelector(selectIsUserAdmin);

  const handleCartClick = () => navigate("/me/cart");

  return (
    <AppBar
      open={isSideBarOpen}
      position="static"
      elevation={0}
      color="transparent"
      sx={{ borderBottom: "1px solid #eee" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {!isSideBarOpen && (
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenSideBar}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          )}

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
            {!isAdmin && (
              <IconButton
                onClick={handleCartClick}
                sx={{ color: "text.secondary" }}
              >
                <StyledBadge badgeContent={cartItemsCount} color="error">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
            )}
            <UserSegment />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
