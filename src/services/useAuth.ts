// useAuth.tsx
import { useState, useEffect } from "react";

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await fetch("http://localhost:3000/check-auth", {
          method: "GET",
          credentials: "include",
        });

        if (response.ok) {
          console.log("Användare är inloggad.");
          setIsLoggedIn(true);
        } else {
          console.log("Användare är INTE inloggad.");
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error("Login status check failed:", error);
        setIsLoggedIn(false);
      }
    };

    checkLoginStatus();
  }, []); // Denna useEffect ska köras endast en gång när komponenten mountas, för att kontrollera loginstatus

  return { isLoggedIn, setIsLoggedIn };
};

export default useAuth;

