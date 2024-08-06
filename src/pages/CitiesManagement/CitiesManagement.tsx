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
import { City } from "./API/types";
import useGetCities from "./hooks/useGetCities";
import styles from "./styles.module.css";
import { FilterConfigState } from "./types";
import { filterCities } from "./utils";
import DataGrid from "src/containers/DataGrid";

const CitiesManagement: FC = () => {
  const [filterConfig, setFilterConfig] = useState<FilterConfigState>({
    key: "all",
    value: "",
  });

  const { cities, isFetching } = useGetCities();

  if (isFetching) return <h1>Loading...</h1>;

  if (!cities) return null;

  const filteredCities = filterCities(
    cities,
    filterConfig.key,
    filterConfig.value
  );

  const handleSelectChange = (event: SelectChangeEvent) => {
    setFilterConfig({
      key: event.target.value as keyof City,
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
        <Typography component="h1" variant="h4" fontWeight={600}>
          Cities
        </Typography>
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
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="id">ID</MenuItem>
              <MenuItem value="name">Name</MenuItem>
              <MenuItem value="description">Description</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Filter by Name"
            variant="filled"
            color="secondary"
            value={filterConfig.value}
            onChange={handleFilterChange}
            className={styles.filterInput}
          />
        </Stack>
      </Stack>

      <DataGrid
        data={filteredCities}
        headers={["id", "name", "description"] as (keyof City)[]}
      />
    </Grid>
  );
};

export default CitiesManagement;
