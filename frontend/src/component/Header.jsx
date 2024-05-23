import React from "react";
import NavLink from "./NavLink";
import { Dropdown, DropdownItem, DropdownDivider } from "flowbite-react";
import MobileMenu from "./MobileMenu";
import { Link, useNavigate } from "react-router-dom";
import { navLinks } from "../CommomData";
import { FaHome, FaCog, FaSignOutAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import defaultAvatar from '../images/profile.avif';

const Header = () => {
  const { user,logout } = useAuth();
  const navigate = useNavigate();
  console.log('user',user)
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
    <header className="section-padding bg-gray-800 shadow-lg top-0 left-0 w-full z-50">
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
                      <img
                      src={defaultAvatar}
                      className="w-8 h-8 rounded-full"
                      alt="Profile"
                    />
                    )}
                    <span className="text-white mr-2 font-bold">
                      {user?.username || user?.displayName }
                    </span>
                  </button>
                }
              >
                {/* Dropdown items */}
                <div className="flex flex-col">
                  <Link to='/'>
                  <DropdownItem className="px-4 py-2 hover:bg-gray-400">
                    <FaHome className="mr-4 text-lg font-bold" /> Home
                  </DropdownItem>
                  </Link>
                  <Link to='/user/profile'>
                  <DropdownItem className="px-4 py-2 bg-transparent hover:bg-gray-400">
                    <FaCog className="mr-2 text-lg font-bold" /> Profile
                  </DropdownItem>
                  </Link>
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
