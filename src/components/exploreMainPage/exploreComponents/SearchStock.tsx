import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchedStockList from "../../SearchedStockList/SearchedStockList";
import { useState } from "react";

const SearchStock = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const [search, setSearch] = useState<string>("");
  const [showSearchedList, setShowSearchedList] = useState<boolean>(false); // New state variable

  function handleSearch(newSearch: string): void {
    setSearch(newSearch);
    setShowSearchedList(newSearch.trim().length > 0);
  }

  function searchStock(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    handleSearch(search);

    // navigate("/stockPage", { state: { searchTerm } });
  }

  return (
    <div className="search-container">
      <form action="" className="search-form">
        <input
          type="text"
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
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
