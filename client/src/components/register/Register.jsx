import React, { useContext } from 'react';
import AuthContext from '../../context/authContext';
import useForm from '../../hooks/useForm';

export default function Register() {

    const {registerSubmitHandler} = useContext(AuthContext);
    const {values, onChange, onSubmit} = useForm(registerSubmitHandler, {
        username: '',
        email: '',
        password: '',
        repass: '',
    })
    return (
        <div className="center-container">
            <form onSubmit={onSubmit}>
            <div className="cover">
                <h1>Register</h1>
                <input type="text" name="username" placeholder="username" onChange={onChange} value={values.username}></input>
                <input type="text" name="email" placeholder="email" onChange={onChange} value={values.email}></input>
                <input type="password" name="password" placeholder="password" onChange={onChange} value={values.password}></input>
                <input type="password" name="repass" placeholder="password" onChange={onChange} value={values.repass}></input>


                <button type="submit" className="login-btn">Register</button>
            </div>
            </form>
        </div>
    )
}
