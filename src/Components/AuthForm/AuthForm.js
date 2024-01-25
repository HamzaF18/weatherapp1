import "./AuthForm.css";

const AuthForm = ()=>{
    return(
        <div className="auth-container">

            <form className="auth-form">
                <div className="auth-content">
                <h1>Sign in</h1>
                <input className="auth-login" type="text" placeholder="username"/>
                <input className="auth-login" type="password" placeholder="password"/>
                <button>Submit</button>
                </div>
            </form>
            
        </div>
    )
}
export default AuthForm;