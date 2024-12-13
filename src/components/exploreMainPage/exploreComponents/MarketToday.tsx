import React from "react";
import "../mainpageScss/_marketToday.scss";

const MarketToday = () => {
  const stockMarkets = [
    {
      country: "Sweden",
      exchangeName: "OMX Stockholm",
      performance: "+0.85%",
      time: "2024-12-03 10:00",
    },
    {
      country: "USA",
      exchangeName: "NASDAQ",
      performance: "-1.23%",
      time: "2024-12-02 16:00",
    },
    {
      country: "Japan",
      exchangeName: "Nikkei 225",
      performance: "+0.45%",
      time: "2024-12-03 09:00",
    },
    {
      country: "Germany",
      exchangeName: "DAX",
      performance: "+0.32%",
      time: "2024-12-03 11:00",
    },
    {
      country: "United Kingdom",
      exchangeName: "FTSE 100",
      performance: "-0.67%",
      time: "2024-12-03 10:30",
    },
  ];

  return (
    <div className="market-container">
      <p>Market Today</p>
      <div className="market-scroll">
        {stockMarkets.map(({ exchangeName, performance, time }) => (
          <div className="market-card" key={exchangeName}>
            <div className="name-performance">
              <p>{exchangeName}</p>
              <p>{performance}</p>
            </div>
            <p>{time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketToday;
