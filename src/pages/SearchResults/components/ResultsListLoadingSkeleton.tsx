import { Stack, Skeleton } from "@mui/material";
import { FC } from "react";

const ResultsListLoadingSkeleton: FC = () => (
  <Stack gap={1}>
    {[...Array(5)].map((_, index) => (
      <Skeleton
        key={index}
        variant="rectangular"
        height={250}
        sx={{ borderRadius: 1, width: { xs: 300, sm: 500 } }}
      />
    ))}
  </Stack>
);

export default ResultsListLoadingSkeleton;
