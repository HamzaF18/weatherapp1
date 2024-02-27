import React, { useState } from 'react';
import "./AuthForm.css";
import { useNavigate }  from "react-router-dom";

const AuthForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const handleSignIn = async (event) => {
        event.preventDefault();

        const signInData = {
            username: username,
            password: password
        };

        try {
            const response = await fetch('http://localhost:8000/signin/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(signInData),
            });

            if (!response.ok) {
                throw new Error('Sign in failed');
            }

            const responseData = await response.json();
            console.log('Sign in successful:', responseData);
            navigate("/dashboard");
            // Handle successful sign-in, e.g., redirect to another page
        } catch (error) {
            console.error('Sign in error:', error);
            setErrorMessage('Incorrect username or password');
            // Handle sign-in error, e.g., display error message to the user
        }
    };

    return (
        <div className="auth-container">

            <form className="auth-form" onSubmit={handleSignIn}>
                <div className="auth-content">
                    <h1>Sign in</h1>
                    <input
                        className="auth-login"
                        type="text"
                        placeholder="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        className="auth-login"
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <div className="auth-button">
                        <button id="button1" type="submit">Submit</button>
                    </div>
                </div>
            </form>

        </div>
    )
}
export default AuthForm;
