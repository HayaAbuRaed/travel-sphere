import { Skeleton, Stack, useMediaQuery } from "@mui/material";
import { FC } from "react";
import AmenityChip from "src/components/AmenityChip";
import HotelCard from "src/components/HotelCard";
import useSearchResultsContext from "../context/useSearchResultsContext";
import { mapSearchResultToHotel } from "../utils";
import EmptySearch from "./EmptySearch";

const ResultsList: FC = () => {
  const {
    state: { searchResults, loading },
  } = useSearchResultsContext();

  const sm = useMediaQuery("(min-width: 900px)");

  if (loading)
    return (
      <Stack gap={1}>
        {[...Array(5)].map((_, index) => (
          <Skeleton
            key={index}
            variant="rectangular"
            height={250}
            sx={{ borderRadius: 1 }}
          />
        ))}
      </Stack>
    );

  if (!searchResults || searchResults.length === 0) return <EmptySearch />;

  return (
    <Stack
      gap={1}
      width={{ md: "100%" }}
      maxWidth="700px"
      flexDirection={{ sm: "row", md: "column" }}
      flexWrap={{ sm: "wrap", md: "nowrap" }}
      justifyContent={{ sm: "center", md: "flex-start" }}
    >
      {searchResults.map((hotel) => (
        <HotelCard
          key={hotel.hotelId}
          hotel={mapSearchResultToHotel(hotel)}
          {...(sm ? { horizontal: true } : {})}
        >
          <HotelCard.Rating />
          <HotelCard.Heading />
          <HotelCard.Description />
          <Stack flexDirection="row" flexWrap="wrap" pb={1.5} gap={1}>
            {hotel.amenities.map(({ name }) => (
              <AmenityChip key={name} label={name} />
            ))}
          </Stack>
          <HotelCard.InfoCard showPrice singlePriceBound />
        </HotelCard>
      ))}
    </Stack>
  );
};

export default ResultsList;
