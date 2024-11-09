import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login, error } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(
      "Login form submitted with email:",
      email,
      "and password:",
      password
    );

    const success = await login(email, password);
    if (success) {
      navigate("/");
    } else {
      alert(error || "Wrong credentials!");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Log in</button>
      </form>
      <p>
        Don't have an account? <a href="/register">Sign up!</a>
      </p>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
