import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="w-full text-black/70 bg-white/80 text-xl flex items-center justify-between">
      <div className="flex items-center justify-center">
        <img src="" alt="" />
      </div>
      <div className="md:flex items-center justify-center hidden">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Services</a>
        <a href="">Faq</a>
        <a href="">Testimonials</a>
        <a href="">Contact Us</a>
      </div>
    </div>
  );
}
