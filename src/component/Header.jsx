import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { Dropdown, DropdownItem, DropdownDivider } from "flowbite-react";
import MobileMenu from "./MobileMenu";
import { Link, useNavigate } from "react-router-dom";
import { navLinks } from "../CommomData";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebaseConfig";
import { signOut } from "firebase/auth";
import { FaHome, FaCog, FaSignOutAlt } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import toast from "react-hot-toast";

const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogout = () => {
    if (user) {
      signOut(auth)
        .then(() => {
          toast.success("User logged out successfully");
          navigate("/");
        })
        .catch((error) => {
          toast.error("Could not log out", error);
        });
    }
  };


  return (
    <header className="absolute section-padding  top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link to="/" className="text-white font-bold lg:text-3xl text-2xl">
            SoulWays
          </Link>
        </div>
        <div className="hidden lg:flex gap-12 items-center ">
          <nav>
            <ul className="flex items-center gap-6">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink to={link.url} label={link.label} />
                </li>
              ))}
            </ul>
          </nav>

          <div>
            {user ? (
              <Dropdown
                className="w-48"
                label={
                  <button className="flex items-center gap-2 focus:outline-none">
                    {user?.photoURL ? (
                      <img
                        src={user?.photoURL}
                        className="w-8 h-8 rounded-full"
                        alt="Profile"
                      />
                    ) : (
                      <FaCircleUser className="text-gray-600" size={24} />
                    )}
                    <span className="text-white mr-2 font-bold">
                      {user?.displayName}
                    </span>
                  </button>
                }
              >
                {/* Dropdown items */}
                <div className="flex flex-col">
                  <DropdownItem className="px-4 py-2 hover:bg-gray-400">
                    <FaHome className="mr-4 text-lg font-bold" /> Home
                  </DropdownItem>
                  <DropdownItem className="px-4 py-2 bg-transparent hover:bg-gray-400">
                    <FaCog className="mr-2 text-lg font-bold" /> Profile
                  </DropdownItem>
                  <DropdownDivider className="border-gray-500" />
                  <DropdownItem
                    className="px-4 py-2 bg-transparent hover:bg-gray-400"
                    onClick={handleLogout}
                  >
                    <FaSignOutAlt className="mr-2" /> Sign out
                  </DropdownItem>
                </div>
              </Dropdown>
            ) : (
              <Link to="/login">
                <div className="p-2 px-4 border border-color-white rounded-lg ">
                  <button className="text-white">Sign Up</button>
                </div>
              </Link>
            )}
          </div>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
