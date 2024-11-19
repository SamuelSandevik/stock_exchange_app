import Chart from "../../Homepage/HomepageStockChart";
import { generateChartData } from "../../MockDataForAPI/Mockdata";
import "../exploreScss/_explorePage.scss";
import { useEffect, useState } from "react";


interface StockData {
  ticker: string;
  data: { x: number; y: number }[];
  percentage: string;
  closePrice: string;
  changePrice: string;
}

const DailyTopStockDiv: React.FC = () => {
  const [stocks, setStocks] = useState<StockData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Mockdata för dagliga topprankade aktier
    const generateTopStocks = () => {
      const topStocks = ["VOLV", "ERIC", "INVE B", "AAPL", "HM B"]; // Ditt urval av aktier

      const generatedStocks = topStocks.map((ticker) => {
        const { data, percentageChange, closePrice, changePrice } =
          generateChartData(30, 100);

        return {
          ticker,
          data,
          percentage:
            percentageChange > 0
              ? `+${percentageChange}%`
              : `${percentageChange}%`,
          closePrice: closePrice.toString(),
          changePrice: changePrice.toString(),
        };
      });

      setStocks(generatedStocks);
    };

    generateTopStocks();
    setLoading(false);
  }, []);

  return (
    <div className="stockContainer">
      <div className="stockDivTitle">
        <p>Daily Top Stocks</p>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : stocks.length > 0 ? (
        <div className="chart-super-container">
          {stocks.map((stock) => (
            <Chart
              key={stock.ticker}
              data={stock.data}
              ticker={stock.ticker}
              percentage={stock.percentage}
              closePrice={stock.closePrice}
              changePrice={stock.changePrice}
            />
          ))}
        </div>
      ) : (
        <p>No top stocks available.</p>
      )}
    </div>
  );
};

export default DailyTopStockDiv;
