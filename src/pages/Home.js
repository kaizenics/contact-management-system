import React from "react";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="max-w-full pt-5 relative flex justify-center items-center">
        <div className="flex flex-row max-w-full mx-auto bg-white rounded-md shadow-md overflow-hidden">
          <div className="flex-1">
            <img className="object-cover h-102 w-full z-10" src="https://www.webdew.com/hubfs/8-testimonial-video-ideas-that-will-work-for-you-and-your-business.svg" alt="" />
          </div>
          <div className="flex-1 bg-black bg-opacity-50 p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Contact Management System</h2>
            <p className="text-lg">A powerful tool to manage your contacts and stay organized.</p>
            <button className="bg-white text-black px-4 py-2 rounded-md mt-4">Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;


