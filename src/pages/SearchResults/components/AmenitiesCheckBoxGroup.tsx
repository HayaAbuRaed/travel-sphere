import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Skeleton,
  Stack,
} from "@mui/material";
import { FC, useEffect, useState } from "react";
import useSearchResultsContext from "../context/useSearchResultsContext";
import useGetSearchPageAmenities from "../hooks/useGetSearchPageAmenities";

const AmenitiesCheckBoxGroup: FC = () => {
  const { searchAmenities, isFetching } = useGetSearchPageAmenities();

  const {
    setAmenitiesFilter,
    state: {
      filters: { amenities: filterAmenities },
    },
  } = useSearchResultsContext();

  const [selectedAmenities, setSelectedAmenities] =
    useState<string[]>(filterAmenities);

  useEffect(() => {
    setSelectedAmenities(filterAmenities);
  }, [filterAmenities]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const amenity = event.target.value;

    const newSelectedAmenities = event.target.checked
      ? [...selectedAmenities, amenity]
      : selectedAmenities.filter((a) => a !== amenity);

    setSelectedAmenities(newSelectedAmenities);

    setAmenitiesFilter(newSelectedAmenities);
  };

  if (isFetching)
    return (
      <Stack gap={1}>
        {[...Array(5)].map((_, index) => (
          <Skeleton
            key={index}
            variant="rectangular"
            height={30}
            sx={{ borderRadius: 1 }}
          />
        ))}
      </Stack>
    );

  if (!searchAmenities) return <div>No amenities to search</div>;

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend" color="secondary">
        Amenities
      </FormLabel>
      <FormGroup>
        {searchAmenities.map(({ name }) => (
          <FormControlLabel
            key={name}
            control={
              <Checkbox
                size="small"
                value={name}
                checked={selectedAmenities.includes(name)}
                onChange={handleChange}
                color="secondary"
              />
            }
            label={name}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
};

export default AmenitiesCheckBoxGroup;
