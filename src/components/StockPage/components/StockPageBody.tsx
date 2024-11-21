import "../scss/_stockPage.scss";
import sendTicker from "./SaveTicker";
import React, { useState } from "react";

interface StockPageProps {
  high: number;
  low: number;
  ticker: string;
  onChangeChartType: (type: "line" | "candlestick") => void;
}

const stockPageBody: React.FC<StockPageProps> = ({
  high,
  low,
  ticker,
  onChangeChartType,
}) => {
  const selectionMenu = [
    { text: "Overview" },
    { text: "News" },
    { text: "Related" },
  ];

  // State för att hålla reda på vilket menyval som är aktivt
  const [activeMenu, setActiveMenu] = useState<string>("Overview");

  // Innehåll för varje menyval
  const renderContent = () => {
    switch (activeMenu) {
      case "Overview":
        return (
          <div className="overview-container ">
            <p className="header">About the company</p>

            <div className="about-comp">
              <p className="stock-sumary">
                Tesla är en amerikansk fordonstillverkare. Bolaget är
                specialiserat på tillverkning av batteridrivna fordon som säljs
                under eget varumärke och i olika modeller. <br />
                Produktionen av bilarna sker i egna produktionsanläggningar på
                den nordamerikanska marknaden. Bolaget grundades år 2003 och har
                huvudkontor beläget i Austin, Texas
              </p>
            </div>

            <p className="header">Key Numbers</p>

            <div className="key-numbers">
              <div className="left">
                <div className="text">
                  <p>Open</p>
                  <p>High</p>
                  <p>Low</p>
                </div>

                <div className="numbers">
                  <p>{high}</p>
                  <p>{high}</p>
                  <p>{low}</p>
                </div>
              </div>

              <div className="right">
                <div className="text">
                  <p>Vol</p>
                  <p>Pe</p>
                  <p>Mrkt cap</p>
                </div>

                <div className="numbers">
                  <p>7.459 M</p>
                  <p>32.89</p>
                  <p>2.014T</p>
                </div>
              </div>
            </div>
          </div>
        );
      case "News":
        return <div className="news-container balle">News content here</div>;
      case "Related":
        return (
          <div className="related-container balle">Related content here</div>
        );
      default:
        return <div>Invalid option</div>;
    }
  };

  return (
    <div className="stock-page-body">
      {/* <div className="change-chart-container">
        <button onClick={() => onChangeChartType("line")}>Line Chart</button>
        <button onClick={() => onChangeChartType("candlestick")}>
          Candlestick Chart
        </button>
      </div>

      <div className="save-stock-container">
        <button onClick={() => sendTicker(ticker)}>Save Stock</button>
      </div> */}

      <div className="selection-menu">
        {selectionMenu.map((item, index) => (
          <p
            key={index}
            className={activeMenu === item.text ? "active" : ""}
            onClick={() => setActiveMenu(item.text)}
          >
            {item.text}
          </p>
        ))}
      </div>

      <div className="render-content-container">{renderContent()}</div>
    </div>
  );
};

export default stockPageBody;
