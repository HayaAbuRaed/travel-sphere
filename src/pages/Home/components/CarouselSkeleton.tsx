import { Skeleton } from "@mui/material";
import { FC } from "react";
import Carousel from "react-multi-carousel";
import { recentlyVisitedCarouselProps } from "../constants";

const CarouselSkeleton: FC = () => {
  return (
    <Carousel {...recentlyVisitedCarouselProps}>
      {Array.from({ length: 4 }).map((_, index) => (
        <Skeleton
          key={index}
          variant="rectangular"
          height={400}
          sx={{ maxWidth: 450 }}
        />
      ))}
    </Carousel>
  );
};

export default CarouselSkeleton;
