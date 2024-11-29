import { useNavigate, useParams } from "react-router-dom";
import data from "../ExplorePageComponents/mockMarketData.json"; // Mockdatafilen från tidigare steg

type MarketData = {
  [key: string]: {
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
};

const marketData: MarketData = data;

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
  const normalizedCountry = country?.toUpperCase();
  const countryData = marketData[normalizedCountry as keyof MarketData];

  if (!countryData) {
    return <p>No data available for {country}</p>;
  }

  const dailyData = countryData["Time Series (Daily)"];
  const dates = Object.keys(dailyData).sort().reverse(); // Sortera i fallande ordning (nyaste först)
  const latestDate = dates[0];
  const previousDate = dates[1] || null;
  const weekAgoDate = dates.find((date) => {
    const diff = new Date(latestDate).getTime() - new Date(date).getTime();
    return diff >= 7 * 24 * 60 * 60 * 1000; // 7 dagar i millisekunder
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

  const dailyChangeClass = dailyChangeNumber > 0 ? "positive" : "negative";
  const weeklyChangeClass = weeklyChangeNumber > 0 ? "positive" : "negative";

  const handleBackClick = () => {
    navigate("/explore");
  };

  const renderRepeatedSection = (times: number) => {
    const elements = [];
    for (let i = 0; i < times; i++) {
      elements.push(
        <>
        <div className="header-container" key={i}>
          <p className="last-refreshed">Last Refreshed: {latestDate}</p>
          <p className="symbol">{countryData["Meta Data"]["2. Symbol"]}</p>
        </div>

        <div className="key-stats" key={`key-stats-${i}`}>
          <div className="daily-change">
            <p className="label">Daily Change</p>
            <p className={`change-value ${dailyChangeClass}`}>{dailyChange}%</p>
          </div>
          <div className="weekly-change">
            <p className="label">Weekly Change</p>
            <p className={`change-value ${weeklyChangeClass}`}>{weeklyChange}%</p>
          </div>
          <div className="volume">
            <p className="label">Volume</p>
            <p className="volume-value">{latestStats["5. volume"]}</p>
          </div>
        </div>
        </>
      );
    }
    return elements;
  };

  return (
    <div className="country-container">
      <button className="back-button" onClick={handleBackClick}>
      <i className="fa-solid fa-chevron-left"></i>
      </button>

      <p className="country-name">{normalizedCountry}</p>

      {/* Looping the section 20 times */}
      {renderRepeatedSection(20)}

    </div>
  );
};

export default CountryMarketPage;

{
  /* Time Series details */
}
{
  /* <div className="time-series">
        <p className="latest-date">{latestDate}</p>
        <p className="open">Open: {latestStats["1. open"]}</p>
        <p className="high">High: {latestStats["2. high"]}</p>
        <p className="low">Low: {latestStats["3. low"]}</p>
        <p className="close">Close: {latestStats["4. close"]}</p>
      </div> */
}
