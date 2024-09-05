import React from "react";
import Button from "../common/Button";
import { FaGooglePlay } from "react-icons/fa6";
import { FaAppStoreIos } from "react-icons/fa6";

export default function Hero() {
  return (
    <div>
      <section className="bg-center bg-no-repeat bg-[url('https://wallpaperset.com/w/full/c/6/b/181012.jpg')] bg-gray-700 bg-blend-multiply">
        <div className="container mx-auto px-4 text-center py-12 md:py-24 lg:py-32 xl:py-56">
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-tight text-yellow-500 sm:text-4xl md:text-5xl lg:text-6xl">
            Easy Ride by Easing Life
          </h1>
          <p className="mb-8 text-base font-normal text-yellow-500 sm:text-lg md:text-xl lg:text-2xl max-w-full mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            voluptatibus totam repellat illo doloribus blanditiis, vel rerum eum
            dolorem tempore aperiam quo rem ipsa sunt! Doloremque adipisci
            officiis labore culpa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-4">
            <Button
              value={
                <span className="flex flex-col items-center">
                  <FaGooglePlay className="text-xl sm:text-2xl" />
                  Google Play
                </span>
              }
              className="bg-yellow-600 text-white border border-yellow-600 py-2 px-4 rounded"
            />
            <Button
              value={
                <span className="flex flex-col items-center">
                  <FaAppStoreIos className="text-xl sm:text-2xl" />
                  Apple Store
                </span>
              }
              className="bg-yellow-600 text-white border border-yellow-600 py-2 px-4 rounded"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto flex flex-col sm:flex-row items-center py-6 sm:py-12">
          <div className="w-full sm:w-1/4 h-[1px] rounded-md bg-yellow-500"></div>
          <div className="px-4 sm:px-8 py-2 bg-yellow-500 w-full sm:w-3/4 items-center justify-center text-center rounded-lg font-bold text-base sm:text-xl text-white">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo,
              nobis numquam esse non ab laboriosam soluta magni neque minus
              cumque doloribus similique tenetur veniam est accusamus! Maiores
              culpa error modi!
            </p>
          </div>
          <div className="w-full sm:w-1/4 h-[1px] rounded-md bg-yellow-500"></div>
        </div>
      </section>
    </div>
  );
}
