import { useNavigate } from "react-router-dom";
import consumer from "../../../assets/images/consumer2.png";
import tech from "../../../assets/images/tech.jpg";
import health from "../../../assets/images/healthcare.jpg";
import finance from "../../../assets/images/finance2.png";
import industry from "../../../assets/images/industry.jpg";

import consumerWebP from "../../../assets/images/consumer2.webp";
import techWebP from "../../../assets/images/tech.webp";
import healthWebP from "../../../assets/images/healthcare.webp";
import financeWebP from "../../../assets/images/finance2.webp";
import industryWebP from "../../../assets/images/industry.webp";

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
          <picture>
            <source srcSet={consumerWebP} type="image/webp"/>
            <img src={consumer} />
          </picture>
        </div>
        <div
          className="finance-companies"
          onClick={() => navigate("/explore/category/finance")}
        >
          <picture>
            <source srcSet={financeWebP} type="image/webp"/>
            <img src={finance} />
          </picture>
        </div>
        <div
          className="tech-companies"
          onClick={() => navigate("/explore/category/tech")}
        >
          <picture>
            <source srcSet={techWebP} type="image/webp"/>
            <img src={tech} />
          </picture>
        </div>
        <div
          className="industry-companies"
          onClick={() => navigate("/explore/category/industry")}
        >
          <picture>
            <source srcSet={industryWebP} type="image/webp"/>
            <img src={industry} />
          </picture>
        </div>
        <div
          className="healthcare-companies"
          onClick={() => navigate("/explore/category/healthcare")}
        >
          <picture>
            <source srcSet={healthWebP} type="image/webp" />
            <img src={health} />
          </picture>
        </div>
      </div>
    </>
  );
};

export default CategoriesExplore;
