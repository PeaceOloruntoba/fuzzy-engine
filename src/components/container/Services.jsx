import React from "react";
import images from "../../assets";

const hireDriver = images?.hireDriver;
const bookTaxi = images?.bookTaxi;

export default function Services() {
  return (
    <div className="flex flex-col w-full bg-black/80 text-white">
      <span>Services</span>
      <div className="grid grid-cols-2 items-center justify-center">
        <div className="flex p-4 border border-yellow-600">
          <img src={hireDriver} alt="" />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-xl font-semibold">Hire a Driver</span>
          <span>
            Easing life group of companies thought of a way to ease life and
            then created the Easing Life Taxi; thereby providing job opportunity
            to all drivers out there who can now start to make a living out of
            driving for Easing Life Taxi. This is to say that the Easing Life
            Taxi is a means of job creation for many who can drive out there.
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 items-center justify-center">
        <div className="flex p-4 border border-yellow-600">
          <img src={bookTaxi} alt="" />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-xl font-semibold">Book a Taxi</span>
          <span>
            The second and the main goal of creating this branch of the company
            is to give our customers easy transport system. With easing life
            taxi, you can now sit at your comfort and call for a taxi to give
            you a ride to anywhere across the nation with ease. Always Easing
            Life.
          </span>
        </div>
      </div>
    </div>
  );
}
