import { US, CA, GB, CN, DE, IN } from "country-flag-icons/react/3x2";
import "../ExploreScss/_explore.scss";
import { useNavigate } from "react-router-dom";

const Markets = () => {
  const navigate = useNavigate();

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleMarketClick = (path: string) => {
    // Scrolla till toppen
    handleScroll();
  
    // Navigera till angiven path
    navigate(path);
  };

  return (
    <div className="explore-container">
      <h2 className="white-header">Markets</h2>
      <div className="markets-container">
        <div className="market" onClick={() => handleMarketClick("/explore/country/usa")}>
          <US title="United States" className="flag-icon" />
        </div>
        <div className="market" onClick={() => handleMarketClick("/explore/country/canada")}>
          <CA title="Canada" className="flag-icon" />
        </div>
        <div className="market" onClick={() => handleMarketClick("/explore/country/uk")}>
          <GB title="United Kingdom" className="flag-icon" />
        </div>
        <div className="market" onClick={() => handleMarketClick("/explore/country/china")}>
          <CN title="China" className="flag-icon" />
        </div>
        <div className="market" onClick={() => handleMarketClick("/explore/country/germany")}>
          <DE title="Germany" className="flag-icon" />
        </div>
        <div className="market" onClick={() => handleMarketClick("/explore/country/india")}>
          <IN title="India" className="flag-icon" />
        </div>
      </div>
    </div>
  );
}

export default Markets;
