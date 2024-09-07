import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HomeIcon from "@mui/icons-material/HomeRounded";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  Box,
  Button,
  CardContent,
  Divider,
  IconButton,
  Menu,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import Avatar from "avvvatars-react";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "src/features/user";
import selectUser from "src/features/user/selectors";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { UserSegmentProps } from "./types";

const UserSegment: FC<UserSegmentProps> = ({
  size = 40,
  fontcolor,
  includeHomeButton,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { givenName, familyName, userType: role } = useAppSelector(selectUser);

  const fullName = `${givenName} ${familyName}`;

  const handleCloseMenu = () => setAnchorEl(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);

  const handleLogOut = () => {
    dispatch(logout());
    navigate("/login");
  };

  const UserAvatar = () => (
    <Avatar
      style="shape"
      value={`t445${fullName}`}
      border
      borderColor="#ddd"
      borderSize={1}
      size={size}
    />
  );

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenMenu} sx={{ p: 0 }} disableRipple>
          <UserAvatar />
          <ExpandMoreIcon
            fontSize="small"
            sx={{ color: fontcolor ?? "inherit" }}
          />
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      >
        <CardContent sx={{ width: "250px" }}>
          <Stack gap={1.15}>
            <Stack direction="row" spacing={1.25} alignItems="center">
              <UserAvatar />
              <Stack>
                <Typography variant="subtitle1">{fullName}</Typography>
                <Typography variant="caption" color="textSecondary">
                  {role}
                </Typography>
              </Stack>
            </Stack>

            <Divider />

            {includeHomeButton && (
              <Button
                startIcon={<HomeIcon />}
                onClick={() => navigate("/me")}
                sx={{
                  color: "GrayText",
                  ":hover": { color: "text.primary" },
                  justifyContent: "flex-start",
                  px: 1,
                }}
                size="large"
                fullWidth
              >
                Home
              </Button>
            )}

            <Button
              startIcon={<LogoutIcon />}
              onClick={handleLogOut}
              sx={{
                color: "GrayText",
                ":hover": { color: "text.primary" },
                justifyContent: "flex-start",
              }}
              fullWidth
            >
              Log out
            </Button>
          </Stack>
        </CardContent>
      </Menu>
    </Box>
  );
};

export default UserSegment;
