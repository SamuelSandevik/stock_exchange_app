import "../scss/_stockPageBody.scss";
import React, { useState, useEffect, useRef } from "react";
import { generateMockMetrics } from "./MockMetrics";
import NewsList from "../../exploreMainPage/exploreComponents/News/NewsList";
import { useNavigate } from "react-router-dom";
import sendTicker from "./SaveTicker";
import { FaPlus } from "react-icons/fa6";

interface StockPageProps {
  high: number;
  low: number;
  ticker: string;
}

const stockPageBody: React.FC<StockPageProps> = ({ high, low, ticker }) => {
  const selectionMenu = [
    { text: "Overview" },
    { text: "News" },
    { text: "Related" },
  ];

  const metrics = generateMockMetrics();

  const navigate = useNavigate();

  const handleStockClick = (ticker: string) => {
    navigate("/stockPage", { state: { search: ticker } });
  };

  useEffect(() => {
    // Scroll to top whenever ticker changes
    const topElement = document.getElementById("top");
    if (topElement) {
      topElement.scrollIntoView({ behavior: "smooth" });
    }
  }, [ticker]);

  const [activeMenu, setActiveMenu] = useState<string>("Overview");
  const [sliderStyle, setSliderStyle] = useState({ left: "0px", width: "0px" });

  const menuRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  const updateSliderPosition = (index: number) => {
    const target = menuRefs.current[index];
    if (target) {
      const { offsetLeft, offsetWidth } = target;
      setSliderStyle({ left: `${offsetLeft}px`, width: `${offsetWidth}px` });
    }
  };

  const [randomNumbers, setRandomNumbers] = useState<Record<string, number>>(
    {}
  );

  useEffect(() => {
    // Generate random numbers for related tickers
    const generateRandomNumbers = () => {
      const tickers = ["NVDA", "AMZN", "MSFT", "GOOG"];
      const newRandomNumbers: Record<string, number> = {};

      tickers.forEach((relatedTicker) => {
        if (relatedTicker !== ticker) {
          const randomValue = parseFloat(
            (Math.random() * (8 - -7) + -7).toFixed(2)
          );
          newRandomNumbers[relatedTicker] = randomValue;
        }
      });

      setRandomNumbers(newRandomNumbers);
    };

    generateRandomNumbers();
  }, [ticker]);

  useEffect(() => {
    // Ställ in sliderns position vid första renderingen
    const initialIndex = selectionMenu.findIndex(
      (item) => item.text === activeMenu
    );
    updateSliderPosition(initialIndex);
  }, [activeMenu]);

  const handleMenuClick = (text: string, index: number) => {
    setActiveMenu(text);
    updateSliderPosition(index);
  };

  const renderContent = () => {
    switch (activeMenu) {
      case "Overview":
        return (
          <div className="overview-container">
            <p className="header">About the company</p>
            <div className="about-comp">
              <p className="stock-summary">
                {ticker} is a US-based company operating across multiple
                industries. It offers a range of products and services to both
                consumers and businesses. {ticker} is known for its innovative
                solutions and strong commitment to sustainability. <br />
                <br />
                The company has operations and facilities in various
                international markets, with a strong presence in North America
                and Europe. {ticker} was founded many years ago and is
                headquartered in a major U.S. city.
              </p>
            </div>
            <p className="header key-numbers-header">Key Numbers</p>
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
                  <p>{metrics.volume}</p>
                  <p>{metrics.peRatio}</p>
                  <p>{metrics.marketCap}</p>
                </div>
              </div>
            </div>
            <div className="Investment-disclaimer">
              <p>
                Investing in securities has historically delivered strong
                returns, but there are no guarantees for the future, you could
                lose parts or your whole invested capital.
              </p>
            </div>
          </div>
        );
      case "News":
        return (
          <div className="news-container">
            <p className="header">News related to {ticker}</p>
            <NewsList ticker="mock" />
          </div>
        );
      case "Related":
        return (
          <div className="related-container">
            <p className="header">Stocks related to {ticker}</p>
            {["NVDA", "AMZN", "MSFT", "GOOG"].map((relatedTicker) => {
              if (relatedTicker !== ticker) {
                const number = randomNumbers[relatedTicker];
                return (
                  <div
                    key={relatedTicker}
                    onClick={() => handleStockClick(relatedTicker)}
                  >
                    <p className="related-stocks">
                      <div className="header-container">
                        <p className="related-header">{relatedTicker}</p>
                        <p
                          className={
                            number > 0
                              ? "positive"
                              : number < 0
                              ? "negative"
                              : "neutral"
                          }
                        >
                          {number > 0 ? `+${number}` : number}%
                        </p>
                      </div>
                      {relatedTicker === "NVDA" &&
                        "Nvidia is a leading American tech company known for its GPUs, powering gaming, AI, and data centers. Founded in 1993, its products like GeForce and Tesla revolutionize visual computing."}
                      {relatedTicker === "AMZN" &&
                        "Amazon is a global e-commerce and cloud computing leader, founded by Jeff Bezos in 1994. Known for its vast online marketplace and services like AWS, Amazon revolutionized retail and digital services, becoming one of the world's most valuable companies."}
                      {relatedTicker === "MSFT" &&
                        "Microsoft, founded in 1975 by Bill Gates and Paul Allen, is a global technology company known for its software products, including Windows, Office Suite, and Azure cloud services. It plays a leading role in software development, hardware, and artificial intelligence."}
                      {relatedTicker === "GOOG" &&
                        "Google, founded in 1998 by Larry Page and Sergey Brin, is a global technology giant best known for its search engine. It also develops products like Android, YouTube, Google Cloud, and Google Ads, shaping the digital landscape through advertising, cloud computing, and AI technologies."}
                      <div className="stock-link-container">
                        <p className="stock-link">Link to Stock</p>
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      </div>
                    </p>
                  </div>
                );
              }
              return null; // Don't render the current ticker
            })}
          </div>
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
      </div> */}

      <div className="save-stock-container">
        <button
          className="save-stock-button"
          onClick={() => sendTicker(ticker)}
        >
          Save Stock +
        </button>
      </div>
      <div className="selection-menu">
        {selectionMenu.map((item, index) => (
          <p
            key={index}
            ref={(el) => (menuRefs.current[index] = el)}
            className={activeMenu === item.text ? "active" : ""}
            onClick={() => handleMenuClick(item.text, index)}
          >
            {item.text}
          </p>
        ))}
        <div className="slider" style={sliderStyle}></div>
      </div>

      <div className="render-content-container">{renderContent()}</div>
    </div>
  );
};

export default stockPageBody;
