import React from "react";
import { Link, NavLink } from "react-router";
import Apps from "../../Pages/Apps/Apps";
import MyInstallation from "../../Pages/MyInstallation/MyInstallation";
import { BiHome } from "react-icons/bi";
import { RiAppStoreLine } from "react-icons/ri";
import { MdInstallDesktop } from "react-icons/md";
import { FaSquareGithub } from "react-icons/fa6";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink to={"/"}>
          <BiHome />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/apps"}>
          <RiAppStoreLine />
          Apps
        </NavLink>
      </li>
      <li>
        <NavLink to={"/my-installation"}>
          <MdInstallDesktop />
          Installation
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl" to={"/"}>
          Digicacy Apps
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link to={"https://github.com/litonhumayun"} className="btn">
          <FaSquareGithub />
          Contribute
        </Link>
      </div>
    </div>
  );
};

export default Header;
