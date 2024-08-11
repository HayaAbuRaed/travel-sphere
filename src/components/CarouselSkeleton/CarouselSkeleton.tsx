import { Skeleton } from "@mui/material";
import { FC } from "react";
import Carousel, { CarouselProps as MCP } from "react-multi-carousel";
import { CarouselProps } from "./types";

const CarouselSkeleton: FC<CarouselProps> = ({ carouselProps }) => {
  return (
    <Carousel {...(carouselProps as MCP)}>
      {Array.from({ length: 4 }).map((_, index) => (
        <Skeleton
          key={index}
          variant="rectangular"
          height={400}
          width="100%"
          sx={{ maxWidth: 450 }}
        />
      ))}
    </Carousel>
  );
};

export default CarouselSkeleton;
