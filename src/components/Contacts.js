import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Manager() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function getAllContacts() {
      fetch("http://localhost/apibackend/crud/fetchContact.php")
        .then(response => response.json())
        .then(data => setContacts(data))
        .catch(error => console.log(error))
    }
    getAllContacts();
  }, []);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <>
      <div className="w-full p-8">
        <p className="mb-8 text-lg text-gray-700">Add or Search Contacts below</p>
        <div className="bg-gray-200 shadow-lg rounded-lg p-20 h-auto ">
          {
            contacts.map((cont, key) => (
              <div key={key} className="mb-8 bg-white shadow-md p-4 rounded-lg flex items-center">
              <div className="rounded-full bg-gray-100 h-32 w-32 mx-5">
              <img src="https://www.citypng.com/public/uploads/preview/png-round-blue-contact-user-profile-icon-11639786938sxvzj5ogua.png" alt="Profile" className="rounded-full w-full h-full" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">{cont.contact_name}</h2>
                <p className="text-gray-600 mb-2">Contact Number: {cont.contact_number}</p>
                <p className="text-gray-600 mb-2">Email Address: {cont.contact_email}</p>
                <p className="text-gray-600 mb-2">Address: {cont.contact_address}</p>
              </div>
            </div>
            ))
          }
        </div>
      </div>
    </>
  )
}
