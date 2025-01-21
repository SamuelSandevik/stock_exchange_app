// useAuth.tsx
import { useState, useEffect } from "react";

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await fetch("https://silly-stocks-server.onrender.com/check-auth", {
          method: "GET",
          credentials: "include",
        });
        if (response.ok) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error("Login status check failed:", error);
        setIsLoggedIn(false);
      } finally {
        setLoading(false); // Stoppa laddning oavsett resultat
      }
    };

    checkLoginStatus();
  }, []);

  const logout = async () => {
    try {
      await fetch("https://silly-stocks-server.onrender.com/logout", {
        method: "POST",
        credentials: "include",
      });
      setIsLoggedIn(false);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return { isLoggedIn, setIsLoggedIn, logout, loading };
};

export default useAuth;
