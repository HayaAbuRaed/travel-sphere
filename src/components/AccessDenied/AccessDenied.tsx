import { Stack, Typography } from "@mui/material";
import Lottie from "lottie-react";
import { FC } from "react";
import accessDenied from "src/animations/accessDenied.json";

const AccessDenied: FC = () => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      minHeight="calc(100vh - 64px)"
    >
      <Typography variant="h4" fontWeight={600}>
        {" "}
        Access Denied{" "}
      </Typography>
      <Lottie animationData={accessDenied} style={{ minWidth: "250px" }} />
      <Typography textAlign="center" fontWeight={600}>
        You are not authorized to view this page.
      </Typography>
    </Stack>
  );
};

export default AccessDenied;
