import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import AmenityChip from "src/components/AmenityChip";
import { RoomInfoProps } from "../types";
import styles from "../style.module.css";

const RoomInfo: FC<RoomInfoProps> = ({ room }) => {
  const {
    roomType,
    roomPhotoUrl,
    roomNumber,
    capacityOfAdults,
    capacityOfChildren,
    price,
    roomAmenities,
  } = room;
  return (
    <Stack gap={2}>
      <Stack>
        <Typography variant="h4">{roomType}</Typography>
        <Typography variant="h6" fontSize="large">
          Room Number: {roomNumber}
        </Typography>
        <Typography variant="h6" color="secondary">
          Total Price: ${price}
        </Typography>
      </Stack>

      <img src={roomPhotoUrl} alt={roomType} className={styles.roomImage} />

      <Stack gap={1} alignItems="flex-start">
        {roomAmenities.map(({ name, description }) => (
          <AmenityChip
            key={name}
            label={`${name}: ${description}`}
            variant="body1"
          />
        ))}
      </Stack>

      <Stack
        p={2}
        maxWidth={500}
        sx={{ background: "#e5e5e5", borderRadius: 2 }}
      >
        <Typography variant="subtitle1">
          Capacity of Adults: &nbsp;{capacityOfAdults}
        </Typography>
        <Typography variant="subtitle1">
          Capacity of Children: &nbsp;{capacityOfChildren}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default RoomInfo;
