import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavLink = ({ to, label, className, handleLinkClick }) => {
  const pathname = useLocation().pathname;
  return (
    <Link
      to={to}
      className={` text-white hover:text-[#92b0e8] transition-colors relative block after:block after:absolute 
    after:left-0 after:h-0.5 after:bg-[#FF8911] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition
    after:duration-300 after:origin-right after:hover:origin-left
     ${className}
     ${
       pathname === to
         ? "after:scale-x-100 after:origin-right"
         : "after:scale-x-0 after:origin-left"
     }
   `}
   onClick={handleLinkClick}
    >
      {label}
    </Link>
  );
};

export default NavLink;
