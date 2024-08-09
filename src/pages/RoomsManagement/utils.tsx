import { Stack } from "@mui/material";
import { ReactElement } from "react";
import AmenityChip from "src/components/AmenityChip";
import { RoomResponse } from "src/types/room";
import { RoomRow } from "./types";

export const mapRoomsToTableData = (rooms: RoomResponse[]): RoomRow[] => {
  const image = (url: string) => (
    <img src={url} alt="room" style={{ maxWidth: "180px" }} />
  );

  const amenities = (amenities: RoomResponse["roomAmenities"]) => (
    <Stack gap={0.75} alignItems="flex-start">
      {amenities.map((amenity) => (
        <Stack key={amenity.name}>
          <AmenityChip label={amenity.name} />
        </Stack>
      ))}
    </Stack>
  );

  return rooms.map((room) => ({
    id: room.roomId,
    number: room.roomNumber,
    type: room.roomType,
    "# adults": room.capacityOfAdults,
    "# children": room.capacityOfChildren,
    "available?": room.availability ? "Yes" : "No",
    "price ($)": room.price,
    photo: image(room.roomPhotoUrl),
    amenities: amenities(room.roomAmenities),
  }));
};

export const filterByKey = (
  rooms: RoomRow[],
  key: keyof RoomRow,
  value: string
) => {
  const trimmedValue = value.trim();

  if (trimmedValue === "") return rooms;

  if (key === "amenities") {
    return rooms.filter((room) => {
      const amenitiesStack = room[key] as ReactElement;
      const amenities = amenitiesStack.props.children as ReactElement[];

      return amenities.some((amenity: ReactElement) => {
        const amenityName = amenity.props.children.props.label;
        return amenityName.toLowerCase().includes(trimmedValue.toLowerCase());
      });
    });
  }

  return rooms.filter((room) => {
    if (typeof room[key as keyof RoomRow] === "number") {
      return room[key as keyof RoomRow] === parseInt(trimmedValue);
    }
    return String(room[key as keyof RoomRow])
      .toLowerCase()
      .includes(trimmedValue.toLowerCase());
  });
};
