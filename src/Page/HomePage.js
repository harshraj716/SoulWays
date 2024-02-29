import React from "react";
import showToast from "../Utils/toastUtils";
import { toast } from "react-toastify";
import { auth } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const HomePage = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const handleLogout = () => {
        if (user) {
          signOut(auth)
            .then(() => {
              showToast(toast, "Logged out successfully", "", "success");
              navigate("/");
            })
    
            .catch((error) => {
              showToast(toast, "Error logging out", error.message, "error");
            });
        }
      };
    
  return (
    <div>
      HomePage
      <button className="px-4 p-2  m-5 rounded-lg bg-orange-400 text-white" onClick={handleLogout}>LogOut</button>
      <p>{user?.displayName}</p>
      <p>{user?.email}</p>
      <img src={user?.photoURL}></img>
    </div>
  );
};

export default HomePage;
