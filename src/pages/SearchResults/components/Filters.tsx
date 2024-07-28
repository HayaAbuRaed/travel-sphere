import { Button, Stack, Typography } from "@mui/material";
import { FC } from "react";
import AmenitiesCheckBoxGroup from "./AmenitiesCheckBoxGroup";
import PriceFilter from "./PriceFilter";
import RatingRadioGroup from "./RatingRadioGroup";
import SortByRadioGroup from "./SortByRadioGroup";
import useSearchResultsContext from "../context/useSearchResultsContext";

const Filters: FC = () => {
  const { onApplyFilters, onClearFilters } = useSearchResultsContext();

  const handleClearFilters = () => onClearFilters();

  const handleApplyFilters = () => onApplyFilters();

  return (
    <Stack
      gap={2}
      px={2.5}
      py={2}
      maxWidth={320}
      maxHeight={620}
      sx={{ backgroundColor: "#f1f1f1", borderRadius: 1 }}
    >
      <Typography variant="h6">Filters</Typography>

      <PriceFilter />

      <RatingRadioGroup />

      <AmenitiesCheckBoxGroup />

      <SortByRadioGroup />

      <Stack
        flexDirection="row"
        gap={1}
        alignItems="center"
        justifyContent="center"
      >
        <Button
          variant="contained"
          onClick={handleApplyFilters}
          disableElevation
          sx={{ textTransform: "none" }}
          color="secondary"
        >
          Apply Filters
        </Button>
        <Button
          variant="outlined"
          onClick={handleClearFilters}
          disableElevation
          sx={{ textTransform: "none" }}
          color="secondary"
        >
          Clear Filters
        </Button>
      </Stack>
    </Stack>
  );
};

export default Filters;
