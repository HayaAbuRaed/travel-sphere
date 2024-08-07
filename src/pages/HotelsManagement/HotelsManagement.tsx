import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";
import DataGrid from "src/containers/DataGrid";
import useGetHotels from "./hooks/useGetHotels";
import { FilterConfigState, HotelData } from "./types";
import { filterByKey, mapHotelsToTableData } from "./utils";
import { Hotel } from "./API/types";

const HotelsManagement: FC = () => {
  const [filterConfig, setFilterConfig] = useState<FilterConfigState>({
    key: "name",
    value: "",
  });
  const { hotels, isFetching } = useGetHotels();

  if (isFetching) return <h1>Loading...</h1>;

  if (!hotels) return null;

  const filteredHotels = filterByKey(
    hotels,
    filterConfig.key,
    filterConfig.value
  );

  const hotelsData = mapHotelsToTableData(filteredHotels);

  const headers: (keyof HotelData)[] = [
    "id",
    "name",
    "description",
    "hotelType",
    "starRating",
    "location",
  ];

  const handleSelectChange = (event: SelectChangeEvent) => {
    setFilterConfig({
      key: event.target.value as keyof Hotel,
      value: filterConfig?.value ?? "",
    });
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterConfig({
      key: filterConfig?.key,
      value: event.target.value,
    });
  };

  return (
    <Grid container px={{ sm: 3.5, md: 7 }} py={4} rowGap={3}>
      <Stack
        width="100%"
        gap={1}
        flexDirection={{ sm: "row" }}
        alignItems={{ sm: "center" }}
      >
        <Typography variant="h4">Hotels</Typography>
        <Stack
          flexDirection={{ sm: "row" }}
          alignItems={{ sm: "center" }}
          gap={1}
          ml={{ sm: "auto" }}
        >
          <FormControl
            variant="filled"
            color="secondary"
            sx={{ minWidth: 125 }}
          >
            <InputLabel>Filter By</InputLabel>
            <Select
              value={filterConfig.key}
              onChange={handleSelectChange}
              label="Filter By"
            >
              {Object.keys(hotels[0]).map((key) => (
                <MenuItem key={key} value={key}>
                  {key as string}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label={`Filter by ${filterConfig.key}`}
            variant="filled"
            color="secondary"
            value={filterConfig.value}
            onChange={handleFilterChange}
          />
        </Stack>
      </Stack>

      <DataGrid data={hotelsData} headers={headers} />
    </Grid>
  );
};

export default HotelsManagement;
