import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/FooterPage/FooterPage";
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
    <Router>
      <AppRoutes
        isLoggedIn={isLoggedIn}
        handleLoginStatusChange={handleLoginStatusChange}
        handleLogout={handleLogout}
      />
      <Footer />
    </Router>
  );
};
export default App;
