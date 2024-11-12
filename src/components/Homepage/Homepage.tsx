import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  const goToSignUp = () => {
    navigate("/signUpForm");
  };

  return (
    <div>
      <h1>Homepage</h1>
      <button onClick={goToSignUp}>Go to Sign Up Page</button>
    </div>
  );
};

export default Homepage;
