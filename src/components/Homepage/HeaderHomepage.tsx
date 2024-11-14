import { useNavigate } from "react-router-dom";
import "./HomepageScss/_homepage.scss";


const HeaderHomepage = () => {
    const navigate = useNavigate();
    const goToSignUp = () => {
        navigate("/signUpForm");
      };
    return (
        <nav className="header-homepage">
            <div className="silly-logo">
                Silly Stocks
            </div>

            <div className="right-container">
            <i onClick={goToSignUp} className="fa-solid fa-user"></i>
            <i className="fa-solid fa-bars"></i>
            </div>
        </nav>
    );
}

export default HeaderHomepage;