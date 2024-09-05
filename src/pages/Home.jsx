import React from "react";
import Hero from "../components/container/Hero";
import Services from "../components/container/Services";
import Whys from "../components/container/Whys";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <Services />
      <Whys />
      <p>Home Page</p>
    </div>
  );
}
