import React from "react";
import images from "../../assets";

const hireDriver = images?.hireDriver;
const bookTaxi = images?.bookTaxi;

export default function Services() {
  return (
    <div className="flex flex-col w-full bg-black/80 text-white px-6 md:px-12 lg:px-24 items-center justify-center py-8">
      {/* Title Section */}
      <div className="flex py-6">
        <span className="text-3xl md:text-4xl lg:text-5xl font-semibold text-yellow-400">
          Our Services
        </span>
      </div>

      {/* Hire a Driver Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4 md:gap-8 py-6">
        <div className="flex p-4 border border-yellow-600 items-center justify-center">
          <img
            className="w-[70%] md:w-[80%]"
            src={hireDriver}
            alt="Hire a Driver"
          />
        </div>
        <div className="flex flex-col gap-2 p-4 text-center md:text-left">
          <span className="text-2xl md:text-3xl font-semibold">
            Hire a Driver
          </span>
          <p className="text-base md:text-lg">
            At Easing Life, we provide a unique opportunity for professional
            drivers to earn a living. Join our team of skilled drivers, and
            begin your journey toward financial independence with a flexible
            schedule and a competitive salary.
          </p>
          <p className="text-base md:text-lg">
            Whether you&apos;re a driver seeking a steady job or simply want to
            work on your own terms, our platform opens up doors for endless
            opportunities. Be a part of something bigger, and let&apos;s keep
            Ghana moving forward.
          </p>
        </div>
      </div>

      {/* Book a Taxi Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4 md:gap-8 py-6">
        <div className="flex flex-col gap-2 p-4 text-center md:text-left order-2 md:order-1">
          <span className="text-2xl md:text-3xl font-semibold">
            Book a Taxi
          </span>
          <p className="text-base md:text-lg">
            Need a reliable ride across Ghana? With Easing Life Taxi, you can
            book a taxi from anywhere in the country with just a tap. Enjoy a
            smooth, safe, and convenient ride to any destination, whether you're
            heading to work, an event, or exploring the city.
          </p>
          <p className="text-base md:text-lg">
            Easing Life offers a seamless booking process, affordable rates, and
            professional drivers to ensure you get where you need to be on time
            and in comfort.
          </p>
        </div>
        <div className="flex p-4 border border-yellow-600 items-center justify-center order-1 md:order-2">
          <img
            className="w-[70%] md:w-[80%]"
            src={bookTaxi}
            alt="Book a Taxi"
          />
        </div>
      </div>
    </div>
  );
}
