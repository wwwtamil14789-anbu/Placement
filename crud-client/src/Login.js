import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

const Login = () => {
    const navigate = useNavigate();

    const[username,setUsername]=useState();

    const HandleSubmit = (e) => {
        e.preventDefault();
        alert("Login Successfully")

        if (username === "admin") {
            navigate("/User");
        }
        else {
            navigate("/home")
        }
    }

    return (
        <>
            <div className="login-container">
                <form class="login-form" onSubmit={HandleSubmit}>
                    <h2>Login Page</h2>

                    <div className="form-group">
                        <label>User Name</label>
                        <input type="text" className="form-control" placeholder="UserName" 
                             value={username} onChange={(e) => setUsername(e.target.value)} required />
                    </div>

                    <div className="input-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" placeholder="Enter password" pattern="[1-9]{5}" required />
                    </div>

                    <button className="button1" type="submit" required>Login</button>

                    <p className="signup-link">
                        Don't have an account? <a href="/Register">Sign Up</a>
                    </p>
                </form>
            </div>
        </>
    )
}
export default Login;