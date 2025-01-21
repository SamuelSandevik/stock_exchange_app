import { IonIcon } from "@ionic/react"; // Importera från @ionic/react
import {
  homeOutline,
  trendingUpOutline,
  searchOutline,
} from "ionicons/icons";
import "./scss/_bottomNavBar.scss";
import {
  useNavigate,
} from "react-router-dom";
const BottomNavbar = function () {
  const navigate = useNavigate();

  const navIcons = [
    { id: "home", route: "/", icon: homeOutline },
    { id: "explore", route: "/foryou", icon: trendingUpOutline },
    { id: "search", route: "/explore", icon: searchOutline },
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
