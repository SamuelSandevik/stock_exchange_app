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

const marketData: MarketData = data as MarketData;

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

  if (!country) {
    return <p>Country not specified in the URL.</p>;
  }

  const normalizedCountry: string = country.toUpperCase();
  const countryData: StockData[] = marketData[normalizedCountry] || [];

  if (!countryData.length) {
    return <p>No data available for {country}</p>;
  }

  const handleBackClick = () => {
    navigate("/explore");
  };

  return (
    <>
      <button className="back-button" id="top" onClick={handleBackClick}>
        <i className="fa-solid fa-chevron-left"></i>&nbsp;&nbsp;&nbsp;Back
      </button>

      <p className="country-name">{normalizedCountry}</p>
      <div className="country-container">
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
            ? parseFloat(dailyData[previousDate]?.["4. close"] || "0")
            : null;
          const weekAgoClose = weekAgoDate
            ? parseFloat(dailyData[weekAgoDate]?.["4. close"] || "0")
            : null;

          const dailyChange = previousClose
            ? calculatePercentageChange(latestClose, previousClose)
            : "N/A";
          const weeklyChange = weekAgoClose
            ? calculatePercentageChange(latestClose, weekAgoClose)
            : "N/A";

          const latestStats = dailyData[latestDate];
          const dailyChangeClass =
            !isNaN(parseFloat(dailyChange)) && parseFloat(dailyChange) > 0
              ? "positive"
              : "negative";
          const weeklyChangeClass =
            !isNaN(parseFloat(weeklyChange)) && parseFloat(weeklyChange) > 0
              ? "positive"
              : "negative";

          return (
            <div
              key={index}
              onClick={() => {
                navigate("/StockPage", {
                  state: { search: company["Meta Data"]["2. Symbol"] },
                });
              }}
              className="company-card"
            >
              <div className="company-header">
                <p className="last-refreshed">Last Refreshed: {latestDate}</p>
                <p className="symbol">{company["Meta Data"]["2. Symbol"]}</p>
              </div>
              <div className="stats">
                <div className="stat">
                  <p className="label">Daily Change</p>
                  <p className={`value ${dailyChangeClass}`}>{dailyChange}</p>
                </div>
                <div className="stat">
                  <p className="label">Weekly Change</p>
                  <p className={`value ${weeklyChangeClass}`}>{weeklyChange}</p>
                </div>
                <div className="stat">
                  <p className="label">Volume</p>
                  <p className="value volume">{latestStats["5. volume"]}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CountryMarketPage;
