import "./AuthForm.css";





const AuthForm = () => {



    // const button1 = document.querySelector("#button1");
    // var newText = "hello"

    // button1.onclick = change;
    // function change() {
    //     button1.innerText = (newText);
    // }


    return (
        <div className="auth-container">

            <form className="auth-form">
                <div className="auth-content">
                    <h1>Sign in</h1>
                    <input className="auth-login" type="text" placeholder="username" />
                    <input className="auth-login" type="password" placeholder="password" />
                    <div className="auth-button">
                        <button id="button1">Submit</button>
                    </div>
                </div>
            </form>

        </div>
    )
}
export default AuthForm;