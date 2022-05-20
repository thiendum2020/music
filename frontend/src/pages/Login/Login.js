import './login.css'
import React from 'react'

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-center">
                <div className="login-box">
                    <p>Please login to continue.</p>
                    <br />
                    <div className="login-form">
                        <form>
                            <div className="login-email">
                                <input className="login-input" type="email" placeholder="Email" />
                            </div>
                            <div className="login-password">
                                <input className="login-input" type="password" placeholder="Password" />
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