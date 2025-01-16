import React, { useState } from "react";
import Button from "./Button";

export default function Form() {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setShowAlert(true);

    // إخفاء الرسالة بعد 3 ثوانٍ
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <div className="relative bg-white shadow-md rounded-md p-6 max-w-lg mx-auto">
      {showAlert && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-green-500 text-white px-6 py-4 rounded-md shadow-md text-center">
            <p className="text-lg font-semibold">Email sent successfully!</p>
          </div>
        </div>
      )}
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
          />
        </div>
        <Button className="mt-4 w-full" name="Submit" />
      </form>
    </div>
  );
}
