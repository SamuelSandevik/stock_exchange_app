import "../exploreScss/_explorePage.scss";
import { useEffect, useState } from "react";
import axios from "axios";

interface SavedStockDivProps {}

const SavedStockDiv: React.FC<SavedStockDivProps> = () => {
  const [savedStocks, setSavedStocks] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSavedStocks = async () => {
      try {
        const response = await axios.get("http://localhost:3000/savedTickers", {
          withCredentials: true,
        });
        setSavedStocks(response.data.savedStocks);
      } catch (error) {
        console.error("Error fetching saved stocks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSavedStocks();
  }, []);

  return (
    <div className="stockContainer">
      <div className="stockDivTitle">
        <p>Saved Stocks</p>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : savedStocks.length > 0 ? (
        savedStocks.map((stock, index) => (
          <div key={index} className="stocks">
            {stock}
          </div>
        ))
      ) : (
        <p>You have no saved stocks.</p>
      )}
    </div>
  );
};

export default SavedStockDiv;
