import ApexChart from "../../CandleStickChart/CandleStickChart";
import { CandlestickData } from "../../CandleStickChart/FormatCandleStick";
import StockPageLineChart from "./StockPageLineChart";


interface ChartSwitcherProps {
  chartType: "line" | "candlestick";
  lineData: { x: number; y: number }[];
  candleData: CandlestickData[];
}

const ChartSwitcher: React.FC<ChartSwitcherProps> = ({ chartType, lineData, candleData }) => (
  <div>
    {chartType === "line" ? (
      <StockPageLineChart exampleData={lineData} />
    ) : (
      <ApexChart
        data={candleData}
        options={{
          chart: { type: "candlestick" },
          title: { text: "Candlestick Chart", align: "left" },
          xaxis: { type: "datetime" },
        }}
      />
    )}
  </div>
);

export default ChartSwitcher;
