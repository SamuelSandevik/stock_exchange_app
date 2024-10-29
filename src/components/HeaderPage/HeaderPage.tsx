import React, { useState } from "react";
import "../HeaderPage/_header.scss";

function HeaderPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="Nav-container">
      <div className="logo">Logo</div>
      <div className="nav-items">
        <input type="text" placeholder="Search" id="search-bar" />
        <button id="search-btn">
          <div style={{ transform: "rotate(45deg)", fontSize: "1.25rem" }}>
            &#9906;
          </div>
        </button>
      </div>
      <button onClick={toggleMenu} className="nav-menu-btn">
        <div className="nav-btn-bars"></div>
        <div className="nav-btn-bars"></div>
        <div className="nav-btn-bars"></div>
      </button>
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
