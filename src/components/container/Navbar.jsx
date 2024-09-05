import React from "react";
import Hamburger from "./Hamburger";
import images from "../../assets";

const logo = images?.logo;

export default function Navbar() {
  return (
    <div className="w-full text-black/90 text-xl flex items-center justify-between font-semibold py-2 px-6 bg-white shadow-md">
      <div className="flex items-center justify-center">
        <img src={logo} alt="Logo" className="h-10" />
      </div>
      <div className="md:flex items-center justify-center hidden gap-2">
        <a
          href="#hero"
          className="hover:bg-gray-300 px-3 rounded-md transition-all duration-500 py-1"
        >
          Home
        </a>
        <a
          href="#services"
          className="hover:bg-gray-300 px-3 rounded-md transition-all duration-500 py-1"
        >
          Services
        </a>
        <a
          href="#whys"
          className="hover:bg-gray-300 px-3 rounded-md transition-all duration-500 py-1"
        >
          Why Easy Ride?
        </a>
        <a
          href="#faqs"
          className="hover:bg-gray-300 px-3 rounded-md transition-all duration-500 py-1"
        >
          Faqs
        </a>
        <a
          href="#testimonial"
          className="hover:bg-gray-300 px-3 rounded-md transition-all duration-500 py-1"
        >
          Testimonials
        </a>
        <a
          href="#contact"
          className="hover:bg-gray-300 px-3 rounded-md transition-all duration-500 py-1"
        >
          Contact Us
        </a>
      </div>
      <div className="md:hidden">
        <Hamburger />
      </div>
    </div>
  );
}
