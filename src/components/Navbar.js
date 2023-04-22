import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiHome, FiUser, FiClipboard, FiInfo, FiLogOut } from "react-icons/fi";
import { FcContacts } from "react-icons/fc";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  function DirectLogout() {
    if (window.confirm("Are you sure you want to logout?")) {
      navigate('/');
    }
  }

  return (
    <nav className="bg-gradient-to-r from-blue-800 via-sky-800 to-cyan-900 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/Home" className="text-white flex items-center font-extrabold transition-colors duration-300 ease-in-out"><FcContacts className="w-7 h-8 mr-1"></FcContacts>
                <span>Contact System</span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/Home"
                  className={location.pathname === "/Home"
                    ? "flex items-center px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-800 transition-colors duration-300 ease-in-out"
                    : "flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-300 ease-in-out"
                  } >
                  <FiHome className="w-5 h-5 mr-2" />
                  <span>Home</span>
                </Link>
                <Link
                  to="/Manager"
                  className={
                    location.pathname === "/Manager"
                      ? "flex items-center px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-800 transition-colors duration-300 ease-in-out"
                      : "flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-300 ease-in-out"
                  }
                >
                  <FiUser className="w-5 h-5 mr-2" />
                  <span>Manager</span>
                </Link>
                <Link
                  to="/Form"
                  className={
                    location.pathname === "/Form"
                      ? "flex items-center px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-800 transition-colors duration-300 ease-in-out"
                      : "flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-300 ease-in-out"
                  }
                >
                  <FiClipboard className="w-5 h-5 mr-2" />
                  <span>Forms</span>
                </Link>
                <Link
                  to="/About"
                  className={
                    location.pathname === "/About"
                      ? "flex items-center px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-800 transition-colors duration-300 ease-in-out"
                      : "flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-300 ease-in-out"
                  }
                >
                  <FiInfo className="w-5 h-5 mr-2" />
                  <span>About</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
            <button onClick={DirectLogout} className="ml-4 bg-red-500 text-white font-bold py-2 px-5 rounded flex items-center"><FiLogOut className="w-5 h-6 mr-2"/>
            <span>
              Logout
              </span>
            </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
