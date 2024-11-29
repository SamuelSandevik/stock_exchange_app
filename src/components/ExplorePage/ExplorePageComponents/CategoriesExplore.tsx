import { useNavigate } from "react-router-dom";
import consumer from "../../../assets/images/consumer2.png";
import tech from "../../../assets/images/tech.jpg";
import health from "../../../assets/images/healthcare.jpg";
import finance from "../../../assets/images/finance2.png";
import industry from "../../../assets/images/industry.jpg";


const CategoriesExplore = () => {
  const navigate = useNavigate();
  return (
    <>
      <p className="white-header">Categories</p>
      <div className="categories-container">
        <div
          className="consumer-discretionary-companies"
          onClick={() => navigate("/explore/category/consumer-discretionary")}
        >
          <img
            src={consumer}
            alt="Consumer Discretionary"
          />
        </div>
        <div
          className="finance-companies"
          onClick={() => navigate("/explore/category/finance")}
        >
          <img
            src={finance}
            alt="Finance"
          />
        </div>
        <div
          className="tech-companies"
          onClick={() => navigate("/explore/category/tech")}
        >
          <img
            src={tech}
            alt="Tech"
          />
        </div>
        <div
          className="industry-companies"
          onClick={() => navigate("/explore/category/industry")}
        >
          <img
            src={industry}
            alt="Industry"
          />
        </div>
        <div
          className="healthcare-companies"
          onClick={() => navigate("/explore/category/healthcare")}
        >
          <img
            src={health}
            alt="Healthcare"
          />
        </div>
      </div>
    </>
  );
};

export default CategoriesExplore;
