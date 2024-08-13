import { Stack } from "@mui/material";
import Lottie from "lottie-react";
import { FC } from "react";
import notFound404 from "src/assets/animations/notFound404.json";

const NotFound: FC = () => {
  return (
    <Stack
      height="calc(100vh - 24px)"
      justifyContent="center"
      alignItems="center"
    >
      <Lottie animationData={notFound404} style={{ maxWidth: "400px" }} />
    </Stack>
  );
};

export default NotFound;
