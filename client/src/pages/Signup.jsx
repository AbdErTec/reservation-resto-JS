import React, { useState } from "react";
import "../styles/SignUp.css";
import axios from "axios";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mdp: "",
    // confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState(""); // To display error messages
  const [successMessage, setSuccessMessage] = useState(""); // To display success messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    // if (formData.password !== formData.confirmPassword) {
    //   setErrorMessage("Passwords do not match.");
    //   return;
    // }

    try {
      const response = await axios.post("http://localhost:3000/api/clients/addClient", {
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        mdp: formData.mdp,
      });

      console.log("Sign-up successful:", response.data);
      setSuccessMessage("Account created successfully! You can now log in.");
      setErrorMessage(""); // Clear any previous error
    } catch (error) {
      console.error("Sign-up error:", error.response?.data || error.message);
      setErrorMessage(error.response?.data?.error || "An error occurred. Please try again.");
      setSuccessMessage(""); // Clear any success message
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        <h1 className="signup-title">Create an Account</h1>
        <p className="signup-subtitle">Join us for the best experience</p>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstname"
            placeholder="Firstname"
            required
            value={formData.firstname}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastname"
            placeholder="Lastname"
            required
            value={formData.lastname}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="mdp"
            placeholder="Password"
            required
            value={formData.mdp}
            onChange={handleChange}
          />
          {/* <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
          /> */}
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display errors */}
        {successMessage && <p className="success-message">{successMessage}</p>} {/* Display success */}
        <p className="login-redirect">
          Already have an account? <a href="/login">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
