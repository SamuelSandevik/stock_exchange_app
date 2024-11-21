import { US, CA, GB, CN, DE, IN } from "country-flag-icons/react/3x2";
import "../ExploreScss/_explore.scss"; 
import { useNavigate } from "react-router-dom";

const Markets = () => {
    const navigate = useNavigate();
  
    return (
      <div className="explore-container">
        <h1>Explore Markets</h1>
        <div className="markets-container">
          <div className="market" onClick={() => navigate("/explore/usa")}>
            <US title="United States" className="flag-icon" />
          </div>
          <div className="market" onClick={() => navigate("/explore/canada")}>
            <CA title="Canada" className="flag-icon" />
          </div>
          <div className="market" onClick={() => navigate("/explore/uk")}>
            <GB title="United Kingdom" className="flag-icon" />
          </div>
          <div className="market" onClick={() => navigate("/explore/china")}>
            <CN title="China" className="flag-icon" />
          </div>
          <div className="market" onClick={() => navigate("/explore/germany")}>
            <DE title="Germany" className="flag-icon" />
          </div>
          <div className="market" onClick={() => navigate("/explore/india")}>
            <IN title="India" className="flag-icon" />
          </div>
        </div>
      </div>
    );
}

export default Markets;
