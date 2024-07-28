import { Stack, Typography } from "@mui/material";
import Lottie from "lottie-react";
import { FC } from "react";
import empty from "src/animations/empty.json";

const EmptySearch: FC = () => {
  return (
    <Stack justifyContent="center" alignItems="center">
      <Lottie animationData={empty} style={{ maxWidth: "250px" }} />
      <Typography variant="h6" color="text.secondary">
        No results found yet
      </Typography>
    </Stack>
  );
};

export default EmptySearch;
