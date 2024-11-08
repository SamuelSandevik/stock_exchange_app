import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DailyStockDiv from "./exploreComponents/DailyStockDiv";
import DailyTopStockDiv from "./exploreComponents/DailyTopStockDiv";
import SavedStockDiv from "./exploreComponents/SavedStockDiv";
import "./exploreScss/_explorePage.scss";
import LogoutBtn from "./exploreComponents/LogoutBtn";

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
          navigate("/");
        }
      } catch (error) {
        console.error("Authorization check failed:", error);
        navigate("/");
      }
    };

    checkAuthorization();
  }, [navigate]);

  return authorized ? (
    <>
    <LogoutBtn onLogout={handleLogout} />
      <DailyStockDiv />
      <div className="lowerExploreContainer">
        <DailyTopStockDiv />
        <SavedStockDiv />
      </div>
    </>
  ) : null;
}

export default ExploreMainPage;
