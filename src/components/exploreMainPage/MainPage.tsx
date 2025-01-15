import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DailyStockDiv from "./exploreComponents/DailyStockDiv";
import DailyTopStockDiv from "./exploreComponents/DailyTopStockDiv";
import SavedStockDiv from "./exploreComponents/SavedStockDiv";
import "./mainpageScss/_mainpagePage.scss";
import LogoutBtn from "./exploreComponents/LogoutBtn";
import SearchStock from "./exploreComponents/SearchStock";
import NewsList from "./exploreComponents/News/NewsList";
import MarketToday from "./exploreComponents/MarketToday";
import HeaderPage from "../HeaderPage/HeaderPage";
import StockSugestions from "./exploreComponents/StockSugestions";

interface ExploreMainPageProps {
  handleLogout: () => void;
}

const ExploreMainPage: React.FC<ExploreMainPageProps> = ({ handleLogout }) => {
  const [authorized, setAuthorized] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthorization = async () => {
      try {
        const response = await fetch("http://localhost:3000/check-auth", {
          method: "GET",
          credentials: "include",
        });
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
      <HeaderPage />
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
