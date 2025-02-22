import React from 'react';
import { motion } from 'framer-motion';
import Tour from './HotelBookingList/Tour';
import { useAuth } from '../context/AuthContext';
import defaultAvatar from '../images/profile.avif';
import toast from "react-hot-toast";
import {  useNavigate } from "react-router-dom";

const UserProfile = () => {
  const { user ,logout} = useAuth();
  console.log(user);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout(); 
      toast.success("User logout successfully!");
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };


  return (
    <div>
      <Tour subpage='profile'/>
        <div className="container mx-auto">
          <div className="flex justify-center  h-screen">
            <motion.div
              className={`shadow-2xl rounded-[2rem]`}
              style={{ width: '100%', paddingTop: '3em' }}
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }} 
            >
              <div className="title flex flex-col items-center">
                <h4 className="text-5xl font-bold">Profile</h4>
                <span className="py-4 text-xl w-2/3 text-center text-gray-500">You can update the details.</span>
              </div>

              <div className="profile flex justify-center py-4">
                <label htmlFor="profile">
                {user?.photoURL ? (
                  <img src={user?.photoURL} className={`profile_img1 profile_img2`} alt="avatar" />
                ) : (
                  <img src={defaultAvatar} className={`profile_img1 profile_img2`} alt="avatar" />
                )}
                  
                </label>

              </div>

                <div className=" flex flex-col items-center gap-6">
                  <div className="name flex  text-gray-500 w-full justify-center items-center gap-10">
                    <input
                      className={`textbox1 textbox2 `}
                      type="text"
                      placeholder="FullName"
                      defaultValue={user.username}
                      readOnly
                    />
                  </div>

                  <div className="name flex w-full text-gray-500 justify-center items-center gap-10">
                    <input
                      className={`textbox1 textbox2 `}
                      type="text"
                      placeholder="Email*"
                      defaultValue={user.email}
                      readOnly
                    />
                  </div>
                </div>
              <div className="text-center py-4">
                <span className="text-gray-500">
                  come back later?{' '}
                  <button className="text-red-500" onClick={handleLogout}>
                    Logout
                  </button>
                </span>
              </div>
            </motion.div>
          </div>
        </div>
    </div>
  );
};

export default UserProfile;
