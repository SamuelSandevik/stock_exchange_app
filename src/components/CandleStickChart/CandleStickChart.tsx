import ReactApexChart from "react-apexcharts";
import { CandlestickData } from "./FormatCandleStick";
import { ApexOptions } from "apexcharts";

interface ApexChartProps {
    data: CandlestickData[];
    options: ApexOptions;
}

const ApexChart = ({data, options}: ApexChartProps) => {
  return (
    <div>
      {data.length > 0 ? (
        <ReactApexChart
          series={[
            {
              data: data,
            },
          ]}
          options={options}
          type="candlestick"
          height={350}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ApexChart;
