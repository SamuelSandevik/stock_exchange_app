import { useNavigate } from "react-router-dom";

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
            src="https://th.bing.com/th/id/R.bd96cacd649cf71240d8f485f4abbf3f?rik=JqzEVQ%2fstLRvvw&riu=http%3a%2f%2fimages.fanpop.com%2fimages%2fimage_uploads%2fLightning-McQueen-disney-pixar-cars-772510_1700_1100.jpg&ehk=wbGxU5%2foNHCag9OPVQrMzxoNLiXeDv8%2b3fLs9sNIvn4%3d&risl=&pid=ImgRaw&r=0"
            alt="Consumer Discretionary"
          />
        </div>
        <div
          className="finance-companies"
          onClick={() => navigate("/explore/category/finance")}
        >
          <img
            src="https://wallpaperaccess.com/full/1104816.jpg"
            alt="Finance"
          />
        </div>
        <div
          className="tech-companies"
          onClick={() => navigate("/explore/category/tech")}
        >
          <img
            src="https://th.bing.com/th/id/R.72c461caf073d0e6a2a1e1d2ea85d233?rik=d%2b75R3kfp0N9Vg&pid=ImgRaw&r=0"
            alt="Tech"
          />
        </div>
        <div
          className="industry-companies"
          onClick={() => navigate("/explore/category/industry")}
        >
          <img
            src="https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg?cs=srgb&dl=architecture-buildings-factory-247763.jpg&fm=jpg"
            alt="Industry"
          />
        </div>
        <div
          className="healthcare-companies"
          onClick={() => navigate("/explore/category/healthcare")}
        >
          <img
            src="https://th.bing.com/th/id/OIP.7-Bxb2Fcjf5EXApy5RCUGAHaEK?rs=1&pid=ImgDetMain"
            alt="Healthcare"
          />
        </div>
      </div>
    </>
  );
};

export default CategoriesExplore;
