import React, { useEffect, useState } from "react";
import "./signUpScss/signUp.scss";
import axios from "axios";
import useAuth from "../../services/useAuth";

const SignUpForm = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const [isSignUp, setIsSignUp] = useState<boolean>(true);

  const [userDetails, setUserDetails] = useState<{
    username: string;
    password: string;
    email: string;
  }>({ username: "", password: "", email: "" });

  async function signUp(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    const response = await axios.post("http://localhost:3000/signUpForm", {
      userName: userDetails.username,
      userPswrd: userDetails.password,
      email: userDetails.email,
    });
    console.log(response);

    if (response.status === 201) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }

  async function login(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    const response = await axios.post("http://localhost:3000/loginForm", {
      userName: userDetails.username,
      userPswrd: userDetails.password,
    });
    console.log(response);

    if (response.status === 200) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }

  const toggleForm = (): void => {
    setIsSignUp(!isSignUp);
  };

  useEffect(() => {
    if (isLoggedIn) {
      //router.push("/")
    }
  }, [isLoggedIn]);

  return (
    <>
      <div className="form-container">
        <div className="innerForm-container">
          <div className="textDiv">
            <h1>{isSignUp ? "Sign Up" : "Welcome Back"}</h1>
            <p>
              {isSignUp
                ? "Enter details to create account"
                : "Enter details to sign in"}
            </p>
          </div>
          <form
            // action={
            //     isSignUp
            //         ? "http://localhost:5173/signUpForm"
            //         : "http://localhost:5173/signInForm"
            // }
            // method="POST"
            className="form"
          >
            <div className="inputs">
              <input
                type="text"
                name="username"
                placeholder="Enter username"
                id="nameField"
                value={userDetails.username}
                onChange={(e) => {
                  setUserDetails({
                    ...userDetails,
                    username: e.target.value,
                  });
                }}
              />
              <input
                type="text"
                value={userDetails.email}
                onChange={(e) => {
                  setUserDetails({ ...userDetails, email: e.target.value });
                }}
                name="email"
                placeholder="Enter email"
                className={`emailInput ${isSignUp ? "" : "hidden"}`}
              />

              <input
                type="text"
                value={userDetails.password}
                onChange={(e) => {
                  setUserDetails({
                    ...userDetails,
                    password: e.target.value,
                  });
                }}
                name="password"
                placeholder="Enter password"
              />

              {!isSignUp && <p className="forgotPsword">Forgot Password</p>}
            </div>

            <button
              type="submit"
              onClick={(e) => (isSignUp ? signUp(e) : login(e))}
              className="signUpBtn btn"
            >
              {isSignUp ? "Sign Up" : "Sign In"} <span>&rarr;</span>
            </button>

            <div className="member">
              <p>
                {isSignUp
                  ? "Already have an account?"
                  : "Don't have an account?"}
              </p>
              <button
                type="button"
                className="btn loginBtn"
                onClick={toggleForm}
              >
                {isSignUp ? "Log in" : "Sign up"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
