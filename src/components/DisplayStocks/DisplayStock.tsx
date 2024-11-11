import React, { useEffect, useState } from "react";
import { GetDisplayStocksApi } from "./GetStockAPI";
import "./displayStocksScss/_displayStocks.scss";

const StocksDisplay = () => {
  const [stocksElements, setStocksElements] = useState<
    JSX.Element | JSX.Element[]
  >([]);

  useEffect(() => {
    const fetchStocks = async () => {
      const elements = await GetDisplayStocksApi();
      setStocksElements(elements);
    };
    fetchStocks();
  }, []);

  return (
    <div>
      <h1>Stock Information</h1>
      <div>{stocksElements}</div>
    </div>
  );
};

export default StocksDisplay;
