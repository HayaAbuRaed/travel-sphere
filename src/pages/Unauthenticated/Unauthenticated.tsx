import { Button, Stack, Typography } from "@mui/material";
import Lottie from "lottie-react";
import { FC } from "react";
import locked from "src/assets/animations/locked.json";
import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";

const Unauthenticated: FC = () => {
  const navigate = useNavigate();

  return (
    <Stack className={styles.pageContainer}>
      <Stack className={styles.mainContainer}>
        <Stack maxHeight={350}>
          <Lottie animationData={locked} style={{ minWidth: "450px" }} />
        </Stack>

        <Stack gap={1}>
          <Typography fontSize={{ xs: "1.5rem", sm: "2rem" }} fontWeight={600}>
            Unauthenticated
          </Typography>
          <Button
            color="secondary"
            onClick={() => navigate("/login")}
            sx={{ textTransform: "none", fontWeight: 600, fontSize: "1.1rem" }}
          >
            Go to Login
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Unauthenticated;
