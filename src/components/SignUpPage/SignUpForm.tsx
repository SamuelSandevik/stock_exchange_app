

const SignUpForm = () => {

    return (
        <>
        <div className="form-container">
            <h1>Sign Up</h1>
            <form action="http://localhost:3000/signUpForm" method="POST">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="Enter username"/>

                <label htmlFor="password">Password</label>
                <input type="text" name="password" placeholder="Enter password"/>
                <button>Sign Up</button>
            </form>
        </div>
        </>
    );
}

export default SignUpForm;