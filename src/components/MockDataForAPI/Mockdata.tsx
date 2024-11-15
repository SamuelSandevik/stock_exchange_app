import { AggregateResult, Aggregates, DailyOpenClose } from "./MockdataInterface";

// List of sample tickers for generating multiple entries
const tickers = ["AAPL", "GOOGL", "MSFT", "AMZN", "TSLA", "NFLX", "NVDA", "META", "BABA", "INTC"];

// Helper function to get a random date in YYYY-MM-DD format
const getRandomDateString = (start: Date, end: Date): string => {
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date.toISOString().split("T")[0];
};

const getRandomNumber = (min: number, max: number) => {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
  };

// Mock function for Daily Open/Close using specified parameters
export const generateMockDailyOpenCloseData = (count: number): DailyOpenClose[] => {
  const data: DailyOpenClose[] = [];
  for (let i = 0; i < count; i++) {
    const stocksTicker = tickers[i % tickers.length];
    const date = getRandomDateString(new Date(2022, 0, 1), new Date(2023, 0, 1));
    const adjusted = true;

    data.push({
      afterHours: getRandomNumber(300, 330),
      close: getRandomNumber(310, 340),
      from: date,
      high: getRandomNumber(320, 350),
      low: getRandomNumber(300, 320),
      open: getRandomNumber(305, 335),
      preMarket: getRandomNumber(300, 330),
      status: "OK",
      symbol: stocksTicker,
      volume: Math.floor(getRandomNumber(20000000, 30000000)),
    });
  }
  return data;
};

//Mock function for apex charts data
const getRandomVariation = (min: number, max: number) => {
  return (Math.random() * (max - min) + min);
};

// Funktion för att generera realistisk data och beräkna close-pris och procentförändring
export const generateChartData = (count: number, startPrice: number = 100) => {
  const data = [];
  let currentPrice = startPrice;

  for (let i = 0; i < count; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i); // Skapa en ny dag för varje datapunkt

    // Generera en liten förändring i priset från den senaste punkten
    const dailyChange = getRandomVariation(-2, 2); // Små variationer
    currentPrice += dailyChange;
    if (currentPrice < 0) currentPrice = 0; // Pris ska aldrig gå under 0

    data.push({
      x: date.getTime(), // Tidsstämpel
      y: parseFloat(currentPrice.toFixed(2)), // Pris avrundat till två decimaler
    });
  }

  const closePrice = currentPrice; // Sista priset i sekvensen som "close"
  const percentageChange = ((closePrice - startPrice) / startPrice) * 100;
  const changePrice = (closePrice - startPrice);

  return {
    data,
    closePrice: parseFloat(closePrice.toFixed(2)),
    percentageChange: parseFloat(percentageChange.toFixed(2)),
    changePrice,
  };
};


// Mock function for Aggregates using specified parameters
export const generateMockAggregatesData = (
  stocksTicker: string,
  multiplier: number,
  timespan: string,
  from: string,
  to: string,
  adjusted: boolean,
  sort: "asc" | "desc" = "asc",
  count: number
): Aggregates[] => {
  const aggregatesData: Aggregates[] = [];
  
  for (let i = 0; i < count; i++) {
    const results: AggregateResult[] = [];
    const startDate = new Date(from).getTime();
    const endDate = new Date(to).getTime();
    const interval = (endDate - startDate) / 10;

    for (let j = 0; j < 10; j++) {
      const open = getRandomNumber(70, 80);
      const close = getRandomNumber(70, 80);
      const timestamp = sort === "asc" ? startDate + j * interval : endDate - j * interval;

      results.push({
        c: close,
        h: getRandomNumber(close, close + 1),
        l: getRandomNumber(open - 1, open),
        n: 1,
        o: open,
        t: timestamp,
        v: Math.floor(getRandomNumber(100000000, 150000000)),
        vw: getRandomNumber(74, 76),
      });
    }

    aggregatesData.push({
      adjusted: adjusted,
      next_url: `https://api.polygon.io/v2/aggs/ticker/${stocksTicker}/range/${multiplier}/${timespan}/${from}/${to}?cursor=bGltaXQ9MiZzb3J0PWFzYw`,
      queryCount: results.length,
      request_id: `req_${i}`,
      results: results,
      resultsCount: results.length,
      status: "OK",
      ticker: stocksTicker
    });
  }
  return aggregatesData;
};
