import { useEffect, useState } from "react";
import GetRelatedStockApi from "../StockSearch/GetRelatedStocks";
import { IStock } from "./IStock";
import "./_searchedStockList.scss";
import { SearchedStockListProps } from "./searchedStockListProps";
import GetRelatedStockApiAlphaV from "../StockSearch/getRelatedStocksAlphaV";

const SearchedStockList: React.FC<SearchedStockListProps> = ({
  search,
  onSelected,
}) => {
  //   const stocksSuggested: IStock[] = [
  //     { ticker: "AAPL" },
  //     { ticker: "AMZN" },
  //     { ticker: "NVDA" },
  //   ];

  const [suggestedStocks, setSuggestedStocks] = useState<IStock[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (search) {
        const stocks = await GetRelatedStockApiAlphaV(search);
        // const stocks = await GetRelatedStockApi(search);
        if (stocks == undefined) setSuggestedStocks([]);
        else {
          stocks.unshift({ ticker: search });
          setSuggestedStocks(stocks as IStock[]);
        }
      } else {
        setSuggestedStocks([]);
      }
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [search]);

  const handleItemClick = (ticker: string, index: number) => {
    setSelectedIndex(index);
    onSelected(ticker);
  };

  return (
    <>
      <div className="searched_list_container">
        <h3 className="searched_list_header">
          {suggestedStocks.length === 0 ? "No results found" : ""}
        </h3>
        <ul className="">
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
                  handleItemClick(item.ticker, index);
                }}
              >
                {item.name + ` | ` + item.ticker}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SearchedStockList;
