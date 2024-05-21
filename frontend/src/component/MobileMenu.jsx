import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { navLinks } from "../CommomData";
import { RxCross2 } from "react-icons/rx";
import NavLink from "./NavLink";
import { IoMenu } from "react-icons/io5";
import defaultAvatar from '../images/profile.avif';
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
import { FaFacebook,FaTwitterSquare} from "react-icons/fa";
import { FaSquareInstagram,FaLinkedin } from "react-icons/fa6";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

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
    <div className=" tablet:hidden">
      <button
        className="text-white  hover:text-purple-300 translate-colors"
        onClick={toggleMenu}
      >
        <IoMenu size={20} />
      </button>

      {/* {side bar} */}
      <div
        className={`w-full h-full flex section-padding flex-col bg-cyan-500 fixed top-0 left-0 z-50 transition-all duration-300 ease-in-out transform 
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex w-full items-center justify-between h-20 max-width border-b border-peach">
          <Link href={"/"}>
            <h5 className="text-purple-600 text-xl font-semibold" onClick={handleLinkClick}>
              Soalways
            </h5>
          </Link>
          <button
            className="text-gray-700 hover:text-purple translate-colors"
            onClick={toggleMenu}
          >
            <RxCross2 />
          </button>
        </div>

        <nav className="flex flex-col  items-center justify-center flex-1 gap-10">
          <ul className="flex flex-col items-center gap-5">
            {navLinks.map((link, index) => {
              return (
                <li key={index}>
                  <NavLink
                    to={link.url}
                    label={link.label}
                    className="text-2xl"
                    handleLinkClick={handleLinkClick}
                  />
                </li>
              );
            })}
          </ul>
          <div className="flex space-x-8 !text-2xl ">
            <a href="#" className=""><FaFacebook /></a>
            <a href="#" className=""><FaSquareInstagram /></a>
            <a href="#" className=""><FaTwitterSquare /></a>
            <a href="#" className=""><FaLinkedin /></a>
          </div>
        </nav>

        <div className="flex flex-col items-center justify-center">
          {user ? (
            <div className="flex flex-col items-center gap-2 mt-4">
              {user?.photoURL ? (
                <img
                  src={user?.photoURL}
                  className="w-8 h-8 rounded-full"
                  alt="Profile"
                />
              ) : (
                <img
                  src={defaultAvatar}
                  className="w-8 h-8 rounded-full"
                  alt="Profile"
                />
              )}
              <span className="text-white mr-2 font-bold">
                {user?.username || user?.displayName}
              </span>
              <button className="btn btn-primary !px-6 !py-2 !text-md" onClick={handleLogout}>
                Logout
              </button>
            </div>
           ) : (
            <Link to="/login">
              <div className="p-2 px-4 border border-color-white rounded-lg">
                <button className="text-white">Sign Up</button>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
