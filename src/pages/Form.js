import React from "react";
import { useState } from 'react';
import Navbar from "../components/Navbar";

export default function Form() {
  const [data, setData] = useState({
    name: '',
    contact:'',
    email:'',
    address:'',
    profile: '',
})

async function addContactDataHandler (data) {
    if(data.name == ''){
        alert('Please enter Full Name');
        return
    }
    if(data.contact == ''){
        alert('Please enter Contact Number');
        return
    }
    if(data.email == ''){
        alert('Please enter Email Address');
        return
    }
    if(data.address == '') {
      alert('Please enter Address');
      return
    }
    if(data.profile == '') {
      alert('Please upload your Profile Picture');
      return
    }
    else{
        try{
            var headers = {
                Accept: "application/json",
                "Content-Type": "application.json"
            };
            const url = "http://localhost/apibackend/addContact.php";
            const res = await fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(data)
            }).then(response => response.json())
            .then(response => {
                alert(response[0].Message)
            }).catch(error => {
                console.log(error)
            })
        }catch(error){console.log(error)}
    }
}

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800">Add Contact</h2>
          </div>
          <form className="mt-8 space-y-6">
            <div className="rounded-full bg-gray-100 h-32 w-32 mx-auto mb-4">
              {/* Profile picture display */}
            </div>
          <div className="center rounded-md shadow-sm -space-y-px">
            <div className="mb-4">
              <label
                htmlFor="full_name"
                className="block text-gray-700 font-bold mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="full_name"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                placeholder="Name"
              />
            </div>
            <div className="pt-4 file:mb-4">
              <label
                htmlFor="contact_number"
                className="block text-gray-700 font-bold mb-2"
              >
                Contact Number
              </label>
              <input
                type="text"
                id="contact_number"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                placeholder="09XXXXXXXX"
              />
            </div>
            <div className="pt-5 mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                placeholder="appleseed@example.com"
              />
            </div>
            <div className="pt-4 mb-4">
              <label
                htmlFor="address"
                className="block text-gray-700 font-bold mb-2"
              >
                Address
              </label>
              <textarea
                id="address"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                rows="3"
                placeholder="Enter Address"
              ></textarea>
            </div>
          </div>
            <div className="mb-4">
              <label
                htmlFor="profile_picture"
                className="block text-gray-700 font-bold mb-2"
              >
                Profile Picture
              </label>
              <input
                type="file"
                id="profile_picture"
                className="form-input w-full rounded-md border-gray-300"
              />
            </div>
            <button type="submit" className="bg-blue-500 transition duration-300 ease-in-out hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-center self-end">Save Contact
            </button>
          </form>
        </div>
      </div>
    </>
  );
}