import amz from "../../../assets/images/Amazon-512.webp";
import mic from "../../../assets/images/Microsoft_Logo_512px.png";
import tsla from "../../../assets/images/tsla-Photoroom.png";
import apl from "../../../assets/images/Apple_logo_grey.svg.webp";
import goog from "../../../assets/images/file.png";

export interface StockData {
  Symbol: string;
  LastRefreshed: string;
  TimeZone: string;
  img: string;
  DailyData: {
    Open: string; // Öppningspris
    High: string; // Högsta pris
    Low: string; // Lägsta pris
    Close: string; // Stängningspris
    Volume: string; // Volym
    Change: string; // Absolut förändring
    ChangePercentage: string; // Procentuell förändring
  };
}

export const stockData: StockData[] = [
  {
    Symbol: "TSLA",
    LastRefreshed: "2024-11-20",
    TimeZone: "US/Eastern",
    img: tsla,
    DailyData: {
      Open: "240.0000",
      High: "245.0000",
      Low: "238.0000",
      Close: "244.0000",
      Volume: "5100000",
      Change: "4.0000",
      ChangePercentage: "1.67%",
    },
  },
  {
    Symbol: "GOOGL",
    LastRefreshed: "2024-11-20",
    TimeZone: "US/Eastern",
    img: goog,
    DailyData: {
      Open: "1425.0000",
      High: "1450.0000",
      Low: "1412.5000",
      Close: "1445.0000",
      Volume: "3458900",
      Change: "20.0000",
      ChangePercentage: "-1.40%",
    },
  },
  {
    Symbol: "MSFT",
    LastRefreshed: "2024-11-20",
    TimeZone: "US/Eastern",
    img: mic,
    DailyData: {
      Open: "350.0000",
      High: "355.0000",
      Low: "348.5000",
      Close: "354.0000",
      Volume: "4201100",
      Change: "4.0000",
      ChangePercentage: "1.14%",
    },
  },
  {
    Symbol: "AMZN",
    LastRefreshed: "2024-11-20",
    TimeZone: "US/Eastern",
    img: amz,
    DailyData: {
      Open: "130.0000",
      High: "135.0000",
      Low: "128.5000",
      Close: "134.0000",
      Volume: "5102200",
      Change: "4.0000",
      ChangePercentage: "3.08%",
    },
  },
  {
    Symbol: "AAPL",
    LastRefreshed: "2024-11-20",
    TimeZone: "US/Eastern",
    img: apl,
    DailyData: {
      Open: "211.0000",
      High: "214.9600",
      Low: "209.7725",
      Close: "214.6000",
      Volume: "4562901",
      Change: "3.6000",
      ChangePercentage: "-1.71%",
    },
  },
];
