import Login from "../component/LoginSection/Login";
import SignUp from "../component/LoginSection/SignUp";
import React, { useState } from 'react';
import './LoginPage.css'

const LoginOrSign = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  return (
    <>
      <div className={`loginContainer ${isSignUpMode ? "sign-up-mode" : ""}`}>
        <div className="forms-container">
          <div className="signin-signup">
            <Login />
            <SignUp />
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3 className="loginh3">New here?</h3>
              <p className="loginp">Join SoulWays and be the part of divine.</p>
              <button className="btn transparent" onClick={handleSignUpClick}>
                Sign up
              </button>
            </div>
            <img src="/img/dogLogin1.svg" class="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3 className="loginh3">One of us ?</h3>
              <p className="loginp">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button
                onClick={handleSignInClick}
                className="btn transparent"
                id="sign-in-btn"
              >
                Sign in
              </button>
            </div>
            <img src="/img/dogLogin.svg" class="image" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginOrSign;
