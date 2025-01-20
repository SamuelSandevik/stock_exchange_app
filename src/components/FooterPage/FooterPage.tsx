import "./_footer.scss";
import ssLogo from "../../../public/logo-white-256x256.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {

  const navigate = useNavigate();
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleLogoClick = () => {
    handleScroll();
    navigate("/");

  }
  const handleExploreClick = () => {
    handleScroll();
    navigate("/explore");
  }
  const handleSignClick = () => {
    handleScroll();
    navigate("/signUpForm");
  }
  const handleSaveClick = () => {
    handleScroll();
    navigate("/foryou");
  }
  const handleWhoClick = () => {
    handleScroll();
    navigate("/the-team");
  }
  const handlePortfolioClick = () => {
    handleScroll();
    navigate("/portfolio");
  }
  const handleContactClick = () => {
    handleScroll();
    navigate("/contact");
  }


  return (
    <div className="footer-center-container">
    <div className="footer-container">
      <div className="footer-top-container">
        <div className="footer-logo-container" onClick={handleLogoClick}>
          <img src={ssLogo} alt="Silly stocks logo" />
        </div>
        <div className="footer-top-text">
          <p>SILLY</p>
          <p>STOCKS</p>
        </div>
      </div>
      <div className="footer-bottom-container">
        <div className="footer-section-1">
          <p onClick={handleExploreClick}>Explore</p>
          <p onClick={handleSignClick}>Sign in</p>
          <p onClick={handleSaveClick}>Saved stocks</p>
        </div>
        <div className="footer-section-2">
          <p onClick={handleWhoClick}>Who are we?</p>
          <p onClick={handlePortfolioClick}>Portfolio</p>
          <p onClick={handleContactClick}>Contact</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
