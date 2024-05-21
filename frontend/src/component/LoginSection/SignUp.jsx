import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../../Page/LoginPage.css";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast';
import GoogleLogin from "../OAuth/GoogleLogin";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";

const SignUp = () => {
  const BASE_URL = "http://localhost:8000";
  const navigate = useNavigate();
  const { updateUser } = useAuth(); 
  const [isDisabled, setIsDisabled] = useState(false);
  const [signUpValue, setSignUpValue] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errMessage, setErrorMessage] = useState("");

  const handleSubmit = async () => {
    const { username, email, password } = signUpValue;

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error("Invalid email format");
      return;
    }

    // Validate password length
    if (password.length < 6) {
      console.error("Password should be at least 6 characters long");
      return;
    }

    setIsDisabled(true);

    try {
      axios.defaults.withCredentials = true;
      const response = await axios.post(`${BASE_URL}/api/signup`, {
        username, email, password
      });
      updateUser(response.data.user); 
      toast.success('User signup successful!');
      navigate("/");
    } catch (error) {
      setIsDisabled(false);
      setErrorMessage(error.message);
      toast.error('Signup failed! Please try again.');
    }
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
