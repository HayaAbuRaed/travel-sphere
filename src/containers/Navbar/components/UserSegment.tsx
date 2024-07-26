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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const UserSegment: FC = () => {
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
    <Avatar style="shape" value={`t445${fullName}`} size={40} />
  );

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenMenu} sx={{ p: 0 }} disableRipple>
          <UserAvatar />
          <ExpandMoreIcon fontSize="small" />
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

            <Button
              startIcon={<LogoutIcon />}
              onClick={handleLogOut}
              sx={{
                color: "GrayText",
                alignSelf: "flex-start",
                ":hover": { color: "text.primary" },
              }}
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
