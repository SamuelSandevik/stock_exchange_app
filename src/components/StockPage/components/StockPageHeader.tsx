import sendTicker from "./SaveTicker";
import "../scss/_stockPage.scss";
import { US } from "country-flag-icons/react/3x2";

interface StockPageProps {
  high: number;
  low: number;
  ticker: string;
  onChangeChartType: (type: "line" | "candlestick") => void;
}

const StockPageHeader: React.FC<StockPageProps> = ({
  high,
  low,
  ticker,
  onChangeChartType,
}) => {
  return (
    <div className="stock-page-header">
      <div className="market-container">
        <US title="United States" className="flag" />
        <p>NASDAQ</p>
      </div>
      <div className="price-company-container">
        <div className="company-container">
          <p className="company">{ticker}</p>
          <p className="ticker">{ticker}</p>
        </div>

        <div className="price-change">
          <p className="price">${(high + low / 2).toFixed(2)}</p>
          <div className="price-summary">
            <p className="increase">${(high - low).toFixed(2)}</p>
            <p className="procent">({((high / low) * 100).toFixed(2) + "%"})</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockPageHeader;
