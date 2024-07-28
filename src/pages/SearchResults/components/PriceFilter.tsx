import PriceIcon from "@mui/icons-material/CreditCardOutlined";
import { Box, Slider, Stack, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import useSearchResultsContext from "../context/useSearchResultsContext";

const PriceFilter: FC = () => {
  const {
    setPriceRangeFilter,
    state: {
      filters: {
        priceRange: { min, max },
      },
    },
  } = useSearchResultsContext();

  const [value, setValue] = useState<number[]>([min, max]);

  useEffect(() => {
    setValue([min, max]);
  }, [min, max]);

  const handleSliderChange = (_event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setValue(newValue);
      const [min, max] = newValue;
      setPriceRangeFilter(min, max);
    }
  };

  return (
    <Box sx={{ width: 250 }}>
      <Typography color="text.secondary" gutterBottom>
        Price Range
      </Typography>

      <Stack
        flexDirection="row"
        alignItems="center"
        gap={1}
        position="relative"
      >
        <PriceIcon fontSize="small" sx={{ color: "text.secondary" }} />
        <Slider
          getAriaLabel={() => "Price range"}
          value={value}
          onChange={handleSliderChange}
          valueLabelDisplay="auto"
          disableSwap
          min={0}
          max={600}
          sx={{ color: "secondary.main", maxWidth: 200 }}
        />
      </Stack>
    </Box>
  );
};

export default PriceFilter;
