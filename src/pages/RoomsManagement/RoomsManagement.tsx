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
import { useState } from "react";
import DataGrid from "src/containers/DataGrid";
import ConfirmDialog from "src/containers/Dialogs/ConfirmDialog";
import travelSphereTheme from "src/style/travelSphereTheme";
import { DialogType } from "./constants";
import useDeleteRoom from "./hooks/useDeleteRoom";
import useGetHotelRooms from "./hooks/useGetHotelRooms";
import { FilterConfigState, RoomRow } from "./types";
import { filterByKey, mapRoomsToTableData } from "./utils";
import AddIcon from "@mui/icons-material/Add";
import AddRoomDialog from "./components/AddRoomDialog";
import Skeleton from "src/containers/DataGrid/Skeleton";

const RoomsManagement = () => {
  const [filterConfig, setFilterConfig] = useState<FilterConfigState>({
    key: "type",
    value: "",
  });

  const [openDialog, setOpenDialog] = useState<DialogType | null>(null);

  const [selectedRoom, setSelectedRoom] = useState<RoomRow | null>(null);

  const { rooms, isFetching } = useGetHotelRooms();

  const { removeRoom } = useDeleteRoom();

  const roomsData = mapRoomsToTableData(rooms ?? []);

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

  const handleOpenDeleteDialog = (room: RoomRow) => {
    setSelectedRoom(room);
    setOpenDialog(DialogType.DELETE);
  };

  const handleOpenAddDialog = () => setOpenDialog(DialogType.ADD);

  const handleCloseDialog = () => setOpenDialog(null);

  return (
    <>
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
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<AddIcon />}
              onClick={handleOpenAddDialog}
              sx={{ height: 56 }}
            >
              Add Room
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
                {Object.keys(roomsData[0] ?? []).map((key) => (
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

        {isFetching && <Skeleton />}

        {!isFetching && rooms && (
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
            onDeletion={handleOpenDeleteDialog}
          />
        )}
      </Grid>

      <AddRoomDialog
        open={openDialog === DialogType.ADD}
        onClose={handleCloseDialog}
      />

      <ConfirmDialog
        open={openDialog === DialogType.DELETE}
        title="remove room"
        msg={"⚠️ Are you sure you want to remove this room?"}
        onClose={handleCloseDialog}
        onConfirm={() => removeRoom(selectedRoom?.id ?? -1)}
      />
    </>
  );
};

export default RoomsManagement;
