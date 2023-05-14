import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-row w-full max-w-full mx-auto mb-96 bg-white rounded-md shadow-md overflow-hidden">
          <div className="flex-1">
            <img className="object-cover h-102 w-full z-10" src="https://www.webdew.com/hubfs/8-testimonial-video-ideas-that-will-work-for-you-and-your-business.svg" alt="" />
          </div>
          <div className="flex-1 bg-gradient-to-r from-slate-800 to-slate-900 p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Contact Management System</h2>
            <p className="text-lg pb-5">A website tool that allows you to store and organize contact information for people and organizations that you interact with.</p>
            <Link to="/Manager" className="bg-emerald-500 text-white transition duration-300 ease-in-out px-4 py-2 rounded-md mt-4 font-semibold mr-2 hover:bg-emerald-700">Contact Manager</Link>
            <Link to="/Form" className="bg-emerald-500 text-white transition duration-300 ease-in-out px-4 py-2 rounded-md mt-4 font-semibold mr-2 hover:bg-emerald-700">Add Contacts</Link>
          </div>
        </div>
      </div>
    </>
  );
}




