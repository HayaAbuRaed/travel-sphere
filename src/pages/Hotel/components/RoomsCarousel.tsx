import { Typography } from "@mui/material";
import { FC } from "react";
import Carousel from "react-multi-carousel";
import { roomsCarouselProps } from "../constants";
import useGetHotelRooms from "../hooks/useGetHotelRooms";
import { RoomsCarouselProps } from "../types";
import RoomCard from "src/components/RoomCard";

const RoomsCarousel: FC<RoomsCarouselProps> = ({ id }) => {
  const { rooms } = useGetHotelRooms(id);

  if (!rooms) return <Typography>Rooms not found</Typography>;

  return (
    <Carousel {...roomsCarouselProps}>
      {rooms.map((room) => (
        <RoomCard key={room.roomId} room={room} />
      ))}
    </Carousel>
  );
};

export default RoomsCarousel;
