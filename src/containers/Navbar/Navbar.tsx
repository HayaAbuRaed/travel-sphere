import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import icon from "src/assets/images/icon.png";
import { selectCartTotalItems } from "src/features/cart/selectors";
import { selectIsUserAdmin } from "src/features/user";
import { useAppSelector } from "src/store/hooks";
import UserSegment from "./components/UserSegment";
import styles from "./style.module.css";
import { StyledBadge } from "./styled";
import { NavbarProps } from "./types";

const Navbar: FC<NavbarProps> = ({ handleOpenSideBar }) => {
  const navigate = useNavigate();

  const cartItemsCount = useAppSelector(selectCartTotalItems);
  const isAdmin = useAppSelector(selectIsUserAdmin);

  const handleCartClick = () => navigate("/me/cart");

  return (
    <AppBar
      position="static"
      elevation={0}
      color="transparent"
      sx={{ borderBottom: "1px solid #eee" }}
    >
      <Container
        maxWidth="xl"
        sx={{ pl: { xs: 1, sm: 2 }, pr: { xs: 1.5, sm: 2 } }}
      >
        <Toolbar disableGutters>
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

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/me"
            className={styles.logo}
          >
            <Avatar src={icon} alt="TravelSphere" />
            <Box
              className={`${isAdmin ? styles.smallerFont : styles.disappear}`}
            >
              TravelSphere
            </Box>
          </Typography>

          <Stack
            ml="auto"
            flexDirection="row"
            alignItems="center"
            gap={{ xs: 0.2, sm: 1 }}
          >
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
