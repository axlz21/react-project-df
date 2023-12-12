import "./login.css"
import React from 'react';
export default function Login(){
    return(
        <div className="center-container">
        <div className="cover">
            <h1>Login</h1>
            <input type="text" placeholder="username"></input>
            <input type="password" placeholder="password"></input>

            <div className="login-btn">Login</div>
            <p className="text">Or login using</p>
            <div className="alt-login">
                <div className="facebook"></div>
                <div className="google"></div>
            </div>
        </div>
        </div>
    )
}