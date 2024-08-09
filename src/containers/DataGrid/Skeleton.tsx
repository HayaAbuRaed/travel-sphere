import { FC } from "react";
import { Skeleton as MuiSkeleton } from "@mui/material";

const Skeleton: FC = () => {
  return (
    <MuiSkeleton
      variant="rectangular"
      width="100%"
      height="calc(100vh - 64px - 32px - 56px - 24px - 32px - 4px)"
      sx={{ display: "block", borderRadius: 1 }}
    />
  );
};

export default Skeleton;
