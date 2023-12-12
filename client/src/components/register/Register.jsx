import React from 'react';

export default function Register() {
    return (
        <div className="center-container">
            <div className="cover">
                <h1>Register</h1>
                <input type="text" placeholder="username"></input>
                <input type="text" placeholder="email"></input>
                <input type="password" placeholder="password"></input>
                <input type="repass" placeholder="password"></input>


                <div className="login-btn">Register</div>
            </div>
        </div>
    )
}
