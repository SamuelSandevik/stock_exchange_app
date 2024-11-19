import sendTicker from "./SaveTicker";

interface StockPageHeaderProps {
  high: number;
  low: number;
  ticker: string;
  onChangeChartType: (type: "line" | "candlestick") => void;
}

const StockPageHeader: React.FC<StockPageHeaderProps> = ({
  high,
  low,
  ticker,
  onChangeChartType,
}) => {
  return (
    <div className="stockpage-header">
      <div className="market-container">
        <i className="fa-solid fa-flag-usa"></i>
        <p>NASDAQ</p>
      </div>

      <div>
        {/* display searched stock full name */}
        Apple Inc.
      </div>
      <div className="ticker-container">{ticker}</div>
      <div className="high-low-container">
        <p>High</p>
        {high}
        <p>Low</p>
        {low}
      </div>
      <div className="change-chart-container">
        <button onClick={() => onChangeChartType("line")}>Line Chart</button>
        <button onClick={() => onChangeChartType("candlestick")}>
          Candlestick Chart
        </button>
      </div>
      <div className="save-stock-container">
        <button onClick={() => sendTicker(ticker)}>Save Stock</button>
      </div>
    </div>
  );
};

export default StockPageHeader;
