import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const navItem = (
  <>
    <li>
      <Link to="/" className="text-lg font-bold px-2 py-1">
        Home
      </Link>
    </li>
    <li>
      <Link to="/Course" className="text-lg font-bold px-2 py-1">
        Course
      </Link>
    </li>
    <li>
      <Link to="/Instructor" className="text-lg font-bold px-2 py-1">
        Instructor
      </Link>
    </li>
    <li>
      <Link to="/Contact" className="text-lg font-bold px-2 py-1">
        Contact
      </Link>
    </li>
  </>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("click---------------------")
  };

  return (
    <div className="bg-blue-950 w-full">
      <div className="navbar relative bg-[linear-gradient(201.85deg,#0D307B_-2.69%,#265CD3_101.46%)] text-white md:py-6 px:4 md:px-20 md:rounded-bl-[80px]">
        <div className="navbar-start">
          <div className="dropdown">
            <button onClick={toggleMenu} className="block lg:hidden w-8 h-8">
                <MenuIcon />
            </button>
            {isOpen && (
              <ul
                className="menu menu-sm dropdown-content bg-[linear-gradient(201.85deg,#0D307B_-2.69%,#265CD3_101.46%)] rounded-box z-20 mt-6 w-40 p-2 shadow"
              >
                {navItem}
              </ul>
            )}
          </div>
          <img src={logo} alt="ANI Education logo" className="h-12 md:h-20" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-6">{navItem}</ul>
        </div>
        <div className="navbar-end">
          <button className=" bg-transparent font-bold text-xl md:text-2xl px-4 py-2 rounded-full hover:bg-blue-800 transition duration-300">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
