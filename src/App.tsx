import Footer from "./components/FooterPage/FooterPage";
import StocksDisplay from "./components/DisplayStocks/DisplayStock";
import ExploreMainPage from "./components/exploreMainPage/ExploreMainPage";
import HeaderPage from "./components/HeaderPage/HeaderPage";
import SignUpForm from "./components/SignUpPage/SignUpForm";
import "./style.scss";

import { BrowserRouter, Navigate, Route, Router, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import useAuth from "./services/useAuth";
import StockPage from "./components/StockPage/StockPage";

const App = () => {
  const { isLoggedIn, setIsLoggedIn, logout } = useAuth();
  
  return (
      <BrowserRouter>
        <div>
        <Routes>
          {/* Startsida */}
          <Route path="/" element={<Homepage />} />

          {/* Sign Up och Login-sida */}
          <Route
            path="/signUpForm"
            element={<SignUpForm onLogin={() => setIsLoggedIn(true)} />}
          />

          {/* Skyddad Mainpage */}
          <Route
            path="/mainpage"
            element={
              isLoggedIn ? (
                <ExploreMainPage handleLogout={logout} />
              ) : (
                <Navigate to="/signUpForm" />
              )
            }
          />
          <Route path="/stockPage" element={<StockPage />} />
        </Routes>
      <Footer />
      </div>
      </BrowserRouter>
  )
}
export default App;
