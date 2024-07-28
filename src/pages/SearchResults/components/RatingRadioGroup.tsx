import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { FC } from "react";
import useSearchResultsContext from "../context/useSearchResultsContext";

const RatingRadioGroup: FC = () => {
  const {
    setStarRatingFilter,
    state: {
      filters: { starRating },
    },
  } = useSearchResultsContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const rating = parseInt((event.target as HTMLInputElement).value, 10);
    setStarRatingFilter(rating);
  };

  return (
    <FormControl color="secondary">
      <FormLabel>Star Rating</FormLabel>
      <RadioGroup
        row
        aria-labelledby="rating-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={handleChange}
        value={starRating !== null ? starRating.toString() : ""}
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <FormControlLabel
            key={index}
            value={index + 1}
            control={<Radio size="small" color="secondary" />}
            label={`${index + 1}`}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RatingRadioGroup;
