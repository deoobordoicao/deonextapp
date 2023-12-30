import React from "react";

const ContactForm2: React.FC = () => {
  return (
    <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 rounded-lg">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4">Message Me</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input type="text" id="name" name="name" className="w-full rounded border-gray-300 bg-white px-4 py-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input type="email" id="email" name="email" className="w-full rounded border-gray-300 bg-white px-4 py-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea id="message" name="message" className="w-full rounded border-gray-300 bg-white px-4 py-2" rows={4}></textarea>
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm2;
