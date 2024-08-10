import styled from "@emotion/styled";
import { Badge, BadgeProps } from "@mui/material";

export const StyledBadge = styled(Badge)<BadgeProps>(() => ({
  "& .MuiBadge-badge": {
    border: "1px solid #fafafa",
    padding: 0,
    fontSize: "10px",
  },
}));
