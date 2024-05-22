import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import Image from "../assets/image.png";
import Logo from "../assets/logo.png";

import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
// Assuming you have a CSS file named Login.css for styling

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const login=()=>{
    window.location.href="/position"
  }

  return (
    <div className="login-main">
      <div className="login-left">
        <img src={Image} alt="" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img src={Logo} alt="" />
          </div>
          <div className="login-center">
            <h2>Welcome back!</h2>
            <p>Please enter your details</p>
            <form>
              <input type="email" placeholder="Email" />
              <div className="pass-input-div">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                />
                {showPassword ? (
                  <FaEyeSlash
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                ) : (
                  <FaEye
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                )}
              </div>

              <div className="login-center-options">
                <div className="remember-div">
                  <input type="checkbox" id="remember-checkbox" />
                  <label htmlFor="remember-checkbox">
                    Remember for 30 days
                  </label>
                </div>
                {/* Removed Link and replaced with plain text */}
                <span className="forgot-password-text">
                  Forgot password?
                </span>
              </div>
              <div className="login-center-buttons">
                <button type="button" onClick={login}>Log In</button>
                
              </div>
            </form>
          </div>

          <p className="login-bottom-p">
            Don't have an account?{" "}
            {/* Use Link for navigation to the signup page */}
            <Link to="/signup" className="signup-button">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
