
const LoginForm = () => {

    return (
        <>
        <div className="form-container">
            <h1>Login</h1>
            <form action="" method="POST">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="Enter username"/>

                <label htmlFor="password">Password</label>
                <input type="text" name="password" placeholder="Enter password"/>
                <button>Login</button>
            </form>
        </div>
        </>
    );
}

export default LoginForm;