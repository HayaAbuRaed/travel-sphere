import { useState } from "react";
import { DataGridProps, SortConfigState } from "./types";
import { sortData } from "./utils";
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import styles from "./styles.module.css";

const DataGrid = <T,>({ data, headers }: DataGridProps<T>) => {
  const [sortConfig, setSortConfig] = useState<SortConfigState<T> | null>(null);

  const sortedData = sortData(data, sortConfig);

  const handleSort = (header: keyof T) => {
    if (sortConfig?.key === header) {
      setSortConfig({
        key: header,
        direction: sortConfig.direction === "asc" ? "desc" : "asc",
      });
    } else {
      setSortConfig({ key: header, direction: "asc" });
    }
  };

  return (
    <Grid container justifyContent="center">
      <TableContainer component={Paper} className={styles.tableContainer}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {headers.map((header) => (
                <TableCell
                  key={header as string}
                  className={styles.tableHeaderCell}
                >
                  <TableSortLabel
                    active={sortConfig?.key === header}
                    direction={
                      sortConfig?.key === header ? sortConfig.direction : "asc"
                    }
                    onClick={() => handleSort(header)}
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
                className={styles.tableRow}
              >
                {headers.map((header) => (
                  <TableCell key={header as string} scope="row">
                    {item[header] as React.ReactNode}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default DataGrid;
