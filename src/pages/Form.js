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
  });

  async function addContactDataHandler (data) {
    if(data.name === ''){
      alert('Please enter Full Name');
      return;
    }
    if(data.contact === ''){
      alert('Please enter Contact Number');
      return;
    }
    if(data.email === ''){
      alert('Please enter Email Address');
      return;
    }
    if(data.address === '') {
      alert('Please enter Address');
      return;
    }
    if(data.profile === null) {
      alert('Please upload your Profile Picture');
      return;
    } else {
      try {
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
          alert(response[0].Message);
        }).catch(error => {
          console.log(error);
        });
      } catch(error) {
        console.log(error);
      }
    }
  }

  function handleProfilePictureChange(e) {
    const file = e.target.files[0];
    setData({ ...data, profile: file, });
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
             {data.profile && <img className="object-cover rounded-full w-full h-full" src={URL.createObjectURL(data.profile)} alt="profile"/>}
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
                  onChange={(e)=>{
                    setData({...data, name: e.target.value});
                  }}
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
                  type="tel"
                  id="contact_number"
                  name="contact_number"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                  placeholder="Phone Number" 
                  onChange={(e)=>{
                    setData({...data, contact: e.target.value});
                  }}
                />
              </div>
              <div className="pt-4 file:mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                  placeholder="Email Address" 
                  onChange={(e)=>{
                    setData({...data, email: e.target.value});
                  }}
                />
              </div>
              <div className="pt-4 file:mb-4">
                <label
                  htmlFor="address"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  rows="3"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                  placeholder="Address"
                  onChange={(e)=>{
                    setData({...data, address: e.target.value});
                  }}
                ></textarea>
              </div>
              <div className="pt-4 file:mb-4">
                <label
                  htmlFor="profile_picture"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Profile Picture
                </label>
                <input
                  type="file"
                  id="profile_picture"
                  name="profile_picture"
                  accept="image/*"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                  onChange={handleProfilePictureChange}
                />
              </div>
            </div>
            <div className="mt-6">
              <button
                type="button"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                onClick={() => addContactDataHandler(data)}
              >
                Add Contact
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
