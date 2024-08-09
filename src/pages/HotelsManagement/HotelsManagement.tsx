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
import DataGrid from "src/containers/DataGrid";
import useGetHotels from "./hooks/useGetHotels";
import { FilterConfigState, HotelData } from "./types";
import { filterByKey, mapHotelsToTableData } from "./utils";
import { Hotel } from "./API/types";
import ConfirmDialog from "src/containers/Dialogs/ConfirmDialog";
import { DialogType } from "./constants";
import useDeleteHotel from "./hooks/useDeleteHotel";
import AddIcon from "@mui/icons-material/Add";
import AddHotelDialog from "./components/AddHotelDialog";
import UpdateHotelDialog from "./components/UpdateHotelDialog";

const HotelsManagement: FC = () => {
  const [filterConfig, setFilterConfig] = useState<FilterConfigState>({
    key: "name",
    value: "",
  });

  const [openDialog, setOpenDialog] = useState<DialogType | null>(null);

  const [selectedHotel, setSelectedHotel] = useState<HotelData | null>(null);

  const { hotels, isFetching, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetHotels();

  const { removeHotel } = useDeleteHotel();

  if (isFetching && !isFetchingNextPage) return <h1>Loading...</h1>;

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
  const handleOpenDialog = (dialogType: DialogType) =>
    setOpenDialog(dialogType);

  const handleOpenDeleteDialog = (hotel: HotelData) => {
    setSelectedHotel(hotel);
    setTimeout(() => {
      setOpenDialog(DialogType.DELETE);
    });
  };

  const handleRowClick = (hotel: HotelData) => {
    setSelectedHotel(hotel);
    setTimeout(() => {
      setOpenDialog(DialogType.UPDATE);
    });
  };

  const handleCloseDialog = () => setOpenDialog(null);

  console.log("selectedHotel", selectedHotel);
  console.log("openDialog", openDialog);

  return (
    <>
      <Grid container px={{ xs: 3.5, md: 7 }} py={4} rowGap={3}>
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
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<AddIcon />}
              onClick={() => handleOpenDialog(DialogType.ADD)}
              sx={{ height: 56 }}
            >
              Add Hotel
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

        <DataGrid
          data={hotelsData}
          headers={headers}
          loadMore={fetchNextPage}
          hasMore={hasNextPage}
          onDeletion={handleOpenDeleteDialog}
          onRowClick={handleRowClick}
        />
      </Grid>

      <ConfirmDialog
        open={openDialog === DialogType.DELETE}
        title="delete Hotel"
        msg={"⚠️ Are you sure you want to delete this hotel?"}
        onClose={handleCloseDialog}
        onConfirm={() => removeHotel(selectedHotel?.id ?? -1)}
      />

      <AddHotelDialog
        open={openDialog === DialogType.ADD}
        onClose={handleCloseDialog}
      />

      {selectedHotel && (
        <UpdateHotelDialog
          open={openDialog === DialogType.UPDATE}
          onClose={handleCloseDialog}
          hotel={selectedHotel}
        />
      )}
    </>
  );
};

export default HotelsManagement;
