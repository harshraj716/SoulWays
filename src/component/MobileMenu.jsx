import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks, socialLinks } from "../CommomData";
import { RxCross2 } from "react-icons/rx";
import NavLink from "./NavLink";
import { IoMenu } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); 
  };
  return (
    <div className="tablet:hidden">
      <button
        className="text-white  hover:text-purple-300 translate-colors"
        onClick={toggleMenu}
      >
        <IoMenu size={20}/>
      </button>

      {/* {side bar} */}
      <div
        className={`w-full h-full flex section-padding flex-col bg-peach-600 fixed top-0 left-0 z-50 transition-all duration-300 ease-in-out transform 
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
                    href={link.url}
                    label={link.label}
                    className="text-3xl"
                    handleLinkClick={handleLinkClick}
                  />
                </li>
              );
            })}
          </ul>
          <Link href={"/contact"} className="btn btn-primary">
            <FaPhoneAlt size={24}/>
            Contact Me
          </Link>
        </nav>

        <div className="w-full h-20 flex items-center justify-between max-width border-t border-peach">
          {socialLinks.map((link, index) => {
            return (
              <a
                 key={index}
                href={link.url}
                className="text-gray-700 hover:text-purple transition-colors"
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
