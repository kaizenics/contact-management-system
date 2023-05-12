import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function Update() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({
    id: id,
    name: '',
    contact: '',
    email: '',
    address: '',
  });

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const response = await fetch(`http://localhost/apibackend/crud/updateContact.php?id=${id}`);
        const responseData = await response.json();

        if (responseData.Message === "No data") {
          console.log("Contact not found");
        } else {
          const contactData = responseData[0];
          setData((prevData) => ({
            ...prevData,
            name: contactData.contact_name,
            contact: contactData.contact_number,
            email: contactData.contact_email,
            address: contactData.contact_address,
          }));
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchContactData();
  }, [id]);

  async function updateContactDataHandler() {
    const updatedData = {
      id: id,
      name: data.name,
      contact: data.contact,
      email: data.email,
      address: data.address,
    };

    try {
      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      };
      const url = `http://localhost/apibackend/crud/updateContact.php`;

      const res = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(updatedData),
      });

      const response = await res.json();
      console.warn(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800">Update Contact</h2>
          </div>
          <form className="mt-8 space-y-6">
            <div className="rounded-full bg-gray-100 h-32 w-32 mx-auto mb-4">
              <img className="object-cover rounded-full w-full h-full" src="https://www.citypng.com/public/uploads/preview/png-round-blue-contact-user-profile-icon-11639786938sxvzj5ogua.png" alt="profile" />
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
                  value={data.name}
                  onChange={(e) => {
                    setData((prevData) => ({ ...prevData, name: e.target.value }));
                  }}
                />
              </div>
              <div className="pt-4 mb-4">
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
                  value={data.contact}
                  onChange={(e) => {
                    setData((prevData) => ({ ...prevData, contact: e.target.value }));
                  }}
                />
              </div>
              <div className="pt-4 mb-4">
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
                  value={data.email}
                  onChange={(e) => {
                    setData((prevData) => ({ ...prevData, email: e.target.value }));
                  }}
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
                  name="address"
                  rows="3"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                  placeholder="Address"
                  value={data.address}
                  onChange={(e) => {
                    setData((prevData) => ({ ...prevData, address: e.target.value }));
                  }}
                ></textarea>
              </div>
            </div>
            <div className="mt-6">
              <button
                type="button"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                onClick={updateContactDataHandler}
              >
                Update Contact
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
