import { useNavigate } from "react-router-dom";
import "./_portfolio.scss";

const Portfolio = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/profile");
  };
  return (
    <>
      <div className="portfolio-super-container">
        <div className="portfolio-container">
          <button className="back-button" id="top" onClick={handleBackClick}>
            <i className="fa-solid fa-chevron-left"></i>&nbsp;&nbsp;&nbsp;Back
          </button>
          <div className="portfolio">
            <h1 className="portfolio-header">
              The Portfolio is currently under development, Thank You for your patience!
            </h1>
            <h1 className="portfolio-header"></h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
