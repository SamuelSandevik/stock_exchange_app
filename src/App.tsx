import Footer from "./components/FooterPage/FooterPage";
import ExploreMainPage from "./components/exploreMainPage/MainPage";
import SignUpForm from "./components/SignUpPage/SignUpForm";
import "./style.scss";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import useAuth from "./services/useAuth";
import StockPage from "./components/StockPage/StockPage";
import BottomNavbar from "./components/BottomNavbar/BottomNavBar";
import ExplorePage from "./components/ExplorePage/ExplorePage";
import CountryMarketPage from "./components/ExplorePage/ExplorePageComponents/CountryMarketData";
import CategoryPage from "./components/ExplorePage/ExplorePageComponents/CategoriesPage";
import ProfilePage from "./components/Profile/ProfilePage";
import Portfolio from "./components/Portfolio/Portfolio";
import EditProfile from "./components/EditProfile/EditProfile";

const App = () => {
  const { isLoggedIn, setIsLoggedIn, logout } = useAuth();

  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/* Startsida */}
          <Route path="/" element={<Homepage />} />

          {/*Profil sida*/}
          <Route
            path="/profile"
            element={
              isLoggedIn ? (
                <ProfilePage />
              ) : (
                <Navigate to="/signUpForm" replace />
              )
            }
          />
          {/*Portfolio sida, under dev*/ }
          <Route
            path="/portfolio"
            element={
              isLoggedIn ? (
              <Portfolio />
            ) : (
            <Navigate to="/signUpForm" replace />
            )
            }
          />
          {/*Portfolio sida, under dev*/ }
          <Route
            path="/edit-profile"
            element={
              isLoggedIn ? (
              <EditProfile />
            ) : (
            <Navigate to="/signUpForm" replace />
            )
            }
          />



          {/* Sign Up och Login-sida */}
          <Route
            path="/signUpForm"
            element={<SignUpForm onLogin={() => setIsLoggedIn(true)} />}
          />

          {/* Skyddad Foryoupage */}
          <Route
            path="/foryou"
            element={
              isLoggedIn ? (
                <ExploreMainPage handleLogout={logout} />
              ) : (
                <Navigate to="/signUpForm" />
              )
            }
          />
          <Route
            path="/check-auth"
            element={
              isLoggedIn ? (
                <Navigate to="/foryou" />
              ) : (
                <Navigate to="/signUpForm" />
              )
            }
          />
          <Route path="/stockPage" element={<StockPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route
            path="/explore/country/:country"
            element={<CountryMarketPage />}
          />
          <Route
            path="/explore/category/:category"
            element={<CategoryPage />}
          />
        </Routes>
        <BottomNavbar />
      </div>
    </BrowserRouter>
  );
};
export default App;
