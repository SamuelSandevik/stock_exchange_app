import { useNavigate } from "react-router-dom";
import "./_header.scss";
import ssLogo from "../../../public/logo-white-256x256.png";
import { FaRegUser } from "react-icons/fa6";

const HeaderPage = () => {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate("/profile");
  };
  const goToHomepage = () => {
    navigate("/");
  };
  return (
    <>
      <div className="nav-mobile-container">
        <div className="nav-logo-container">
          <img src={ssLogo} alt="Silly stocks logo" onClick={goToHomepage} />
        </div>
        <div className="profile-icon-container" onClick={goToProfile}>
          <FaRegUser style={{ fontSize: "35px", color: "white" }} />
        </div>
      </div>
    </>
  );
};

export default HeaderPage;
