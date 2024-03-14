import React from "react";
import ItemsContainer from "./ItemsContainer";

const Footer = () => {
  return (
    <footer className="bg-[#141414]  text-white">
      <ItemsContainer />
      <div
        className="  gap-10
      text-center pt-2 text-gray-600 text-sm pb-8"
      >
         Copyright &copy; {new Date().getFullYear()} <span className="font-bold">SoulWays</span> All rights reserved
    
      </div>
    </footer>
  );
};

export default Footer;
