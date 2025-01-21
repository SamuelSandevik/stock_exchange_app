import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import data from "../ExplorePageComponents/mockCategoriesData.json";

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
  "Time Series (Daily)": Record<string, TimeSeriesData>;
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

  const categoryDataArray = data[category] as CategoryData[];

  if (!categoryDataArray || categoryDataArray.length === 0) {
    return <p>No data available for {category}</p>;
  }

  const handleBackClick = () => {
    navigate("/explore");
  };

  return (
    <div className="super-container">
      <div className="top-row">
        <button className="back-button" id="top" onClick={handleBackClick}>
          <i className="fa-solid fa-chevron-left"></i>&nbsp;&nbsp;&nbsp;Back
        </button>
        <p className="country-name">{category} companies</p>
      </div>

      <div className="country-container">
        {categoryDataArray.map((categoryData) => {
          const latestDate = Object.keys(
            categoryData["Time Series (Daily)"]
          )[0];
          const latestData = categoryData["Time Series (Daily)"][latestDate];

          const change = (
            parseFloat(latestData["4. close"]) -
            parseFloat(latestData["1. open"])
          ).toFixed(2);

          const changeClass = parseFloat(change) >= 0 ? "positive" : "negative";

          return (
            <div
              key={categoryData["Meta Data"]["2. Symbol"]} // Use Symbol as a unique key
              onClick={() => {
                navigate("/StockPage", {
                  state: { search: categoryData["Meta Data"]["2. Symbol"] },
                });
              }}
              className="company-card"
            >
              <div className="company-header">
                <p className="symbol">
                  {categoryData["Meta Data"]["2. Symbol"]}
                </p>
                <p className="last-refreshed">Last Refreshed: {latestDate}</p>
              </div>
              <div className="stats">
                <div className="stat">
                  <p className="label">Daily Change</p>
                  <p className={`value ${changeClass}`}>{change}</p>
                </div>
                <div className="stat">
                  <p className="label">Volume</p>
                  <p className="value volume">{latestData["5. volume"]}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryPage;
