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
import { FC } from "react";
import { City } from "../API/types";
import styles from "../styles.module.css";
import { CitiesDataGridProps } from "../types";

const CitiesDataGrid: FC<CitiesDataGridProps> = ({
  cities,
  sortConfig,
  handleSort,
}) => {
  const headers: (keyof City)[] = ["id", "name", "description"];

  return (
    <Grid container justifyContent="center">
      <TableContainer component={Paper} className={styles.tableContainer}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {headers.map((header) => (
                <TableCell key={header} className={styles.tableHeaderCell}>
                  <TableSortLabel
                    active={sortConfig?.key === header}
                    direction={
                      sortConfig?.key === header ? sortConfig.direction : "asc"
                    }
                    onClick={() => handleSort(header)}
                  >
                    {header}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {cities.map((city) => (
              <TableRow
                key={city.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                className={styles.tableRow}
              >
                <TableCell component="th" scope="row">
                  {city.id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {city.name}
                </TableCell>
                <TableCell component="th" scope="row">
                  {city.description}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default CitiesDataGrid;
