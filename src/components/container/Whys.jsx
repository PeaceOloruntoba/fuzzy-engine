import React from "react";
import { apple, ddd, play } from "../assets"; // Ensure correct paths to your assets

export default function Whys() {
  return (
    <div className="grid py-14 bg-gray-100" id="start">
      {/* Why Choose Us Section */}
      <div className="flex flex-col lg:flex-row items-center justify-evenly px-6 md:px-12 gap-8 py-8">
        {/* Image for larger screens */}
        <img
          src={ddd}
          alt="Why Choose Us"
          className="w-full lg:w-1/2 rounded-3xl hidden lg:block"
        />

        {/* Text Content */}
        <div className="bg-white p-6 rounded-3xl shadow-lg border border-yellow-500 w-full lg:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-gray-700 mb-4">
            **Reliable and Punctual:** At Easing Life Taxi, we prioritize your
            time. Our drivers are committed to arriving promptly, ensuring you
            reach your destination on time, every time.
          </p>
          <p className="text-gray-700 mb-4">
            **Safe and Secure:** Your safety is our top priority. All our
            drivers are thoroughly vetted and trained to provide a secure and
            comfortable ride experience.
          </p>
          <p className="text-gray-700 mb-6">
            **Affordable Rates:** We offer competitive pricing without
            compromising on quality. Enjoy transparent rates with no hidden
            fees, making your rides budget-friendly.
          </p>

          {/* App Store Buttons */}
          <div className="flex gap-4 justify-center lg:justify-start">
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={play}
                alt="Download on Google Play"
                className="h-12 md:h-16"
              />
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={apple}
                alt="Download on the App Store"
                className="h-12 md:h-16"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Why Trust Us Section */}
      <div className="flex flex-col lg:flex-row-reverse items-center justify-evenly px-6 md:px-12 gap-8 py-8">
        {/* Image for larger screens */}
        <img
          src={ddd}
          alt="Why Trust Us"
          className="w-full lg:w-1/2 rounded-3xl hidden lg:block"
        />

        {/* Text Content */}
        <div className="bg-white p-6 rounded-3xl shadow-lg border border-yellow-500 w-full lg:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-4">
            Why Trust Us?
          </h2>
          <p className="text-gray-700 mb-4">
            **Experienced Drivers:** Our team consists of seasoned drivers with
            extensive knowledge of Ghana's roads, ensuring efficient and
            hassle-free journeys.
          </p>
          <p className="text-gray-700 mb-4">
            **24/7 Customer Support:** We’re here for you around the clock. Our
            dedicated support team is available 24/7 to assist with any
            inquiries or concerns you may have.
          </p>
          <p className="text-gray-700 mb-6">
            **Transparent Tracking:** Track your ride in real-time with our
            user-friendly app. Know exactly when your driver will arrive and
            monitor your route for added peace of mind.
          </p>

          {/* App Store Buttons */}
          <div className="flex gap-4 justify-center lg:justify-start">
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={play}
                alt="Download on Google Play"
                className="h-12 md:h-16"
              />
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={apple}
                alt="Download on the App Store"
                className="h-12 md:h-16"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Responsive Images for Smaller Screens */}
      <div className="flex flex-col lg:hidden items-center justify-center px-6 gap-8 py-8">
        {/* Why Choose Us Image for Small Screens */}
        <img
          src={ddd}
          alt="Why Choose Us"
          className="w-full rounded-3xl mb-4"
        />

        {/* Why Trust Us Image for Small Screens */}
        <img src={ddd} alt="Why Trust Us" className="w-full rounded-3xl mt-4" />
      </div>
    </div>
  );
}
