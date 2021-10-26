import { Link } from "react-router-dom";
import React from "react";
import "./Login.css";

function Login() {
  return (
    <section className="login-section">
      <form className="login-form">
        <h2 className="login-h2">Log In</h2>
        <label htmlFor="email" className="login-label">
          Email:
        </label>
        <input type="email" id="email" className="login-input" />
        <label htmlFor="password" className="login-label">
          Password:
        </label>
        <input type="password" id="password" className="login-input" />
        <button type="submit" className="login-btn">
          Log in
        </button>
        <Link to="/register" className="login-a">Not registred yet? Click here.</Link>
      </form>
    </section>
  );
}

export default Login;
