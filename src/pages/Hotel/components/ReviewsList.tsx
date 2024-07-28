import { FC, useState } from "react";
import { ReviewProps } from "../types";
import { Button, Skeleton, Stack, Typography } from "@mui/material";
import useGetHotelReviews from "../hooks/useGetHotelReviews";
import ReviewSegment from "./ReviewSegment";
import ExpandMoreIcon from "@mui/icons-material/ExpandMoreOutlined";
import ExpandLessIcon from "@mui/icons-material/ExpandLessOutlined";
import theme from "src/style/travelSphereTheme";
import styles from "../style.module.css";

const initialVisibleCount = 2;

const ReviewsList: FC<ReviewProps> = ({ id }) => {
  const { reviews, isFetching } = useGetHotelReviews(id);

  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);

  if (isFetching)
    return (
      <Skeleton
        variant="rectangular"
        height="50%"
        width="100%"
        className={styles.reviewsContainer}
      />
    );

  if (!reviews) return null;

  const handleShowMore = () =>
    setVisibleCount((prev) => prev + initialVisibleCount);

  const handleShowLess = () => setVisibleCount(initialVisibleCount);

  return (
    <Stack className={styles.reviewsContainer} gap={1}>
      <Typography
        variant="h6"
        component={Stack}
        direction={{ xs: "column", md: "row" }}
        alignItems={{ xs: "flex-start", md: "center" }}
        gap={{ xs: 0, md: 0.75 }}
      >
        Guests Reviews
        <Typography variant="body2" color="text.secondary">
          ({reviews.length} reviews)
        </Typography>
      </Typography>

      <Stack
        gap={1.5}
        className={styles.controlScroll}
        sx={{ ...theme.mixins.niceScroll() }}
      >
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
    </Stack>
  );
};

export default ReviewsList;
