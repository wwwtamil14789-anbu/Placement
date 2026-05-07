import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

const Register = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone_number, setPhoneNumber] = useState("");

    const navigate = useNavigate();

    const handleForm = (e) => {
        e.preventDefault();

        axios.post("http://localhost:3001/register", {
            username: username,
            password: password,
            
            email: email,
            phone_number: phone_number
        })
        .then((res) => {
            alert("Register Successfully");
            navigate("/");
        })
        .catch((err) => {
            console.log(err);
        });
    };

    return (
        <div className="login-container1">

            <form className="login-form1" onSubmit={handleForm}>

                <h2>Register Page</h2>

                <div className="input-group1">
                    <label>Username</label>
                    <input
                        type="text"
                        placeholder="Enter username"
                        pattern="[A-Za-z]{5,}"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>

                <div className="input-group1">
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter password"
                        pattern="[0-9]{4,}"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <div className="input-group1">
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="input-group1">
                    <label>Phone Number</label>
                    <input
                        type="text"
                        placeholder="Enter Number"
                        value={phone_number}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                </div>

                <button className="button2" type="submit">Sign Up</button>

            </form>

        </div>
    );
}

export default Register;