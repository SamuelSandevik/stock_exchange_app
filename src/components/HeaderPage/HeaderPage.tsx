import React, { useState } from "react";
import "../HeaderPage/_header.scss";
import logo from "./logo.png";
import { useNavigate } from "react-router-dom";

function HeaderPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigate = useNavigate();
  const goToSignUp = () => {
    navigate("/signUpForm");
  };

  return (
    <div className="Nav-container">
      <div className="logo">
        <img src={logo} alt="fulllogo" />
      </div>
      <div className="nav-items">
        <input type="text" placeholder="Search" id="search-bar" />
        <button id="search-btn">
          <div style={{ transform: "rotate(45deg)", fontSize: "1.25rem" }}>
            &#9906;
          </div>
        </button>
      </div>
      <div className="nav-right-container">
        <i onClick={goToSignUp} className="fa-solid fa-user"></i>
        <button onClick={toggleMenu} className="nav-menu-btn">
          <div className="nav-btn-bars"></div>
          <div className="nav-btn-bars"></div>
          <div className="nav-btn-bars"></div>
        </button>
      </div>
      <ul className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Explore</a>
        </li>
        <li>
          <a href="#">Saved</a>
        </li>
      </ul>
    </div>
  );
}

export default HeaderPage;
