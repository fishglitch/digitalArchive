import React, { useEffect, useState } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../App";
import "../css/Login.css";

const Login = ({ token, setToken, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const result = await loginUser(email, password);
      // Save token to local storage
      localStorage.setItem("token", result.token);

      // If login is successful, set the token and user
      setToken(result.token);

      navigate("/account");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
            <div>
                <label>
                    Email:
                    <input 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Password:
                    <input 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
            </div>
            <button type="submit">Login</button>
            {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error */}
        </form>
    </div>
);


};
export default Login;
