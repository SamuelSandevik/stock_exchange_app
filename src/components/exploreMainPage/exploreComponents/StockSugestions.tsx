import React from "react";
import "../mainpageScss/_stockSugestion.scss";
import { stockData } from "../data/stockData";
import { useNavigate } from "react-router-dom";

const StockSugestions = () => {
  const navigate = useNavigate();

  const goToStock = (stock: string) => {
    navigate("/stockPage", { state: { search: stock } });
  };

  return (
    <div className="sugestion-container">
      <div className="sugestion-text-container">
        <p className="sugestion-header">Sugested stocks</p>
        <p className="sugestion-undertext">Popular tickets on SillyStock</p>
      </div>
      <div className="sugestion-scroll">
        {stockData.map((s, i) => (
          <div
            key={i}
            className="sugestion-card"
            onClick={() => goToStock(s.Symbol)}
          >
            <img className="stock-img" src={s.img} alt="" />
            <p className="ticker">{s.Symbol}</p>
            <p
              className={
                s.DailyData.ChangePercentage.includes("-")
                  ? "negative"
                  : "positive"
              }
            >
              {s.DailyData.ChangePercentage}
            </p>
          </div>
        ))}
      </div>
      <div className="line-father">
        <div className="line"></div>
      </div>
    </div>
  );
};

export default StockSugestions;
