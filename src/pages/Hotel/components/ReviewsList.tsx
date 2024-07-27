import { FC, useState } from "react";
import { ReviewProps } from "../types";
import { Button, Stack, Typography } from "@mui/material";
import useGetHotelReviews from "../hooks/useGetHotelReviews";
import ReviewSegment from "./ReviewSegment";
import ExpandMoreIcon from "@mui/icons-material/ExpandMoreOutlined";
import ExpandLessIcon from "@mui/icons-material/ExpandLessOutlined";

const initialVisibleCount = 2;

const ReviewsList: FC<ReviewProps> = ({ id }) => {
  const { reviews, isFetching } = useGetHotelReviews(id);

  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);

  if (isFetching) return <div>Loading...</div>;

  if (!reviews) return null;

  const handleShowMore = () =>
    setVisibleCount((prev) => prev + initialVisibleCount);

  const handleShowLess = () => setVisibleCount(initialVisibleCount);

  return (
    <Stack gap={1}>
      <Typography variant="h6">Reviews</Typography>
      <Stack gap={1.5}>
        {reviews.slice(0, visibleCount).map((review) => (
          <ReviewSegment key={review.reviewId} review={review} />
        ))}
      </Stack>

      {visibleCount < reviews.length && (
        <Button
          color="secondary"
          onClick={handleShowMore}
          startIcon={<ExpandMoreIcon />}
          sx={{ textTransform: "none" }}
        >
          Show More
        </Button>
      )}

      {visibleCount >= reviews.length && (
        <Button
          color="secondary"
          onClick={handleShowLess}
          startIcon={<ExpandLessIcon />}
          sx={{ textTransform: "none" }}
        >
          Show Less
        </Button>
      )}
    </Stack>
  );
};

export default ReviewsList;
