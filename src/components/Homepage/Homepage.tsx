import { useNavigate } from "react-router-dom";
import Chart from "./HomepageStockChart";
import { useEffect, useState } from "react";
import { generateChartData } from "../MockDataForAPI/Mockdata";
import LineChartHomepage from "./LineChart/LineChartHomepage";
import { exampleData } from "./LineChart/exampleData";
import HeaderPage from "../HeaderPage/HeaderPage";

interface StockData {
  ticker: string;
  data: { x: number; y: number }[];
  percentage: string;
  closePrice: string;
  changePrice: string;
}

const Homepage = () => {
  // const navigate = useNavigate();
  const [stocks, setStocks] = useState<StockData[]>([]);

  useEffect(() => {
    // Generera data för flera aktier
    const generatedStocks = ["TSLA", "NVDA", "AMZN", "GOOG", "AAPL"].map(
      (ticker) => {
        const { data, percentageChange, closePrice, changePrice } =
          generateChartData(30, 100);

        if (0 < percentageChange) {
          let newPercentage = "+" + percentageChange;
          return {
            ticker,
            data,
            percentage: newPercentage,
            closePrice: closePrice.toString(),
            changePrice: changePrice.toString(),
          };
        } else {
          let newPercentage = "" + percentageChange;
          return {
            ticker,
            data,
            percentage: newPercentage,
            closePrice: closePrice.toString(),
            changePrice: changePrice.toString(),
          };
        }
      }
    );

    setStocks(generatedStocks);
  }, []);

  return (
    <div>
      <HeaderPage />
      <div className="header-container">
        <LineChartHomepage exampleData={exampleData} />
      </div>
      <div className="chart-super-container">
        {stocks.map((stock) => (
          <Chart
            key={stock.ticker}
            data={stock.data}
            ticker={stock.ticker}
            percentage={`${stock.percentage}%`}
            closePrice={stock.closePrice}
            changePrice={stock.changePrice}
          />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
