import React, { useState } from 'react';
import './signUpScss/signUp.scss'

const SignUpForm = () => {
    const [isSignUp, setIsSignUp] = useState<boolean>(true);

    const toggleForm = (): void => {
        setIsSignUp(!isSignUp);
    };
    return (
        <>
            <div className="form-container">
                <div className='innerForm-container'>
                    <div className='textDiv'>
                        <h1>{isSignUp ? 'Sign Up' : 'Welcome Back'}</h1>
                        <p>{isSignUp ? 'Enter details to create account' : 'Enter details to sign in'}</p>
                    </div>
                    <form
                        action={
                            isSignUp
                                ? "http://localhost:5173/signUpForm"
                                : "http://localhost:5173/signInForm"
                        }
                        method="POST"
                        className="form"
                    >
                        <div className='inputs'>
                            <input
                                type="text"
                                name="username"
                                placeholder="Enter username"
                                id="nameField"
                                className={`usernameInput ${isSignUp ? '' : 'hidden'}`}
                            />
                            <input type="text" name="email" placeholder="Enter email" />

                            <input type="text" name="password" placeholder="Enter password" />

                            {!isSignUp && <p className="forgotPsword">Forgot Password</p>}
                        </div>

                        <button type="submit" className="signUpBtn btn">
                            {isSignUp ? 'Sign Up' : 'Sign In'} <span>&rarr;</span>
                        </button>

                        <div className="member">
                            <p>{isSignUp ? 'Already have an account?' : "Don't have an account?"}</p>
                            <button type="button" className="btn loginBtn" onClick={toggleForm}>
                                {isSignUp ? 'Log in' : 'Sign up'}
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    );
}

export default SignUpForm;