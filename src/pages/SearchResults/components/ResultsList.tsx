import { Box, Stack, useMediaQuery } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import AmenityChip from "src/components/AmenityChip";
import HotelCard from "src/components/HotelCard";
import useSearchResultsContext from "../context/useSearchResultsContext";
import { mapSearchResultToHotel } from "../utils";
import EmptySearch from "./EmptySearch";
import ResultsListLoadingSkeleton from "./ResultsListLoadingSkeleton";

const ResultsList: FC = () => {
  const {
    state: { searchResults, loading },
  } = useSearchResultsContext();

  const navigate = useNavigate();

  const sm = useMediaQuery("(min-width: 900px)");

  if (loading && searchResults === undefined)
    return <ResultsListLoadingSkeleton />;

  if (!searchResults || searchResults.length === 0) return <EmptySearch />;

  if (loading) return <ResultsListLoadingSkeleton />;

  const handleCardClick = (hotelId: number) => {
    navigate(`/me/hotels/${hotelId}`);
  };

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
        <Box
          key={`skeleton${hotel.hotelId}`}
          onClick={() => handleCardClick(hotel.hotelId)}
          sx={{ cursor: "pointer" }}
        >
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
        </Box>
      ))}
    </Stack>
  );
};

export default ResultsList;
