import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <nav className="bg-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to="/Home" className="text-white"> Contact System </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link to="/Home" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-white bg-gray-800"> Home </Link>
                  <Link to="/Contacts" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"> Manager </Link>
                  <Link to="/Form" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"> Forms </Link>
                  <Link to="/About" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"> About </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;