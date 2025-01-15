export interface StockMarket {
  country: string;
  exchangeName: string;
  performance: string;
  time: string;
}

export const stockMarkets: StockMarket[] = [
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
