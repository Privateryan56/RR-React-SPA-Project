import React from "react";
import logo from "../Assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#004346] text-gray-300">
      <div>
        <img src={logo} alt="logo image" style={{ width: "50px" }} />
      </div>
      <div>
        <ul className="flex">
          <li>Homes</li>
          <li>About</li>
          <li>Experience</li>
          <li>Contact</li>
        </ul>
      </div>

      
      <div className="hidden">
        <FaBars />
      </div>

      
      <ul className="hidden">
        <li>Homes</li>
        <li>About</li>
        <li>Skills</li>
        <li>Contact</li>
      </ul>

      
      <div className="hidden">
          
      </div>


    </div>
  );
};

export default Navbar;
