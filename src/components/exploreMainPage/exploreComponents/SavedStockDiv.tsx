import "../mainpageScss/_savedStock.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { generateChartData } from "../../MockDataForAPI/Mockdata";
import Chart from "../../Homepage/HomepageStockChart";
import { useNavigate } from "react-router-dom";
import { log } from "console";

interface StockData {
  ticker: string;
  data: { x: number; y: number }[];
  percentage: string;
  closePrice: string;
  changePrice: string;
}

const SavedStockDiv: React.FC = () => {
  const [stocks, setStocks] = useState<StockData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchSavedStocks = async () => {
      try {
        // Hämta sparade tickers från backend
        const response = await axios.get("http://localhost:3000/savedTickers", {
          withCredentials: true,
        });

        const savedTickers: string[] = response.data.savedStocks;

        // Generera data för varje sparad ticker
        const generatedStocks = savedTickers.map((ticker) => {
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
      } catch (error) {
        console.error("Error fetching saved stocks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSavedStocks();
  }, []);
  const goToStock = (stock: string) => {
    navigate("/stockPage", { state: { search: stock } });
    console.log(stock);
  };

  return (
    <div className="stockContainer">
      <div className="stockDivTitle">
        <p>Saved Stocks</p>
        <p className="saved-undertext">Your saved tickets</p>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : stocks.length > 0 ? (
        <div className="chart-super-container">
          {stocks.map((stock) => (
            <div
              className="clickableDiv"
              onClick={() => goToStock(stock.ticker)}
            >
              <Chart
                key={stock.ticker}
                data={stock.data}
                ticker={stock.ticker}
                percentage={stock.percentage}
                closePrice={stock.closePrice}
                changePrice={stock.changePrice}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="empty">You have no saved stocks.</p>
      )}
      <div className="line-father">
        <div className="line"></div>
      </div>
    </div>
  );
};

export default SavedStockDiv;
