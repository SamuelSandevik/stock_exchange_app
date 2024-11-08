import axios from "axios";
import { IDisplayStock } from "./IDisplayStock";

const GetDisplayStocksApi = async () => {
  const stocks = ["TSLA", "GOOG"];
  try {
    const results = stocks.map((stock) => {
      const results = axios.get<IDisplayStock>(
        `https://api.polygon.io/v2/aggs/ticker/${stock}/range/20/minute/2024-10-28/2024-10-31?adjusted=true&sort=asc&apiKey=qsYxsMPmpFENUUFxpzsmj9GzloEpL3CN`
      );
      return results;
    });

    const values = await Promise.all(results);

    const stockElements = values.map((response, index) => {
      const stockData = response.data;
      return (
        <div className="stock" key={index}>
          <h2>{stockData.ticker}</h2>
          <p>Open: {stockData.o}</p>
          <p>Close: {stockData.c}</p>
          <p>High: {stockData.h}</p>
          <p>Low: {stockData.l}</p>
        </div>
      );
    });

    return stockElements;
  } catch (error) {
    return [];
  }
};

export { GetDisplayStocksApi };
