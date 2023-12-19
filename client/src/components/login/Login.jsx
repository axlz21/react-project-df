import "./login.css"
import React, { useContext } from 'react';
import  useForm  from "../../hooks/useForm"
import AuthContext from "../../context/authContext";
export default function Login(){

    const { loginSubmitHandler } = useContext(AuthContext)
    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        email: '',
        password: '', 
    });
    return(
        
        <div className="center-container">
            <form id="login" onSubmit={onSubmit}>
        <div className="cover">
            <h1>Login</h1>
            <input type="text" placeholder="email" name="email" onChange={onChange} value={values.email}></input>
            <input type="password" placeholder="password" name="password" onChange={onChange} value={values.password}></input>

            <button type="submit" className="login-btn">Login</button>
            <p className="text">Or login using</p>
            <div className="alt-login">
                <div className="facebook"></div>
                <div className="google"></div>
            </div>
        </div>
        </form>
        </div>
        
    )
}