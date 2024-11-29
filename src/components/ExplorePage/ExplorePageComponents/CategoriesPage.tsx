import { useNavigate, useParams } from "react-router-dom";
import data from "../ExplorePageComponents/mockCategoriesData.json"; // Mockdatafilen från tidigare steg

type TimeSeriesData = {
  "1. open": string;
  "2. high": string;
  "3. low": string;
  "4. close": string;
  "5. volume": string;
};

type CategoryData = {
  "Meta Data": {
    "1. Information": string;
    "2. Symbol": string;
    "3. Last Refreshed": string;
    "4. Output Size": string;
    "5. Time Zone": string;
  };
  "Time Series (Daily)": Record<string, TimeSeriesData>; // Använd Record för dynamiska nycklar
};
const CategoryPage: React.FC = () => {
  const navigate = useNavigate();
  type Categories =
    | "consumer-discretionary"
    | "finance"
    | "tech"
    | "industry"
    | "healthcare";

  const { category } = useParams<{ category: Categories }>();

  if (!category || !(category in data)) {
    return <p>No data available for {category || "this category"}</p>;
  }

  const categoryData = data[category] as CategoryData;
  if (!categoryData) {
    return <p>No data available for {category}</p>;
  }
  const handleBackClick = () => {
    navigate("/explore");
  };

  return (
    <div className="category-container">
      <h1 className="category-name">{category} Companies</h1>
      <button className="back-button" onClick={handleBackClick}>
        <i className="fa-solid fa-chevron-left"></i>
      </button>

      <div className="key-stats">
        <div>
          <p className="label">Symbol</p>
          <p className="symbol">{categoryData["Meta Data"]["2. Symbol"]}</p>
        </div>
        <div>
          <p className="label">Last Refreshed</p>
          <p className="last-refreshed">
            {categoryData["Meta Data"]["3. Last Refreshed"]}
          </p>
        </div>
      </div>

      <div className="time-series">
        {Object.keys(categoryData["Time Series (Daily)"]).map((date) => {
          const dataForDate = categoryData["Time Series (Daily)"][date];
          const change = (
            parseFloat(dataForDate["4. close"]) -
            parseFloat(dataForDate["1. open"])
          ).toFixed(2);
          const changeClass = parseFloat(change) >= 0 ? "positive" : "negative";
          return (
            <div key={date} className="time-series-entry">
              <p className="time-series-date">{date}</p>
              <p className="time-series-price">
                Open: {dataForDate["1. open"]} | Close:{" "}
                {dataForDate["4. close"]}
              </p>
              <p className={`change-value ${changeClass}`}>Change: {change}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryPage;
