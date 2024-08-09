import DeleteIcon from "@mui/icons-material/Delete";
import {
  Grid,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { FC, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { BarLoader } from "react-spinners";
import styles from "./styles.module.css";
import { DataGridProps, SortConfigState } from "./types";
import { sortData } from "./utils";
import theme from "src/style/travelSphereTheme";

const Loader: FC = () => {
  return (
    <Stack width="100%" p={1}>
      <BarLoader width="100%" color={theme.palette.secondary.main} />
    </Stack>
  );
};

const DataGrid = <T,>({
  data,
  headers,
  loadMore,
  hasMore,
  onDeletion,
  onRowClick,
}: DataGridProps<T>) => {
  const [sortConfig, setSortConfig] = useState<SortConfigState<T> | null>(null);

  const sortedData = sortData(data, sortConfig);

  const handleSort = (header: keyof T) => {
    setSortConfig((prev) =>
      prev?.key === header
        ? { key: header, direction: prev.direction === "asc" ? "desc" : "asc" }
        : { key: header, direction: "asc" }
    );
  };

  const handleDelete =
    (item: T) => (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      onDeletion(item);
    };

  const handleRowClick = (item: T) => () => {
    onRowClick?.(item);
  };

  return (
    <Grid container justifyContent="center" rowGap={3}>
      <TableContainer component={Paper}>
        <InfiniteScroll
          dataLength={data.length}
          next={loadMore}
          hasMore={hasMore}
          loader={data.length >= 10 && <Loader />}
          scrollableTarget="scrollableDiv"
          className={styles.niceScroll}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {[...headers, "action"].map((header) => (
                  <TableCell
                    key={header as string}
                    className={styles.tableHeaderCell}
                    sx={{
                      "&:last-child .MuiTableSortLabel-icon": {
                        display: "none",
                      },
                    }}
                  >
                    <TableSortLabel
                      active={sortConfig?.key === header}
                      direction={
                        sortConfig?.key === header
                          ? sortConfig.direction
                          : "asc"
                      }
                      onClick={() => handleSort(header as keyof T)}
                    >
                      {header as string}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {sortedData.map((item, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  hover
                  className={styles.tableRow}
                  onClick={handleRowClick(item)}
                >
                  {headers.map((header) => (
                    <TableCell
                      key={header as string}
                      scope="row"
                      sx={{ maxWidth: 300 }}
                    >
                      {item[header] as React.ReactNode}
                    </TableCell>
                  ))}
                  <TableCell align="center">
                    <IconButton
                      aria-label="delete"
                      onClick={handleDelete(item)}
                      color="error"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </InfiniteScroll>
      </TableContainer>
    </Grid>
  );
};

export default DataGrid;
