import "../scss/_stockPageBody.scss";
import React, { useState, useEffect, useRef } from "react";

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
        return <div className="news-container">News content here</div>;
      case "Related":
        return <div className="related-container">Related content here</div>;
      default:
        return <div>Invalid option</div>;
    }
  };

  return (
    <div className="stock-page-body">
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
