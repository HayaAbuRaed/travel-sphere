import { FC } from "react";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { areaChartOptions } from "../constants";
import { AreaChartProps } from "../types";
import { getXAxisCategories } from "../utils";

const AreaChart: FC<AreaChartProps> = ({ slot }) => {
  const theme = useTheme();

  const { primary, secondary } = theme.palette.text;
  const line = theme.palette.divider;

  const [options, setOptions] = useState<ApexOptions>(areaChartOptions);

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      colors: [theme.palette.primary.main, theme.palette.secondary.main],
      xaxis: {
        categories: getXAxisCategories(slot),
        labels: {
          style: {
            colors: [],
          },
        },
        axisBorder: {
          show: true,
          color: line,
        },
        tickAmount: slot === "month" ? 12 : 7,
      },
    }));
  }, [primary, secondary, line, theme, slot]);

  const [series, setSeries] = useState([
    {
      name: "Page Views",
      data: [0, 74, 16, 103, 36, 198, 124],
    },
    {
      name: "Sessions",
      data: [0, 32, 2, 44, 12, 93, 55],
    },
  ]);

  useEffect(() => {
    setSeries([
      {
        name: "Page Views",
        data:
          slot === "month"
            ? [76, 85, 101, 98, 87, 105, 91, 114, 94, 86, 115, 35]
            : [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "Sessions",
        data:
          slot === "month"
            ? [110, 60, 150, 35, 60, 36, 26, 45, 65, 52, 53, 41]
            : [11, 32, 45, 32, 34, 52, 41],
      },
    ]);
  }, [slot]);

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="area"
      height={400}
    />
  );
};

export default AreaChart;
