import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { FC } from "react";
import useSearchResultsContext from "../context/useSearchResultsContext";
import { SORTING_OPTIONS } from "../constants";

const SortByRadioGroup: FC = () => {
  const {
    setSortByFilter,
    state: {
      filters: { sortBy },
    },
  } = useSearchResultsContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const sortBy = (event.target as HTMLInputElement).value as SORTING_OPTIONS;
    setSortByFilter(sortBy);
  };

  return (
    <FormControl>
      <FormLabel color="secondary">Sort by</FormLabel>
      <RadioGroup
        row
        aria-labelledby="rating-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={handleChange}
        value={sortBy !== null ? sortBy.toString() : ""}
      >
        <FormControlLabel
          key={SORTING_OPTIONS.PRICE}
          value={SORTING_OPTIONS.PRICE}
          control={<Radio size="small" color="secondary" />}
          label={SORTING_OPTIONS.PRICE}
        />
        <FormControlLabel
          key={SORTING_OPTIONS.RATING}
          value={SORTING_OPTIONS.RATING}
          control={<Radio size="small" color="secondary" />}
          label={SORTING_OPTIONS.RATING}
        />
      </RadioGroup>
    </FormControl>
  );
};

export default SortByRadioGroup;
