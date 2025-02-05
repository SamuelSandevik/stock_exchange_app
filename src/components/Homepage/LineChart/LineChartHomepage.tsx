import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import "./LineChartScss/_linechart.scss";

interface ChartProps {
  exampleData: { x: number; y: number }[];

}

const LineChartHomepage: React.FC<ChartProps> = ({ exampleData }) => {
  const options: ApexOptions = {
    chart: {
      type: "line",
      toolbar: { show: false },
      zoom: { enabled: false },
      animations: { enabled: true },

    },
    stroke: {
      colors: ["#fff"], // Svart linje
      width: 2,
    },
    yaxis: {
      show: true, // Dölj y-axeln
      labels: { show: true }, // Dölj y-axelns etiketter
      axisTicks: { show: false }, // Dölj tickmarks
    },
    xaxis: {
      type: "datetime",
      labels: { show: true }, // Dölj x-axelns etiketter
      axisBorder: { show: true }, // Dölj x-axelns gräns
      axisTicks: { show: false }, // Dölj tickmarks på x-axeln

    },
    grid: {
      show: false, // Dölj bakgrundslinjer
    },
    tooltip: { enabled: false }, // Inaktivera tooltip om du inte vill ha den
  };

  const series = [
    {
      name: "Stock Data",
      data: exampleData,
    },
  ];

  return (
    <div className="linechart-container">
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height="100%"
      />
    </div>
  );
};

export default LineChartHomepage;
