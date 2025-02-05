import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SavedStockDiv from "./exploreComponents/SavedStockDiv";
import "./mainpageScss/_mainpagePage.scss";
import NewsList from "./exploreComponents/News/NewsList";
import MarketToday from "./exploreComponents/MarketToday";
import StockSugestions from "./exploreComponents/StockSugestions";

interface ExploreMainPageProps {
  handleLogout: () => void;
}

const ExploreMainPage: React.FC<ExploreMainPageProps> = () => {
  const [authorized, setAuthorized] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthorization = async () => {
      try {
        const response = await fetch(
          "https://silly-stocks-server.onrender.com/check-auth",
          {
            method: "GET",
            credentials: "include",
          }
        );
        if (response.ok) {
          setAuthorized(true);
        } else {
          navigate("/signUpForm");
        }
      } catch (error) {
        console.error("Authorization check failed:", error);
        navigate("/signUpForm");
      }
    };

    checkAuthorization();
  }, [navigate]);

  return authorized ? (
    <>
      <div className="mainpage-body">
        {/* <LogoutBtn onLogout={handleLogout} /> */}
        <MarketToday />
        {/* <div className="lowerExploreContainer"> */}
        {/* <DailyTopStockDiv /> */}
        <SavedStockDiv />
        <StockSugestions />
        <NewsList ticker="mock" />
      </div>
    </>
  ) : null;
};

export default ExploreMainPage;
