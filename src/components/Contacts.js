import { useState, useEffect } from 'react';

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

  const handleUpdate = (contactId) => {
    console.log("Update contact with ID:", contactId);
  };

  const handleDelete = (contactId) => {
    console.log("Delete contact with ID:", contactId);
  };

  return (
    <>
      <div className="w-full p-8">
        <p className="mb-8 text-lg text-gray-700">Add or Search Contacts below</p>
        <div className="bg-gray-200 shadow-lg rounded-lg p-20 h-auto">
          <div className="grid grid-cols-2 gap-4 mb-6 pr-8">
            {contacts.map((cont, key) => (
              <div key={key} className={`bg-white shadow-md p-4 rounded-lg flex items-start ${key % 2 === 0 ? 'col-1' : 'col-2'}`}>
                <div className="rounded-full bg-gray-100 h-32 w-32 mx-5">
                  <img src="https://www.citypng.com/public/uploads/preview/png-round-blue-contact-user-profile-icon-11639786938sxvzj5ogua.png" alt="Profile" className="rounded-full w-full h-full" />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">{cont.contact_name}</h2>
                  <p className="text-gray-600 mb-2">Contact Number: {cont.contact_number}</p>
                  <p className="text-gray-600 mb-2">Email Address: {cont.contact_email}</p>
                  <p className="text-gray-600 mb-2">Address: {cont.contact_address}</p>
                  <div className="mb-6"></div>
                  <div>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
                      onClick={() => handleUpdate(cont.contact_id)}>Update</button>
                    <button className="px-4 py-2 bg-red-500 text-white rounded-md"
                      onClick={() => handleDelete(cont.contact_id)}>Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}


