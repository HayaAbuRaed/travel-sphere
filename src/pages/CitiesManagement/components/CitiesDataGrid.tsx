import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { FC } from "react";
import useGetCities from "../hooks/useGetCities";
import { getTableRows } from "../utils";
import { City } from "../API/types";
import styles from "../styles.module.css";

document.title = "Cities Management";

const CitiesDataGrid: FC = () => {
  const { cities, isFetching } = useGetCities();

  if (isFetching) return <h1>Loading...</h1>;

  if (!cities) return null;

  const tableRows = getTableRows(cities);

  const headers: (keyof City)[] = ["id", "name", "description"];

  return (
    <Grid container justifyContent="center">
      <TableContainer component={Paper} className={styles.tableContainer}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {headers.map((header) => (
                <TableCell key={header} className={styles.tableHeaderCell}>
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableRows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                className={styles.tableRow}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.description}
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
