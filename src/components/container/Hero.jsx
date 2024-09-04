import React from "react";
import Button from "../common/Button";

export default function Hero() {
  return (
    <div className="relative w-full bg-black/80">
      <img src="" className="w-full inset-0" alt="" />
      <div className="absolute w-full h-full">
        <div className="flex flex-col items-center justify-center gap-2">
          <span>Easy Ride by Easing Life</span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            odio voluptas perferendis fugiat! Doloribus impedit pariatur autem!
            Quae exercitationem voluptas facere soluta, accusantium odit illum
            ut, necessitatibus, debitis magnam assumenda!
          </span>
          <div className="flex gap-4 items-center justify-center">
            <Button
              value="Get Started"
              className="bg-yellow-600 text-white border border-yellow-600 py-2 px-6"
            />
            <Button
              value="Contact Us"
              className="bg-yellow-600 text-white border border-yellow-600 py-2 px-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
