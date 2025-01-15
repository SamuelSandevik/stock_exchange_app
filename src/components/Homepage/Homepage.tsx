import Chart from "./HomepageStockChart";
import { useEffect, useState } from "react";
import { generateChartData } from "../MockDataForAPI/Mockdata";
import HeaderPage from "../HeaderPage/HeaderPage";
import StockNews from "./News/News";
import ssLogo from "../../../public/logo-white-256x256.png";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

interface StockData {
  ticker: string;
  data: { x: number; y: number }[];
  percentage: string;
  closePrice: string;
  changePrice: string;
}

const Homepage = () => {
  // const navigate = useNavigate();
  const [stocks, setStocks] = useState<StockData[]>([]);

  const stockScroll = () => {
  const stockElement = document.getElementById("stock-scroll");
    if (stockElement) {
      stockElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Generera data för flera aktier
    const generatedStocks = ["TSLA", "NVDA", "AMZN", "GOOG", "AAPL"].map(
      (ticker) => {
        const { data, percentageChange, closePrice, changePrice } =
          generateChartData(30, 100);

        if (0 < percentageChange) {
          let newPercentage = "+" + percentageChange;
          return {
            ticker,
            data,
            percentage: newPercentage,
            closePrice: closePrice.toString(),
            changePrice: changePrice.toString(),
          };
        } else {
          let newPercentage = "" + percentageChange;
          return {
            ticker,
            data,
            percentage: newPercentage,
            closePrice: closePrice.toString(),
            changePrice: changePrice.toString(),
          };
        }
      }
    );

    setStocks(generatedStocks);
  }, []);


  const [view, setView] = useState<"top" | "trending">("top");
  const topButtonHeight = view === "top" ? "30px" : "20px";
  const trendingButtonHeight = view === "trending" ? "30px" : "20px";


  return (
    <div>
      <HeaderPage />
      
      <div className="homepage-start-logo">
        <img src={ssLogo} alt="homepage-logo" />
        <div className="homepage-start-text">
          SILLY
        </div>
        <div className="homepage-start-text">
          STOCKS
        </div>
      </div>
      <div className="arrow-homepage" >
      <MdKeyboardDoubleArrowDown onClick={stockScroll} color="white" fontSize="2.5rem"/>
      </div>

      

      <div className="homepage-content-container">
        {/* Buttons to switch views */}
        <div className="chart-super-container">
          <div className="chartSwitchBtns" id="stock-scroll">
            <button onClick={() => setView("top")} className="switchBtn" style={{ height: topButtonHeight }}>Top</button>
            <button onClick={() => setView("trending")} className="switchBtn" style={{ height: trendingButtonHeight }}>Trending</button>
          </div>

          {/* Conditional rendering based on state */}
          {view === "top" &&
            <div className="chartDivContainer">
              <div className="tableheader" >
                <p className="name">Company</p>
                <p className="date">Today</p>
              </div>
              {stocks.map((stock) => (
                <Chart
                  key={stock.ticker}
                  data={stock.data}
                  ticker={stock.ticker}
                  percentage={`${stock.percentage}%`}
                  closePrice={stock.closePrice}
                  changePrice={stock.changePrice}
                />
              ))}</div>
          }
          {view === "trending" &&
            <div className="chartDivContainer">
              <div className="tableheader">
                <p className="name">Company</p>
                <p className="date">Today</p>
              </div>
              {stocks.slice().reverse().map((stock) => (
                <Chart
                  key={stock.ticker}
                  data={stock.data}
                  ticker={stock.ticker}
                  percentage={`${stock.percentage}%`}
                  closePrice={stock.closePrice}
                  changePrice={stock.changePrice}
                />
              ))}</div>}
        </div>

        <StockNews />
        {/*  {stocks.map((stock) => (
            <Chart
              key={stock.ticker}
              data={stock.data}
              ticker={stock.ticker}
              percentage={`${stock.percentage}%`}
              closePrice={stock.closePrice}
              changePrice={stock.changePrice}
            />
          ))} */}

      </div>
    </div>

  );
};

export default Homepage;
