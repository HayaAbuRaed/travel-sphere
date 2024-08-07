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
import { useState } from "react";
import DataGrid from "src/containers/DataGrid";
import useGetHotelRooms from "./hooks/useGetHotelRooms";
import { FilterConfigState, RoomRow } from "./types";
import { filterByKey, mapRoomsToTableData } from "./utils";
import travelSphereTheme from "src/style/travelSphereTheme";

const RoomsManagement = () => {
  const [filterConfig, setFilterConfig] = useState<FilterConfigState>({
    key: "type",
    value: "",
  });

  const { rooms, isFetching } = useGetHotelRooms();

  if (isFetching) return <h1>Loading...</h1>;

  if (!rooms) return null;

  const roomsData = mapRoomsToTableData(rooms);

  const filteredRoomsData = filterByKey(
    roomsData,
    filterConfig.key,
    filterConfig.value
  );

  const handleSelectChange = (event: SelectChangeEvent) => {
    setFilterConfig({
      key: event.target.value as keyof RoomRow,
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
    <Grid
      container
      px={{ xs: 3.5, md: 7 }}
      py={4}
      rowGap={3}
      sx={{ ...travelSphereTheme.mixins.niceScroll() }}
    >
      <Stack
        width="100%"
        gap={1}
        flexDirection={{ sm: "row" }}
        alignItems={{ sm: "center" }}
      >
        <Typography variant="h4">Rooms</Typography>
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
              {Object.keys(roomsData[0]).map((key) => (
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
      <DataGrid
        data={filteredRoomsData}
        headers={[
          "id",
          "number",
          "type",
          "price ($)",
          "# adults",
          "# children",
          "available?",
          "amenities",
          "photo",
        ]}
        loadMore={() => {}}
        hasMore={false}
      />
    </Grid>
  );
};

export default RoomsManagement;
