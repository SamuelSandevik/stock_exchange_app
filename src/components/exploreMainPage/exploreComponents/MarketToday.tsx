import React from "react";
import "../mainpageScss/_marketToday.scss";
import { stockMarkets } from "../data/marketData";

const MarketToday = () => {
  return (
    <div className="market-container">
      <div className="market-text-container">
        <p className="market-header">Market Today</p>
        <p className="market-undertext">The global markets today</p>
      </div>
      <div className="market-scroll">
        {stockMarkets.map((s, i) => (
          <div className="market-card" key={i}>
            <div className="name-performance">
              <p>{s.exchangeName}</p>
              <p
                className={
                  s.performance.includes("-") ? "negative" : "positive"
                }
              >
                {s.performance}
              </p>
            </div>
            <p>{s.time}</p>
          </div>
        ))}
      </div>
      <div className="line-father">
        <div className="line"></div>
      </div>
    </div>
  );
};

export default MarketToday;
