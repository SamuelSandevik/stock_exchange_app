import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signUpScss/signUp.scss'

const SignUpForm = ({ onLogin }: { onLogin: (status: boolean) => void }) => {
    const [isSignUp, setIsSignUp] = useState<boolean>(true);
    const [message, setMessage] = useState("");
    const navigate = useNavigate(); 

    const toggleForm = () => {
        setIsSignUp(!isSignUp);
        setMessage(""); 
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = {
            email: formData.get("email"),
            userName: formData.get("userName"),
            userPswrd: formData.get("userPswrd"),
        };
    try {
        const endpoint = isSignUp ? "http://localhost:3000/signUpForm" : "http://localhost:3000/loginForm";
  
        const response = await fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
            credentials: "include",
        });

        const result = await response.json();
        setMessage(result.message); 

        if (response.ok) {
            console.log("Operation successful:", result);
            if (!isSignUp) {
                onLogin(true);
                navigate("/mainpage");
            }
        } else {
            console.error("Operation failed:", result);
        }
    } catch (error) {
        console.error("Error:", error);
        setMessage("An error occurred. Please try again.");
    }
}
    return (
        <>
            <div className="form-container">
                <div className='innerForm-container'>
                    <div className='textDiv'>
                        <h1>{isSignUp ? 'Sign Up' : 'Welcome Back'}</h1>
                        <p>{isSignUp ? 'Enter details to create account' : 'Enter details to sign in'}</p>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="form"
                    >
                        <div className='inputs'>
                            <input
                                type="text"
                                name="email"
                                placeholder="Enter email"
                                id="nameField"
                                className={`emailInput ${isSignUp ? '' : 'hidden'}`}
                            />
                            <input type="text" name="userName" placeholder="Enter username" />

                            <input type="text" name="userPswrd" placeholder="Enter password" />

                            {!isSignUp && <p className="forgotPsword">Forgot Password</p>}
                        </div>

                        <button type="submit" className="signUpBtn btn">
                            {isSignUp ? 'Sign Up' : 'Sign In'} <span>&rarr;</span>
                        </button>
                        {message && <p>{message}</p>}

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