import React from "react";

const ContactForm1: React.FC = () => {
  return (
    <form className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block text-white font-medium mb-2">
          Name
        </label>
        <input type="text" id="name" name="name" className="w-full rounded border-gray-300 bg-white px-4 py-2" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-white font-medium mb-2">
          Email
        </label>
        <input type="email" id="email" name="email" className="w-full rounded border-gray-300 bg-white px-4 py-2" />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-white font-medium mb-2">
          Message
        </label>
        <textarea id="message" name="message" className="w-full rounded border-gray-300 bg-white px-4 py-2" rows={4}></textarea>
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
        Submit
      </button>
    </form>
  );
};

export default ContactForm1;
