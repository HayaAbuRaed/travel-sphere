import BuildingIcon from "@mui/icons-material/BusinessOutlined";
import PriceIcon from "@mui/icons-material/CreditCardOutlined";
import LocationIcon from "@mui/icons-material/LocationOnOutlined";
import { Paper, Stack, Typography } from "@mui/material";
import { FC } from "react";
import useHotelCardContext from "../context/useHotelCardContext";
import { InfoCardProps, InfoRecordProps } from "../types";

const InfoRecord: FC<InfoRecordProps> = ({ icon, title, value, show }) => {
  if (!show) return null;

  return (
    <Stack direction="row" gap={1} alignItems="center">
      <Typography
        variant="subtitle2"
        display="flex"
        alignItems="center"
        gap={0.25}
      >
        {icon}
        {title}:
      </Typography>
      <Typography variant="subtitle2" fontWeight={400}>
        {value}
      </Typography>
    </Stack>
  );
};

const InfoCard: FC<InfoCardProps> = ({
  showHotel,
  showPrice,
  hideCity,
  singlePriceBound: singleBound,
}) => {
  const {
    cityName,
    hotelName,
    priceLowerBound: priceLowBound,
    priceUpperBound: priceHighBound,
    originalRoomPrice,
  } = useHotelCardContext();

  const info: InfoRecordProps[] = [
    {
      icon: <LocationIcon fontSize="small" />,
      title: "Location",
      value: cityName,
      show: !hideCity,
    },
    {
      icon: <BuildingIcon fontSize="small" sx={{ pb: 0.35 }} />,
      title: "Hotel",
      value: hotelName,
      show: showHotel ?? false,
    },
    {
      icon: <PriceIcon sx={{ fontSize: "1.1rem" }} />,
      title: "Price",
      value: singleBound
        ? `$${originalRoomPrice}`
        : `$${priceLowBound} - $${priceHighBound}`,
      show: showPrice ?? false,
    },
  ];

  return (
    <Paper
      elevation={0}
      component={Stack}
      sx={{ p: 2, backgroundColor: "#eee" }}
      gap={1}
    >
      {info.map((record, index) => (
        <InfoRecord key={index} {...record} />
      ))}
    </Paper>
  );
};

export default InfoCard;
