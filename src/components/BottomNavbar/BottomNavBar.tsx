import React from "react";
import { IonIcon } from "@ionic/react"; // Importera från @ionic/react
import {
  homeOutline,
  trendingUpOutline,
  searchOutline,
  navigate,
} from "ionicons/icons";
import "./scss/_bottomNavbar.scss";
import {
  BrowserRouter,
  Navigate,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
const BottomNavbar = function () {
  const navigate = useNavigate();
  const currentLocation = useLocation();

  const navIcons = [
    { id: "home", route: "/", icon: homeOutline },
    { id: "explore", route: "/signUpForm", icon: trendingUpOutline },
    { id: "search", route: "/signUpForm", icon: searchOutline },
  ];

  return (
    <div className="container">
      <div className="bottom-navbar">
        {navIcons.map(({ id, route, icon }) => (
          <div key={id} className={id}>
            <IonIcon
              icon={icon} // Dynamiskt ikonanrop
              style={{
                fontSize: "32px",
                opacity: location.pathname === route ? 1 : 0.25,
                color: "white",
              }}
              onClick={() => navigate(route)} // Dynamisk navigation
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomNavbar;
