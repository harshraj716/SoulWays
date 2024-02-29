import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../../Page/LoginPage.css";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import showToast from "../../Utils/toastUtils";
import { auth } from "../../firebase/firebaseConfig";
import { toast } from 'react-toastify';
import GoogleLogin from "../OAuth/GoogleLogin";

const SignUp = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const navigate = useNavigate();
  const [signUpValue, setSignUpValue] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errMessage, setErrorMessage] = useState("");

  const handleSubmit = () => {
    const { email, password } = signUpValue;

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error("Invalid email format");
      showToast("Invalid email format. Enter a valid email", "error"); 
      return;
    }

    // Validate password length
    if (password.length < 6) {
      console.error("Password should be at least 6 characters long");
      return;
    }

    setIsDisabled(true);
    createUserWithEmailAndPassword(
      auth,
      signUpValue.email,
      signUpValue.password
    )
      .then((res) => {
        setIsDisabled(false);
        const user = res.user;
        updateProfile(user, {
          displayName: signUpValue.username,
        });
        showToast(toast,"User Account Created Successfully", "success"); 
        console.log("user details", user);
        navigate("/home");
      })
      .catch((error) => {
        setIsDisabled(false);
        setErrorMessage(error.message);
        if (error.code === "auth/email-already-in-use") {
          showToast(
            "Email already in use. Try a different email",
            "error"
          ); 
        }
      });

    setErrorMessage("");
    console.log(signUpValue);
  };
  
  return (
    <form action="#" className="sign-up-form loginForm">
      <h2 className="title">Sign up</h2>
      <div className="input-field">
        <FontAwesomeIcon icon={faUser} className="my-auto mx-auto" />
        <input
          className="LoginInput"
          type="text"
          placeholder="Username"
          value={signUpValue.username}
          onChange={(e) =>
            setSignUpValue({ ...signUpValue, username: e.target.value })
          }
        />
      </div>
      <div className="input-field">
        <FontAwesomeIcon icon={faEnvelope} className="my-auto mx-auto" />
        <input
          className="LoginInput"
          type="email"
          placeholder="Email"
          value={signUpValue.email}
          onChange={(e) =>
            setSignUpValue({ ...signUpValue, email: e.target.value })
          }
        />
      </div>
      <div className="input-field">
        <FontAwesomeIcon icon={faLock} className="my-auto mx-auto" />
        <input
          className="LoginInput"
          type="password"
          placeholder="Password"
          value={signUpValue.password}
          onChange={(e) =>
            setSignUpValue({ ...signUpValue, password: e.target.value })
          }
        />
      </div>
      <button className="btn" onClick={handleSubmit} disabled={isDisabled}>
        Sign Up
      </button>
          <GoogleLogin/>
    </form>
  );
};

export default SignUp;
