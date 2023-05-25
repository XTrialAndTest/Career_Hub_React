import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar fixed top-0 left-0 right-0 z-50 flex justify-between items-center gap-8 p-4 bg-white shadow">
      <div className="logoDiv">
        <h1 className="logo text-2xl text-blueColor">
        <strong><Link to="/">Career</Link></strong><Link to="/">Hub</Link>
        </h1>
      </div>

      <div className="menu flex gap-8">
        <li className="menulist text-gray-600 hover:text-blueColor">
          <Link to="/jobs">Jobs</Link>
        </li>
        <li className="menulist text-gray-600 hover:text-blueColor">
          <Link to="/companies">Companies</Link>
        </li>
        <li className="menulist text-gray-600 hover:text-blueColor">
          <Link to="/about">About</Link>
        </li>
        <li className="menulist text-gray-600 hover:text-blueColor">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="menulist text-gray-600 hover:text-blueColor">
          <Link to="/login">Login</Link>
        </li>
        <li className="menulist text-gray-600 hover:text-blueColor">
          <Link to="/register">Register</Link>
        </li>
      </div>
    </div>
  );
};

export default NavBar;

