import "./AuthForm.css";

const AuthForm = ()=>{
    return(
        <div className="auth-container">

            <form className="auth-form">
                <h1>Sign in</h1>
                <input className="auth-login" type="text" placeholder="username"/>
                <input className="auth-login" type="password" placeholder="password"/>
            </form>
            
        </div>
    )
}
export default AuthForm;