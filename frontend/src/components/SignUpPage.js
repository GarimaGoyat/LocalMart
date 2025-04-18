import React from "react";
import "./SignUpPage.css";

const SignUpPage = () => {
  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2>Shop Owner Sign Up</h2>
        <form>
          <div className="form-group">
            <label>Shop Name</label>
            <input type="text" placeholder="Enter your shop name" />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label>Username</label>
            <input type="text" placeholder="Choose a username" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm your password" />
          </div>
          <div className="form-actions">
            <button type="submit" className="signup-btn">Sign Up</button>
            <button type="button" className="cancel-btn">Cancel</button>
          </div>
        </form>
        <p>
          Already have an account? <a href="/signin">Sign In</a>
        </p>
        <p>
          Are you an admin? <a href="/admin-signup">Admin Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;