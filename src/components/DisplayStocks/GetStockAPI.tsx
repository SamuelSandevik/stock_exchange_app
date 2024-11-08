import axios from "axios";
import { IDisplayStock } from "./IDisplayStock";

const GetDisplayStocksApi = async () => {
  const stocks = ["TSLA", "GOOG"];
  try {
    const results = stocks.map((stock) => {
      const results = axios.get<IDisplayStock>(
        `https://api.polygon.io/v2/aggs/ticker/${stock}/range/20/minute/2024-11-01/2024-11-05?adjusted=true&sort=asc&apiKey=qsYxsMPmpFENUUFxpzsmj9GzloEpL3CN`
      );
      return results;
    });

    const values = await Promise.all(results);

    const stockElements = values.map((response, index) => {
      const stockData = response.data;
      const results = stockData.results;

      const openingPrice = results[0].o;
      const latestClosePrice = results[results.length - 1].c;
      const percentageChange =
        ((latestClosePrice - openingPrice) / openingPrice) * 100;

      return (
        <div className="stock" key={index}>
          <div className="left stockCard">
            <p>{stockData.ticker}</p>
          </div>
          <div className="right stockCard">
            <p>$ {stockData.results[0].c}</p>
            <p
              className={`procent ${
                percentageChange < 0 ? "negativePercentage" : "percentage"
              }`}
            >
              {percentageChange.toFixed(3)}%
            </p>
          </div>
        </div>
      );
    });

    return stockElements.filter((el) => el !== null);
  } catch (error) {
    return [];
  }
};

export { GetDisplayStocksApi };
