import React from 'react';
import { Link } from 'react-router-dom';
import "./loginPage.css";


const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-header">
        <h1>LocalMart</h1>
      </div>
      <div className="login-box">
        <h2>Shop Owner Login</h2>
        <form>
          <div className="form-group">
            <label>Username or Email</label>
            <input type="text" placeholder="Enter your username or email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <div className="form-footer">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="signup-link">
          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
          <p>Admin? <Link to="/admin-login">Admin Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;