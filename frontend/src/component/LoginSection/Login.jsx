import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../../Page/LoginPage.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import GoogleLogin from "../OAuth/GoogleLogin";
import axios from "axios";
import { useAuth } from "../../context/AuthContext"; 

const Login = () => {
    const BASE_URL = "http://localhost:8000";
    const navigate = useNavigate();
    const [isDisabled, setIsDisabled] = useState(false);
    const {user} = useAuth()
    const [signInValue, setSignInValue] = useState({
        email: "",
        password: "",
    });
    const [errMessage, setErrorMessage] = useState("");
    const { updateUser } = useAuth(); 
   
    const handleSubmit = async () => {
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

        try {
            axios.defaults.withCredentials = true;
            const response = await axios.post(`${BASE_URL}/api/login`, {
                email,
                password,
            });
            console.log('this is response', response.data.user);
            updateUser(response.data.user); 
            toast.success("User login successfully!");
            navigate("/");
        } catch (error) {
          console.error(error);
          setIsDisabled(false);
          setErrorMessage(error.message);
          toast.error("Login failed! Please check your credentials.");
        }
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
            <GoogleLogin />
        </form>
    );
};

export default Login;
