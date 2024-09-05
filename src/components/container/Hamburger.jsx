import React, { useState } from "react";
import { CgMenuRight, CgCloseR } from "react-icons/cg";
import { Link } from "react-router-dom";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className="text-gray-500 focus:outline-none focus:text-gray-600"
        onClick={toggleMenu}
      >
        {isOpen ? (
          <CgCloseR className="text-3xl" />
        ) : (
          <CgMenuRight className="text-3xl" />
        )}
      </button>

      {isOpen && (
        <div className="fixed top-0 left-0 bottom-0 z-10 bg-opacity-90 w-screen h-screen bg-black/80 text-white font-semibold text-lg shadow-lg">
          <div className="flex flex-col gap-8 items-start h-screen p-4 pt-[4em]">
            <ul className="flex flex-col gap-4">
              <li>
                <Link to="/" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setIsOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={() => setIsOpen(false)}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/faqs" onClick={() => setIsOpen(false)}>
                  Faq
                </Link>
              </li>
              <li>
                <Link to="/testimonials" onClick={() => setIsOpen(false)}>
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
