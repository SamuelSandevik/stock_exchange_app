import { useNavigate } from "react-router-dom";
import "./_portfolio.scss";


const Portfolio = () => {
    const navigate = useNavigate();
    
    const handleBackClick = () => {
      navigate("/profile");
    };
  return (
    <>
      <button className="back-button" onClick={handleBackClick}>
        <i className="fa-solid fa-chevron-left"></i>
      </button>
    <div className="portfolio">
      <h1 className="portfolio-header">
        The Portfolio is currently under development
      </h1>
      <h1 className="portfolio-header">Thank You for your patience!</h1>
    </div>
    </>
  );
};

export default Portfolio;
