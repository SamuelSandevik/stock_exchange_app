import { useNavigate } from "react-router-dom";
import Chart from "./HomepageStockChart";
import { useEffect, useState } from "react";
import { generateChartData } from "../MockDataForAPI/Mockdata";

interface StockData {
  ticker: string;
  data: { x: number; y: number }[];
  percentage: string;
}


const Homepage = () => {
  const navigate = useNavigate();
  const [stocks, setStocks] = useState<StockData[]>([]);

  useEffect(() => {
    // Generera data för flera aktier
    const generatedStocks = ["TSLA", "NVDA", "AMZN", "GOOG", "AAPL"].map((ticker) => {
      const { data, percentageChange } = generateChartData(30, 100); 
      
      if(0 < percentageChange){
        let newPercentage = "+" + percentageChange;
        return {
          ticker,
          data,
          percentage: newPercentage,
        };
      }else{
        let newPercentage = "" + percentageChange;
        return {
          ticker,
          data,
          percentage: newPercentage,
        };
      }
    });

    setStocks(generatedStocks);
  }, []);
  const goToSignUp = () => {
    navigate("/signUpForm");
  };
  
  return (
    <div>
      <div className="header-container">
      <h1 className="header">Homepage</h1>
      </div>
      <p>{}</p>
      <div className="chart-super-container">
        {stocks.map((stock) => (
          <Chart
            key={stock.ticker}
            data={stock.data}
            ticker={stock.ticker}
            percentage={`${stock.percentage}%`}
          />
        ))}
      </div>
     
      <button onClick={goToSignUp}>Go to Sign Up Page</button>

    </div>
  );
};

export default Homepage;
