import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm py-3 px-4 md:px-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="./logo.svg" alt="Tileswale" className="h-10" />
        </Link>

        <div className="flex items-center">
          <Link to="/profile" className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <img
                src="/path/to/profile-icon.png"
                alt="Profile"
                className="h-6 w-6"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23718096' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'%3E%3C/path%3E%3Ccircle cx='12' cy='7' r='4'%3E%3C/circle%3E%3C/svg%3E";
                }}
              />
            </div>
            <span className="ml-2 text-sm font-medium hidden md:block">
              My Profile
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
