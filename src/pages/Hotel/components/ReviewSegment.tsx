import { Card, Rating, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { ReviewSegmentProps } from "../types";
import Avatar from "avvvatars-react";

const ReviewSegment: FC<ReviewSegmentProps> = ({ review }) => {
  const { customerName, rating, description } = review;
  return (
    <Card
      variant="outlined"
      component={Stack}
      p={2}
      gap={1}
      sx={{ borderRadius: 2.5 }}
    >
      <Stack direction="row" gap={1} alignItems="center">
        <Avatar
          style="shape"
          value={customerName}
          border
          borderColor="#ccc"
          borderSize={0.5}
        />
        <Typography variant="subtitle1" fontWeight={500}>
          {customerName}
        </Typography>
      </Stack>
      <Rating
        name="read-only"
        value={rating}
        readOnly
        sx={{ "& .MuiRating-iconFilled": { color: "#FFE500" } }}
      />
      <Typography variant="body2">{description}</Typography>
    </Card>
  );
};

export default ReviewSegment;
