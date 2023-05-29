import React from "react";
import { Link } from "react-router-dom";
import { IoAddOutline, IoSearch } from "react-icons/io5";
import Navbar from "../components/Navbar";
import Contacts from "../components/Contacts";

export default function Manager() {
  return (
    <>
      <Navbar /> 
        <div className="flex items-center justify-between w-full px-8 py-4 bg-gray-700 text-white">
          <h1 className="text-lg font-bold">Contact Manager System</h1>
          <input type="text" className="ml-auto w-1/3 p-2 rounded-md mr-2 text-gray-800" placeholder="Search contacts"/>
          <Link to="/Form" className="bg-blue-500 transition duration-300 ease-in-out hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
            <IoSearch className="w-4 h-4 inline-block mr-2" />
            Search
          </Link>
          <Link to="/Form" className="bg-blue-500 transition duration-300 ease-in-out hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <IoAddOutline className="w-4 h-4 inline-block mr-2" />
            Add Contact
          </Link>
        </div>
       <Contacts/>
    </>
  );
  }
