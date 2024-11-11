import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/FooterPage/FooterPage";
import StocksDisplay from "./components/DisplayStocks/DisplayStock";
import ExploreMainPage from "./components/exploreMainPage/ExploreMainPage";
import HeaderPage from "./components/HeaderPage/HeaderPage";
import SignUpForm from "./components/SignUpPage/SignUpForm";
import "./style.scss";
import AppRoutes from "./routes/AppRoutes";
import useAuth from "./services/useAuth";

const App = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  const handleLoginStatusChange = (status: boolean) => {
    if (status) {
      window.location.href = "/mainpage";
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:3000/logout", {
        method: "GET",
        credentials: "include",
      });
      
      setIsLoggedIn(false);
      window.location.href = "/";
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <>
      <Footer />
    </Router>
  );
};
export default App;
