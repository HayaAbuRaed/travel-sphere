import {
  Button,
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
import useDeleteCity from "./hooks/useDeleteCity";
import ConfirmDialog from "src/containers/Dialogs/ConfirmDialog";
import { DialogType } from "./constants";
import AddCityDialog from "./components/AddCityDialog";
import AddIcon from "@mui/icons-material/Add";
import UpdateCityDialog from "./components/UpdateCityDialog";
import Skeleton from "src/containers/DataGrid/Skeleton";

const CitiesManagement: FC = () => {
  const [filterConfig, setFilterConfig] = useState<FilterConfigState>({
    key: "all",
    value: "",
  });

  const [openDialog, setOpenDialog] = useState<DialogType | null>(null);

  const [selectedCity, setSelectedCity] = useState<City | null>(null);

  const { cities, isFetching, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useGetCities();

  const { removeCity } = useDeleteCity();

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

  const handleOpenDeleteDialog = (city: City) => {
    setSelectedCity(city);
    setTimeout(() => setOpenDialog(DialogType.DELETE));
  };

  const handleOpenUpdateDialog = (city: City) => {
    setSelectedCity(city);
    setOpenDialog(DialogType.UPDATE);
  };

  const handleOpenAddDialog = () => setOpenDialog(DialogType.ADD);

  const handleCloseDialog = () => {
    setOpenDialog(null);
    setSelectedCity(null);
  };

  return (
    <>
      <Grid container px={{ xs: 3.5, md: 7 }} py={4} rowGap={3}>
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
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<AddIcon />}
              onClick={handleOpenAddDialog}
              sx={{ height: 56 }}
            >
              Add City
            </Button>
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
                {Object.keys(cities[0] ?? []).map((key) => (
                  <MenuItem
                    key={key}
                    value={key}
                    sx={{ textTransform: "capitalize" }}
                  >
                    {key as string}
                  </MenuItem>
                ))}
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

        {isFetching && !isFetchingNextPage && <Skeleton />}

        {!isFetching && cities && (
          <DataGrid
            data={filteredCities}
            headers={["id", "name", "description"] as (keyof City)[]}
            loadMore={fetchNextPage}
            hasMore={hasNextPage}
            onDeletion={handleOpenDeleteDialog}
            onRowClick={handleOpenUpdateDialog}
          />
        )}
      </Grid>

      <ConfirmDialog
        open={openDialog === DialogType.DELETE}
        title="delete city"
        msg={"⚠️ Are you sure you want to delete this city?"}
        onClose={handleCloseDialog}
        onConfirm={() => removeCity(selectedCity?.id ?? -1)}
      />

      <AddCityDialog
        open={openDialog === DialogType.ADD}
        onClose={handleCloseDialog}
      />

      {selectedCity && (
        <UpdateCityDialog
          city={selectedCity}
          open={openDialog === DialogType.UPDATE}
          onClose={handleCloseDialog}
        />
      )}
    </>
  );
};

export default CitiesManagement;
