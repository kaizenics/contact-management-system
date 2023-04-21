import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiHome, FiUser, FiClipboard, FiInfo } from "react-icons/fi";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const DirectLogout = () => {
    navigate('/');
  }

  return (
    <nav className="bg-cyan-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/Home" className="text-white flex items-center">
                <span>Contact System</span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/Home"
                  className={
                    location.pathname === "/Home"
                      ? "flex items-center px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-800"
                      : "flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                  }
                >
                  <FiHome className="w-5 h-5 mr-2" />
                  <span>Home</span>
                </Link>
                <Link
                  to="/Manager"
                  className={
                    location.pathname === "/Manager"
                      ? "flex items-center px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-800"
                      : "flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                  }
                >
                  <FiUser className="w-5 h-5 mr-2" />
                  <span>Manager</span>
                </Link>
                <Link
                  to="/Form"
                  className={
                    location.pathname === "/Form"
                      ? "flex items-center px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-800"
                      : "flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                  }
                >
                  <FiClipboard className="w-5 h-5 mr-2" />
                  <span>Forms</span>
                </Link>
                <Link
                  to="/About"
                  className={
                    location.pathname === "/About"
                      ? "flex items-center px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-800"
                      : "flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                  }
                >
                  <FiInfo className="w-5 h-5 mr-2" />
                  <span>About</span>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <button onClick={DirectLogout} className="ml-4 bg-red-500 text-white font-bold py-2 px-4 rounded">
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
