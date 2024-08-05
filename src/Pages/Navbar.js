import React, { useState } from "react";
import pic from "../Img/logo-white 1.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <img className="h-12 w-auto" src={pic} alt="Your Company" />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-500 focus:outline-none lg:hidden"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navbar Links */}
        <div className={`w-full lg:w-auto ${isOpen ? "block" : "hidden"} lg:flex lg:items-center lg:space-x-4`}>
          <div className="flex flex-col lg:flex-row lg:space-x-4">
            <Link
              to="/"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:text-[#0061E0]"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:text-[#0061E0]"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:text-[#0061E0]"
            >
              Projects
            </Link>
            <Link
              to="/blogs"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:text-[#0061E0]"
            >
              Blogs
            </Link>
            <Link
              to="/contacts"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:text-[#0061E0]"
            >
              Contacts
            </Link>
          </div>
        </div>

        {/* Search and Button */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-60 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search Mockups, Logos..."
              required
            />
          </div>
          <button className="bg-[#0061E0] text-white w-28 h-12">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
