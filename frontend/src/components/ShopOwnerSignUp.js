import React from "react";
import "./ShopOwnerSignUp.css"; // Import the CSS file

const ShopOwnerSignUp = () => {
  return (
    <div className="signup-container">
      <h2>Shop Owner Sign Up</h2>
      <form>
        <label>
          Shop Name:
          <input type="text" placeholder="Enter your shop name" required />
        </label>
        <label>
          Email Address:
          <input type="email" placeholder="Enter your email" required />
        </label>
        <label>
          Username:
          <input type="text" placeholder="Choose a username" required />
        </label>
        <label>
          Password:
          <input type="password" placeholder="Enter password" required />
        </label>
        <label>
          Confirm Password:
          <input type="password" placeholder="Confirm password" required />
        </label>
        <button type="submit">Sign Up</button>
        <button type="button">Cancel</button>
      </form>
      <p>
        Already have an account? <a href="/signin">Sign In</a>
      </p>
      <p>
        Are you an admin? <a href="/admin-signup">Admin Sign Up</a>
      </p>
    </div>
  );
};

export default ShopOwnerSignUp;