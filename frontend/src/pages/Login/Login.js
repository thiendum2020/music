import './login.css'
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/authActions";
import { useNavigate } from "react-router-dom";

const Login = () => {
    let navigate = useNavigate()
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { isAuthenticated, error, loading } = useSelector(state => state.authReducer)

    useEffect(() => {

        if (isAuthenticated) {
            //Nếu đã có user login thì chuyển về trang chủ
            navigate('/')
        }
        if (error) {
            alert(error)
        }
    }, [dispatch, isAuthenticated, navigate]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
    };

    return (
        <div className="login-container">
            <div className="login-center">
                <div className="login-box">
                    <p>Please login to continue.</p>
                    <br />
                    <div className="login-form">
                        <form onSubmit={submitHandler}>
                            <div className="login-email">
                                <input className="login-input" type="email" placeholder="Email" value={email} onChange={(e) =>
                                    setEmail(e.target.value)
                                } />
                            </div>
                            <div className="login-password">
                                <input className="login-input" type="password" placeholder="Password" value={password} onChange={(e) =>
                                    setPassword(e.target.value)} />
                            </div>
                            <button className="login-btn" type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login