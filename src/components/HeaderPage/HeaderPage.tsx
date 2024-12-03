import React, { useState } from "react";
import "../HeaderPage/_header.scss";
import logo from "./logo.png"
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { IonIcon } from "@ionic/react";
import { person } from 'ionicons/icons';

function HeaderPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isMobile: boolean = useMediaQuery({ query: "(max-width: 700px)" });


  const navigate = useNavigate();
  const goToSignUp = () => {
    navigate("/signUpForm");
  };

  const goToProfile = () => {
    navigate('/profile');
  };

  return (
    <div className="Nav-container">
      <div className="logo">
        <img src={logo} alt="fulllogo" />
      </div>

      {isMobile ? (
        <div className="profileIconContainer" onClick={goToProfile}>
          <IonIcon icon={person} style={{ fontSize: '35px', color: 'white' }}></IonIcon>
        </div>
      ) : (
        <div>
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
      )}
    </div>

  );
}

export default HeaderPage;
/*
function useMediaQuery(arg0: { query: string; }): boolean {
  throw new Error("Function not implemented.");
}*/

