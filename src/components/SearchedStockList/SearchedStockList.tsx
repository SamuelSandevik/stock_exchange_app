import { useEffect, useState } from "react";
import GetRelatedStockApi from "../StockSearch/GetRelatedStocks";
import { IStock } from "./IStock";
import "./_searchedStockList.scss";

const SearchedStockList = () => {
  //   const stocksSuggested: IStock[] = [
  //     { ticker: "AAPL" },
  //     { ticker: "AMZN" },
  //     { ticker: "NVDA" },
  //   ];

  const [suggestedStocks, setSuggestedStocks] = useState<IStock[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    (async () => {
      setSuggestedStocks((await GetRelatedStockApi("AAPL")) as IStock[]);
    })();
  }, []);

  return (
    <>
      <h3 className="searched_list_header">
        {suggestedStocks.length === 0 ? "No results found" : "Results"}
      </h3>
      <ul>
        {suggestedStocks.map((item, index) => {
          return (
            <li
              key={index}
              className={
                selectedIndex === index
                  ? "searched_list_item selected"
                  : "searched_list_item"
              }
              onClick={() => {
                setSelectedIndex(index);
              }}
            >
              {item.ticker}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default SearchedStockList;
