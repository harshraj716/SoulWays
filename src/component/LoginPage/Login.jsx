import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../../Page/LoginPage.css";
import showToast from "../../Utils/toastUtils";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebaseConfig";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import GoogleLogin from "../OAuth/GoogleLogin";

const Login = () => {
  const navigate = useNavigate();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [loading, setLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [signInValue, setSignInValue] = useState({
    email: "",
    password: "",
  });
  const [errMessage, setErrorMessage] = useState("");

  const handleSubmit = () => {
    const { email, password } = signInValue;

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
    setErrorMessage("");

    setIsDisabled(true);
    signInWithEmailAndPassword(auth, signInValue.email, signInValue.password)
      .then((res) => {
        setIsDisabled(false);
        console.log("user details", res);
        showToast(toast, "User Login successfully", null, "success");
        navigate("/home");
      })
      .catch((error) => {
        setIsDisabled(false);
        showToast(
          toast,
          "Login failed ! password or email is incorrect",
          null,
          "error"
        );
        setErrorMessage(error.message);
      });
  };

  return (
    <form action="#" className="sign-in-form loginForm">
      <h2 className="title">Sign in</h2>

      <div className="input-field">
        <FontAwesomeIcon icon={faEnvelope} className="my-auto mx-auto" />
        <input
          className="LoginInput"
          type="email"
          placeholder="Email"
          value={signInValue.email}
          onChange={(e) =>
            setSignInValue({ ...signInValue, email: e.target.value })
          }
        />
      </div>
      <div className="input-field">
        <FontAwesomeIcon icon={faLock} className="my-auto mx-auto" />
        <input
          className="LoginInput"
          type="password"
          placeholder="Password"
          value={signInValue.password}
          onChange={(e) =>
            setSignInValue({ ...signInValue, password: e.target.value })
          }
        />
      </div>
      <button className="btn" onClick={handleSubmit} disabled={isDisabled}>
        Sign In
      </button>
            <GoogleLogin/>
    </form>
  );
};

export default Login;
