import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="w-full text-black/90 text-xl flex items-center justify-between font-semibold py-2 px-6">
      <div className="flex items-center justify-center">
        <img src="" alt="" />
      </div>
      <div className="md:flex items-center justify-center hidden gap-2">
        <a href="" className="hover:bg-gray-300 px-3 rounded-md transition-all duration-500 py-1">Home</a>
        <a href="" className="hover:bg-gray-300 px-3 rounded-md transition-all duration-500 py-1">About</a>
        <a href="" className="hover:bg-gray-300 px-3 rounded-md transition-all duration-500 py-1">Services</a>
        <a href="" className="hover:bg-gray-300 px-3 rounded-md transition-all duration-500 py-1">Faq</a>
        <a href="" className="hover:bg-gray-300 px-3 rounded-md transition-all duration-500 py-1">Testimonials</a>
        <a href="" className="hover:bg-gray-300 px-3 rounded-md transition-all duration-500 py-1">Contact Us</a>
      </div>
    </div>
  );
}
