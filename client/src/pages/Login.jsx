//login.jsx
import React, { useState } from "react";
import "../styles/Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { colgroup } from "framer-motion/client";
import { useUserContext } from "../../context/UserContext";

const Login = () => {
  const { setUser } = useUserContext(); // Utilisation du setUser du contexte
  const [email, setEmail] = useState("");
  const [mdp, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // To display error messages
  const navigate = useNavigate(); // For navigation after successful login
  
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    try {
      const response = await axios.post("http://localhost:3000/api/clients/loginClient", { email, mdp });
      console.log(response);
      const userData = response.data.user;
      setUser(userData); // Mettez à jour l'état avec les informations de l'utilisateur
      console.log("Login successful:", response.data);
      alert(`Login successful!`);
      console.log(userData);
      navigate("/"); // Redirige vers la page d'accueil après connexion
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="login-title">Welcome Back</h1>
        <p className="login-subtitle">Log in to access your account</p>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={mdp}
            onChange={(e) => setPassword(e.target.value)} // Update password state
          />
          <button type="submit" className="login-button">
            Log In
          </button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Show error message */}
        <p className="signup-redirect">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
