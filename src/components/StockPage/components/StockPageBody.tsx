import "../scss/_stockPage.scss";
import sendTicker from "./SaveTicker";
import React, { useState } from "react";

interface StockPageProps {
  high: number;
  low: number;
  ticker: string;
  onChangeChartType: (type: "line" | "candlestick") => void;
}

const stockPageBody: React.FC<StockPageProps> = ({
  high,
  low,
  ticker,
  onChangeChartType,
}) => {
  const selectionMenu = [
    { text: "Overview" },
    { text: "News" },
    { text: "Related" },
  ];

  return (
    <div className="stock-page-body">
      <div className="change-chart-container">
        <button onClick={() => onChangeChartType("line")}>Line Chart</button>
        <button onClick={() => onChangeChartType("candlestick")}>
          Candlestick Chart
        </button>
      </div>

      <div className="save-stock-container">
        <button onClick={() => sendTicker(ticker)}>Save Stock</button>
      </div>

      <div className="selection-menu">
        {selectionMenu.map((item, index) => (
          <p key={index}>{item.text}</p>
        ))}
      </div>

      {/* <div className="high-low-container">
        <p>High</p>
        {high}
        <p>Low</p>
        {low}
      </div> */}
    </div>
  );
};

export default stockPageBody;
