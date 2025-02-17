import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import images from "../../assets";

const logo = images?.logo;

export default function Footer() {
  return (
    <div className="flex flex-col items-center w-full h-full bg-black/90 py-4 px-8 text-white divide-y-2">
      <div className="w-full">
        <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
          <img src={logo} alt="Easy Ride Logo" className="w-44 rounded" />
          <div className="flex flex-col gap-2">
            <span className="font-bold text-xl">Easy Ride</span>
            <span>Making movements easy</span>
            <div className="flex flex-col text-nowrap mt-2">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/maps/place/Easing+Life+group+of+companies/@5.9607473,-1.7783867,20.02z/data=!4m14!1m7!3m6!1s0xfdc59af2d50d633:0x61addf4d72ca957d!2sDUNKWA+ON+OFFIN+OFFICE!8m2!3d5.9608813!4d-1.7780946!16s%2Fg%2F11nx235ctw!3m5!1s0xfdc59270482f6b3:0x149260464d63fb95!8m2!3d5.9610047!4d-1.7784332!16s%2Fg%2F11rr31p74f?entry=ttu"
                className="flex items-center gap-2"
              >
                <FaMapMarkerAlt className="text-xl" />
                <span className="text-xs">
                  PMB 249, Post Office Building, Dunkwa, Ghana.
                </span>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/maps/place/Easing+Life+group+of+companies/@5.9607473,-1.7783867,20.02z/data=!4m14!1m7!3m6!1s0xfdc59af2d50d633:0x61addf4d72ca957d!2sDUNKWA+ON+OFFIN+OFFICE!8m2!3d5.9608813!4d-1.7780946!16s%2Fg%2F11nx235ctw!3m5!1s0xfdc59270482f6b3:0x149260464d63fb95!8m2!3d5.9610047!4d-1.7784332!16s%2Fg%2F11rr31p74f?entry=ttu"
                className="flex items-center gap-2"
              >
                <FaPhoneAlt className="text-xl" />
                <span>+233240095360</span>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:easinglife95@gmail.com"
                className="flex items-center gap-2"
              >
                <FaEnvelope className="text-xl" />
                <span>easinglife95@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start justify-between mb-4">
          <div className="flex flex-col">
            <span className="font-semibold text-lg">Navigation</span>
            <div className="flex flex-col gap-1 text-sm">
              <a href="">Home</a>
              <a href="">About</a>
              <a href="">Services</a>
              <a href="">Why Easy Ride?</a>
              <a href="">Testimonials</a>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-lg">Help and Legal</span>
            <div className="flex flex-col gap-1 text-sm">
              <a href="">FAQs</a>
              <a href="">Contact</a>
              <a href="">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center justify-between p-2 text-xs md:text-sm">
        <span>&copy; 2024 Easing Life™. All Rights Reserved.</span>
        <div className="flex gap-2">
          <a href="#" className="text-white">
            <FaFacebookF />
          </a>
          <a href="#" className="text-white">
            <FaTwitter />
          </a>
          <a href="#" className="text-white">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}
