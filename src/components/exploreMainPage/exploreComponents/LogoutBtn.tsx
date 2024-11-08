import { useNavigate } from "react-router-dom";

const LogoutBtn = ({ onLogout }: { onLogout: () => void }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Skicka anrop till servern för att rensa token
      await fetch("http://localhost:3000/logout", {
        method: "GET",
        credentials: "include", // Inkludera cookies för att kunna rensa token
      });

      // Uppdatera frontend-statusen
      onLogout();
      navigate("/"); // Omdirigera till inloggningssidan
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <button className="logoutBtn" onClick={handleLogout}>
      Log Out
    </button>
  );
};

export default LogoutBtn;

