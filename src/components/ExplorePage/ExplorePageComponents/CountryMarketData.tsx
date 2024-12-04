import { useNavigate, useParams } from "react-router-dom";
import data from "../ExplorePageComponents/mockMarketData.json";

type StockData = {
  "Meta Data": {
    "1. Information": string;
    "2. Symbol": string;
    "3. Last Refreshed": string;
    "4. Output Size": string;
    "5. Time Zone": string;
  };
  "Time Series (Daily)": {
    [date: string]: {
      "1. open": string;
      "2. high": string;
      "3. low": string;
      "4. close": string;
      "5. volume": string;
    };
  };
};

type MarketData = {
  [country: string]: StockData[];
};

const marketData: any = data;

const calculatePercentageChange = (
  latest: number,
  previous: number
): string => {
  if (previous === 0) return "N/A";
  return (((latest - previous) / previous) * 100).toFixed(2) + "%";
};

const CountryMarketPage: React.FC = () => {
  const navigate = useNavigate();
  const { country } = useParams<{ country: string }>();
  const normalizedCountry: string | undefined = country?.toUpperCase();
  const countryData: StockData[] =
    marketData[normalizedCountry as keyof MarketData];

  if (!countryData || countryData.length === 0) {
    return <p>No data available for {country}</p>;
  }

  const handleBackClick = () => {
    navigate("/explore");
  };

  return (
    <div className="country-container">
      <button className="back-button" onClick={handleBackClick}>
        <i className="fa-solid fa-chevron-left"></i>
      </button>

      <p className="country-name">{normalizedCountry}</p>

      {countryData.map((company, index) => {
        const dailyData = company["Time Series (Daily)"];
        const dates = Object.keys(dailyData).sort().reverse();
        const latestDate = dates[0];
        const previousDate = dates[1] || null;
        const weekAgoDate = dates.find((date) => {
          const diff =
            new Date(latestDate).getTime() - new Date(date).getTime();
          return diff >= 7 * 24 * 60 * 60 * 1000;
        });

        const latestClose = parseFloat(dailyData[latestDate]["4. close"]);
        const previousClose = previousDate
          ? parseFloat(dailyData[previousDate]["4. close"])
          : null;
        const weekAgoClose = weekAgoDate
          ? parseFloat(dailyData[weekAgoDate]["4. close"])
          : null;

        const dailyChange = previousClose
          ? calculatePercentageChange(latestClose, previousClose)
          : "N/A";
        const weeklyChange = weekAgoClose
          ? calculatePercentageChange(latestClose, weekAgoClose)
          : "N/A";

        const latestStats = dailyData[latestDate];
        const dailyChangeNumber = isNaN(parseFloat(dailyChange))
          ? 0
          : parseFloat(dailyChange);
        const weeklyChangeNumber = isNaN(parseFloat(weeklyChange))
          ? 0
          : parseFloat(weeklyChange);

        const dailyChangeClass =
          dailyChangeNumber > 0 ? "positive" : "negative";
        const weeklyChangeClass =
          weeklyChangeNumber > 0 ? "positive" : "negative";

        return (
          <div key={index} className="company-container">
            <div className="header-container">
              <p className="last-refreshed">Last Refreshed: {latestDate}</p>
              <p className="symbol">{company["Meta Data"]["2. Symbol"]}</p>
            </div>

            <div className="key-stats">
              <div className="daily-change">
                <p className="label">Daily Change</p>
                <p className={`change-value ${dailyChangeClass}`}>
                  {dailyChange}
                </p>
              </div>
              <div className="weekly-change">
                <p className="label">Weekly Change</p>
                <p className={`change-value ${weeklyChangeClass}`}>
                  {weeklyChange}
                </p>
              </div>
              <div className="volume">
                <p className="label">Volume</p>
                <p className="volume-value">{latestStats["5. volume"]}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CountryMarketPage;
