import React, { useState } from "react";
import "./signUpScss/signUp.scss";
import axios from "axios";

const SignUpForm = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(true);

  const [signUpDetails, setSignUpDetails] = useState<{
    username: string;
    password: string;
    email: string;
  }>({ username: "", password: "", email: "" });

  function signUp(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    const response = axios.post("http://localhost:3000/signUpForm", {
      userName: signUpDetails.username,
      userPswrd: signUpDetails.password,
      email: signUpDetails.email,
    });
    console.log(response);
  }

  function login(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    const response = axios.post("http://localhost:3000/loginForm", {
      userName: signUpDetails.username,
      userPswrd: signUpDetails.password,
    });
    console.log(response);
  }

  const toggleForm = (): void => {
    setIsSignUp(!isSignUp);
  };
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
                value={signUpDetails.username}
                onChange={(e) => {
                  setSignUpDetails({
                    ...signUpDetails,
                    username: e.target.value,
                  });
                }}
              />
              <input
                type="text"
                value={signUpDetails.email}
                onChange={(e) => {
                  setSignUpDetails({ ...signUpDetails, email: e.target.value });
                }}
                name="email"
                placeholder="Enter email"
                className={`usernameInput ${isSignUp ? "" : "hidden"}`}
              />

              <input
                type="text"
                value={signUpDetails.password}
                onChange={(e) => {
                  setSignUpDetails({
                    ...signUpDetails,
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
