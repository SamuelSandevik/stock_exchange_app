import { useState } from "react";

interface SearchProps {
  onSearch: (ticker: string) => void;
}

const StockSearch = ({ onSearch }: SearchProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const upperCaseValue = e.target.value.toUpperCase();
    setInputValue(upperCaseValue);
  };

  const handleSearch = () => {
    onSearch(inputValue); 
    setInputValue(""); 
  };

  return (
    <>
      <div>
        <input type="text" placeholder="Enter a ticket..." value={inputValue} onChange={handleInputChange}/>
        <button onClick={handleSearch}>Search</button>
      </div>
    </>
  );
};

export default StockSearch;
