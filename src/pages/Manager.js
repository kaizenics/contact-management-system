import React from "react";
import { Link } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar /> 
        <div className="flex items-center justify-between w-full px-8 py-4 bg-gray-700 text-white">
          <h1 className="text-lg font-bold">Contact Manager System</h1>
          <input type="text" className="ml-auto w-1/3 p-2 rounded-md" placeholder="Search contacts"/>
          <Link to="/Form" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <IoAddCircleOutline className="w-4 h-4 inline-block mr-2" />
            Search
          </Link>
          <Link to="/Form" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <IoAddCircleOutline className="w-4 h-4 inline-block mr-2" />
            Add Contact
          </Link>
        </div>
        <div className="w-full p-8">
          <p className="mb-8 text-lg text-gray-700">This is a simple contact manager system.</p>
          <div className="bg-gray-200 shadow-lg rounded-lg p-20 h-auto">
            {/* Contacts input goes here */}
          </div>
        </div>
    </>
  );
}

export default Home;
