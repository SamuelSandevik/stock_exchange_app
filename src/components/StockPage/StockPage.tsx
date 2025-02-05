import { useLocation } from "react-router-dom";
import GetStockApi from "../StockSearch/GetStockApi";
import { useEffect, useState } from "react";
import StockPageHeader from "./components/StockPageHeader";
import FormatStock, {
  CandlestickData,
} from "../CandleStickChart/FormatCandleStick";
import StockPageBody from "./components/StockPageBody";
import AAPLStockChart from "./components/HighChartTest";

const StockPage = () => {
  const location = useLocation();
  const searchTerm = location.state?.search || "AAPL";
  const [, setChartData] = useState<{ x: number; y: number }[]>([]);
  const [, setCandleData] = useState<CandlestickData[]>([]);
  const [high, setHigh] = useState(0);
  const [low, setLow] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm) {
        const response = await GetStockApi(searchTerm);

        const lineData = response.map((dataPoint: any) => ({
          x: new Date(dataPoint.t).getTime(),
          y: dataPoint.c,
        }));

        const candleData = FormatStock(response);

        const highValue = Math.max(
          ...response.map((dataPoint: any) => dataPoint.h)
        );
        const lowValue = Math.min(
          ...response.map((dataPoint: any) => dataPoint.l)
        );

        setChartData(lineData);
        setCandleData(candleData);
        setHigh(highValue);
        setLow(lowValue);
      }
    };

    fetchData();
  }, [searchTerm]);

  return (
    <div className="stockpage-container" style={{ marginTop: "5rem" }}>
      <div id="top"></div>
      <StockPageHeader high={high} low={low} ticker={searchTerm} />
      <AAPLStockChart />
      <StockPageBody high={high} low={low} ticker={searchTerm} />
    </div>
  );
};

export default StockPage;
