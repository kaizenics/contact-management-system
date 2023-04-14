import React from "react";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
     <Navbar />
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center text-gray-700 my-8">My Outmost Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-4 bg-gray-100 rounded-lg shadow-lg flex flex-col">
          <h2 className="text-xl font-bold mb-2">React Web Development</h2>
          <p className="mb-4">
            First React Web Development using BrowserRouter Element. It has a Simple Navbar with Linked Home, About, Contact, and Gallery Features.
          </p>
          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-center self-end"
          >
            View Project
          </a>
        </div>

        <div className="p-4 bg-gray-100 rounded-lg shadow-lg flex flex-col">
          <h2 className="text-xl font-bold mb-2">C++ Source Code Projects</h2>
          <p className="mb-4">
            Complied Basic C++ First-Year BSIT Activity Projects. Click the View Project to direct to my Github Profile.
          </p>
          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-center self-end"
          >
            View Project
          </a>
        </div>

        <div className="p-4 bg-gray-100 rounded-lg shadow-lg flex flex-col">
          <h2 className="text-xl font-bold mb-2">Java Source Code Projects</h2>
          <p className="mb-4">
            Compiled Java OOP/Data Structure Activities in my First/Second Year BSIT Journey. Click the View Project to direct to my Github Profile.
          </p>
          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-center self-end"
          >
            View Project
          </a>
        </div>

        <div className="p-4 bg-gray-100 rounded-lg shadow-lg flex flex-col">
          <h2 className="text-xl font-bold mb-2">C# GUI Game Development/Machine Leaning Projects</h2>
          <p className="mb-4">
            C# GUI Game Development/Machine Learning Projects will be compiled in my Github Profile soon. Click the View Project to view all of my Repositories.
          </p>
          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-center self-end"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
   </>
  );
}

export default Home;