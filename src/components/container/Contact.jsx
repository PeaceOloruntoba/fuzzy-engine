import React, { useState } from "react";
import { FaEnvelope, FaHome, FaPhone } from "react-icons/fa";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        formData,
        "YOUR_USER_ID" // Replace with your EmailJS user ID
      )
      .then((result) => {
        console.log("Email successfully sent:", result.text);
      })
      .catch((error) => {
        console.log("Error sending email:", error.text);
      });

    // Reset the form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="bg-yellow-500 text-xl py-8" id="contact">
      <p className="text-3xl font-bold p-2 px-8 text-center">Contact Us</p>
      <div className="flex items-center justify-center">
        <div className="grid bg-gray-900 mb-4 px-8 py-8 w-full max-w-3xl rounded-md shadow-md">
          <p className="py-4 text-center text-white">
            You can contact us through the following means:
          </p>
          <div className="lg:flex sm:grid gap-10">
            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="grid py-4 items-center justify-center w-full"
            >
              <div className="lg:flex gap-6 sm:grid">
                <div className="grid gap-4 items-center justify-center w-full">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border rounded border-yellow-500 outline-none px-4 py-2 text-white"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-transparent border rounded border-yellow-500 outline-none px-4 py-2 text-white"
                    required
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-transparent border rounded border-yellow-500 outline-none px-4 py-2 text-white"
                    required
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="rounded border w-full border-yellow-500 bg-transparent outline-none px-4 py-2 text-white sm:mt-4 lg:mt-0"
                  rows="6"
                  required
                />
              </div>
              <button
                type="submit"
                className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px              -6 rounded border border-yellow-500 w-full lg:w-1/3"
              >
                Submit
              </button>
            </form>
            <div className="border mt-6 lg:mt-0 p-4 text-center border-yellow-500 text-yellow-500 w-full">
              <p className="text-2xl font-semibold">Contact Details</p>
              <div className="py-4 flex flex-col items-center">
                <span className="flex gap-2 items-center py-2">
                  <FaHome />
                  <b>Address</b>: PMB 249, Post Office Building, Dunkwa, Ghana.
                </span>
                <span className="flex gap-2 items-center py-2">
                  <FaEnvelope />
                  <b>Email</b>: easinglife95@gmail.com
                </span>
                <span className="flex gap-2 items-center py-2">
                  <FaPhone />
                  <b>Phone</b>: +233240095360, +233508842204
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
