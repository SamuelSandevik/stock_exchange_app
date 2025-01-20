import "./_footer.scss";
import ssLogo from "../../../public/logo-white-256x256.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-top-container">
        <div className="footer-logo-container">
          <img src={ssLogo} alt="Silly stocks logo" />
        </div>
        <div className="footer-top-text">
          <p>Silly Stocks</p>
        </div>
      </div>
      <div className="footer-bottom-container">
        <div className="footer-section-1">
          <p>Explore</p>
          <p>Sign in</p>
          <p>Saved stocks</p>
        </div>
        <div className="footer-section-2">
          <p>About</p>
          <p>Who are we?</p>
          <p>Why Stockpile?</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
