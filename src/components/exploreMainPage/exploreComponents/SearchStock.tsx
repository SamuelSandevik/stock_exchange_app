import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchedStockList from "../../SearchedStockList/SearchedStockList";

const SearchStock = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState<string>("");
  const [showSearchedList, setShowSearchedList] = useState<boolean>(false);

  const handleTickerSelect = (ticker: string): void => {
    setSearch(ticker);
  };

  function handleSearch(newSearch: string): void {
    setSearch(newSearch);
    setShowSearchedList(newSearch.trim().length > 0);
  }

  function searchStock(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    handleSearch(search);

    navigate("/stockPage", { state: { search } });
  }

  return (
    <div className="search-container">
      <form action="" className="search-form">
        <button onClick={searchStock}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <input
          type="text"
          placeholder="Search for a Ticker"
          value={search}
          onChange={(e) => handleSearch(e.target.value.toUpperCase())}
          className="search-input"
        />
      </form>
      {showSearchedList && (
        <SearchedStockList search={search} onSelected={handleTickerSelect} />
      )}
    </div>
  );
};

export default SearchStock;
