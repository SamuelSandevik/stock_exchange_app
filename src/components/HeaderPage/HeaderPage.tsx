import { useNavigate } from "react-router-dom";
import "./_header.scss";
import ssLogo from "../../../public/logo-white-32x32.png";
import { IonIcon } from "@ionic/react";
import { person } from "ionicons/icons";

const HeaderPage = () => {

  const navigate = useNavigate();

  
  const goToProfile = () => {
    navigate('/profile');
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
        <IonIcon icon={person} style={{ fontSize: '35px', color: 'white' }}></IonIcon>
      </div>
    </div>
    </>
  )
}

export default HeaderPage


