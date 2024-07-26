import { Box, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { SectionTitleProps } from "../types";

const SectionTitle: FC<SectionTitleProps> = ({ title }) => {
  return (
    <Stack pb={4}>
      <Typography variant="h5" fontWeight={600} textTransform="capitalize">
        {title}
      </Typography>
      <Box
        width="100%"
        maxWidth="150px"
        height="5px"
        sx={{
          background: "linear-gradient(to right, #333 55%, #ffe14f 66.67%)",
        }}
      />
    </Stack>
  );
};

export default SectionTitle;
