import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchedStockList from "../../SearchedStockList/SearchedStockList";

const SearchStock = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState<string>("");
  const [showSearchedList, setShowSearchedList] = useState<boolean>(false); // New state variable

  function handleSearch(newSearch: string): void {
    setSearch(newSearch);
    setShowSearchedList(newSearch.trim().length > 0);
  }

  function searchStock(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    handleSearch(search);
    console.log(search);

    navigate("/stockPage", { state: { search } });
  }

  return (
    <div className="search-container">
      <form action="" className="search-form">
        <input
          type="text"
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          className="search-input"
        />
        <button onClick={searchStock}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      {showSearchedList && <SearchedStockList search={search} />}
    </div>
  );
};

export default SearchStock;
