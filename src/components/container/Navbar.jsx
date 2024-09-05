import React from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import images from "../../assets";

const logo = images?.logo;

export default function Navbar() {
  return (
    <div className="w-full text-black/90 text-xl flex items-center justify-between font-semibold px-6 bg-white shadow-md">
      <div className="flex items-center justify-center">
        <img src={logo} alt="Logo" className="h-20" />{" "}
      </div>
      <div className="md:flex items-center justify-center hidden gap-2">
        <Link
          to="/"
          className="hover:bg-gray-300 px-3 rounded-md transition-all duration-500 py-1"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="hover:bg-gray-300 px-3 rounded-md transition-all duration-500 py-1"
        >
          About
        </Link>
        <Link
          to="/services"
          className="hover:bg-gray-300 px-3 rounded-md transition-all duration-500 py-1"
        >
          Services
        </Link>
        <Link
          to="/faqs"
          className="hover:bg-gray-300 px-3 rounded-md transition-all duration-500 py-1"
        >
          Faq
        </Link>
        <Link
          to="/testimonials"
          className="hover:bg-gray-300 px-3 rounded-md transition-all duration-500 py-1"
        >
          Testimonials
        </Link>
        <Link
          to="/contact"
          className="hover:bg-gray-300 px-3 rounded-md transition-all duration-500 py-1"
        >
          Contact Us
        </Link>
      </div>
      <div className="md:hidden">
        <Hamburger />
      </div>
    </div>
  );
}
