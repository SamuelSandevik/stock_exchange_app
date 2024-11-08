// AppRoutes.tsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SignUpForm from "../components/SignUpPage/SignUpForm";
import ExploreMainPage from "../components/exploreMainPage/ExploreMainPage";

interface AppRoutesProps {
  isLoggedIn: boolean;
  handleLoginStatusChange: (status: boolean) => void;
  handleLogout: () => void;
}

const AppRoutes: React.FC<AppRoutesProps> = ({ isLoggedIn, handleLoginStatusChange, handleLogout }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={isLoggedIn ? <Navigate to="/mainpage" /> : <SignUpForm onLogin={handleLoginStatusChange} />}
      />
      <Route
        path="/mainpage"
        element={isLoggedIn ? <ExploreMainPage handleLogout={handleLogout} /> : <Navigate to="/"  />}
      />
    </Routes>
  );
};

export default AppRoutes;
