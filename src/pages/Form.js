import React from "react";

function Form() {
  return (

<div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url('https://wallpapercave.com/wp/wp7533080.jpg')`,
        backgroundSize: 'cover'}}>
      <div className="relative z-10">

    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center text-gray-700 my-8">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-2">Contact Information</h2>
          <p className="mb-4">
            Please fill out the form below to send us a message.
          </p>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
              <input type="text" id="name" className="form-input w-full rounded-md border-gray-300"/>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input type="email" id="email" className="form-input w-full rounded-md border-gray-300"/>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
              <textarea id="message" className="form-textarea w-full rounded-md border-gray-300" rows="6"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-center self-end">Submit</button>
          </form>
        </div>
      </div>
    </div>
    </div>
</div>
  );
}

export default Form;