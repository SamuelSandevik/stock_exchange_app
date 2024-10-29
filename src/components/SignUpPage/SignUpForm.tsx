import './signUpScss/signUp.scss'

const SignUpForm = () => {

    return (
        <>
        <div className="form-container">
            <div>
                <div className='text'>
                    <h1>Sign Up</h1>
                    <p>Welcome back!</p>
                    <p>Enter details to proceed</p>
                </div>
                <form action="http://localhost:3000/signUpForm" method="POST" className='form'>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" placeholder="Enter username"/>

                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" placeholder="Enter password"/>
                    <button className='signUpBtn'>Sign Up</button>
                </form>
            </div>
        </div>
        </>
    );
}

export default SignUpForm;